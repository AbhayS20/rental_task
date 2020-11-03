import { ObjectId } from "mongodb";
import { NextFunction, Request, Response } from "express";
import { getInstance, getObjectId } from "../../../utilities/db";

export default async function remove(req: Request, res: Response, next: NextFunction) {
    try {
        const { rent_item_id } = req.params;
        const db = await getInstance();

        const result = await db.collection("rent_items").findOne({ _id: new ObjectId(rent_item_id) });
        
        // item not found
        if(!result){
            return res.status(422).json({
                message: "Item doesn't exist",
                rent_item_id
            });
        }

        if(result.taken_by){
            return res.status(400).json({
                message: "Item is taken, so can't removed now",
                rent_item_id,
                taken_by: result.taken_by
            });
        }
        
        await db.collection("rent_items").deleteOne({ _id: getObjectId(rent_item_id) });

        res.status(200).json({
            message: "Item Deleted Successfully",
            rent_item_id
        });

    } catch (err) {
        next(err);
    }
}
