import { NextFunction, Request, Response } from "express";
import { getInstance, getObjectId } from "../../../utilities/db";
import { RentItem } from "../types";

export default async function update(req: Request, res: Response, next: NextFunction) {
    try {
        const { rent_item_id } = req.params;
        const { name, rent_price, manufacture_date } = req.body;
        const db = await getInstance();

        const data: RentItem = {
            name,
            rent_price,
            manufacture_date
        };
        const result = await db.collection("rent_items").updateOne({ _id: getObjectId(rent_item_id) }, { $set: data});
        res.status(200).json({
            message: "Item Updated Successfully",
            data
        });

    } catch (err) {
        next(err);
    }
}
