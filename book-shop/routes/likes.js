import express from "express";
import { addLike, removeLike } from "../controller/LikeController.js";

const router = express.Router();

router.use(express.json());

router.post("/:id", addLike); // 좋아요 추가
router.delete("/:id", removeLike); // 좋아요 삭제

export default router;
