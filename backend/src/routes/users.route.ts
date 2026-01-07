import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { prisma } from "../utils/prisma";

const router = Router();
router.route("/login").post((req, res) => {
  res.json({ message: "Login" });
});
router.route("/register").post((req, res) => {
  res.json({ message: "Register" });
});
router.route("/").get(
  asyncHandler(async (req, res, next) => {
    const users = await prisma.users.findMany({});
    res.json({ users });
  })
);
export default router;
