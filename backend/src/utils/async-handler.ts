import { NextFunction, Request, RequestHandler, Response } from "express";
// avoiding promises and try catch hell everywhere
export function asyncHandler(fn: RequestHandler) {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
}
