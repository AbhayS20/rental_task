import { NextFunction, Request, Response } from "express";

export function validator(schemaMap: any) {
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            for (const key in schemaMap) {
                switch (key) {
                    case "body": await schemaMap[key].validateAsync(req.body);
                                 break;
                    case "query": await schemaMap[key].validateAsync(req.query);
                                  break;
                    case "params": await schemaMap[key].validateAsync(req.params);
                                   break;
                }
            }
            next();
        } catch (err) {
            res.status(422).json({
                err
            });
        }
    };
}
