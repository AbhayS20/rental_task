import express from "express";
import rentItems from "../controllers/rentItems";
import { validator } from "../utilities/validator";

const router = express.Router();

router
    .route("/rent-items")
    .post(validator({ body: rentItems.create.validate.body }), rentItems.create.create);

router
    .route('/rent-items/:rent_item_id')
    .put(validator({
        body: rentItems.update.validate.body,
        params: rentItems.update.validate.params
    }), rentItems.update.update)
    .delete(validator({ params: rentItems.remove.validate.params }), rentItems.remove.remove);

export default router;
