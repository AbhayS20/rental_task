import { NextFunction, Request, Response } from "express";
import { getInstance } from "../../../utilities/db";
import { RentItem } from "../types";

export default async function create(req: Request, res: Response, next: NextFunction) {
    try {

        const { name, rent_price, manufacture_date } = req.body;
        const db = await getInstance();

        const data: RentItem = {
            name,
            rent_price,
            manufacture_date,
            taken_by: null
        };

        const result = await db.collection("rent_items").insertOne(data);

        res.status(200).json({
            message: "Item Created Successfully",
            data: result.ops[0]
        });

    } catch (err) {
        next(err);
    }
}
