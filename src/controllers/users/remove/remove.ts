import { NextFunction, Request, Response } from "express";
import { getInstance, getObjectId } from "../../../utilities/db";

export default async function remove(req: Request, res: Response, next: NextFunction) {
    try {
        const { user_id } = req.params;
        const db = await getInstance();

        const r = await db.collection("users").deleteOne({ _id: getObjectId(user_id) });

        res.status(200).json({
            message: "User Deleted Successfully",
            user_id
        });

    } catch (err) {
        next(err);
    }
}
