import express from "express";
const router = express.Router();
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getUserOrders,
  getAllOrders,
  markOrderDelivered,
} from "../controllers/orderController.js";

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, isAdmin, getAllOrders);
router.route("/myorders").get(protect, getUserOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, isAdmin, markOrderDelivered);

export default router;
