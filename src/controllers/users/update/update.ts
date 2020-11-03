import { NextFunction, Request, Response } from "express";
import { generate_hash } from "../../../utilities/bcrypt";
import { getInstance, getObjectId } from "../../../utilities/db";
import { User } from "../types";

export default async function update(req: Request, res: Response, next: NextFunction) {
    try {
        const { user_id } = req.params;
        const { password, email, name } = req.body;
        const db = await getInstance();
        const hash: string = await generate_hash(password);

        const data: User = {
            email,
            name,
            password_hash: hash
        };

        const result = await db.collection("users")
            .updateOne({ _id: getObjectId(user_id) }, { $set: data });

        res.status(200).json({
            message: "User Updated Successfully",
            data
        });

    } catch (err) {
        next(err);
    }
}
