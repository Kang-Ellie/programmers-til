import express from "express";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../controller/CartController.js";

const router = express.Router();

router.use(express.json());

router.post("/", addToCart); // 장바구니 담기
router.get("/", getCartItems); // 장바구니 아이템 목록 조회 / 선택된 장바구니 아이템 목록 조회
router.delete("/:id", removeCartItem); // 장바구니 도서 삭제

export default router;
