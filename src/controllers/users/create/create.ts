import { NextFunction, Request, Response } from "express";
import { generate_hash } from "../../../utilities/bcrypt";
import { getInstance } from "../../../utilities/db";
import { User } from "../types";

export default async function create(req: Request, res: Response, next: NextFunction) {
    try {
        const { password, email, name } = req.body;
        const db = await getInstance();
        const hash: string = await generate_hash(password);

        const data: User = {
            email,
            name,
            password_hash: hash
        };

        const result = await db.collection("users").insertOne(data);

        res.status(200).json({
            message: "User Created Successfully",
            data: result.ops[0]
        });

    } catch (err) {
        next(err);
    }
}
