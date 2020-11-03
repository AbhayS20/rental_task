import express from "express";
import users from "../controllers/users";
import { validator } from "../utilities/validator";

const router = express.Router();

router
    .route("/users")
    .post(validator({ body: users.create.validate.body }), users.create.create)

router
    .route("/users/:user_id")
    .put(validator({
        body: users.update.validate.body,
        params: users.update.validate.params
    }), users.update.update)
    .delete(validator({ params: users.remove.validate.params }), users.remove.remove);

export default router;
