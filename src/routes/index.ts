import express, { NextFunction, Request, Response } from "express";
import { log } from "../utilities/logger";
import rentItemsRoutes from "./rent-items";
import userRoutes from "./users";

const router = express.Router();

// user related routes
router.use(userRoutes);
// rent items related routes
router.use(rentItemsRoutes);

router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    log(error);
    res.status(503).json({
        message: "Service Error"
    });
});

export default router;
