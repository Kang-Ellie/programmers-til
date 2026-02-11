import express from "express";
import { allCategory } from "../controller/CategoryController.js";

const router = express.Router();

router.use(express.json());

router.get("/", allCategory); // 카테고리 전체 목록 조회

export default router;
