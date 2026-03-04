import { Router } from "express";
import {
    createUserController,
    getAllUsersController,
    getUserController,
    updateUserController,
    replaceUserController,
    softDeleteUserController,
    deleteUserController,
} from "../controllers/user.controller";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// GET    /api/users            → any authenticated user
router.get("/", getAllUsersController);

// GET    /api/users/:id        → any authenticated user
router.get("/:id", getUserController);

// POST   /api/users            → admin only
router.post("/", isAdmin, createUserController);

// PATCH  /api/users/:id        → admin only
router.patch("/:id", isAdmin, updateUserController);

// PUT    /api/users/:id        → admin only
router.put("/:id", replaceUserController);

// DELETE /api/users/:id/soft   → admin only (soft delete)
router.delete("/:id/soft", isAdmin, softDeleteUserController);

// DELETE /api/users/:id        → admin only (hard delete)
router.delete("/:id", isAdmin, deleteUserController);

export default router;
