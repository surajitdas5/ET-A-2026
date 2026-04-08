import express from 'express'

import {
    addUser,
    allUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
    logout,
    getCurrentUser
} from "./../controller/user.controller.js"

import logger from '../middlewares/logger.middleware.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();


router.post("/", addUser)
router.post("/login", loginUser)

router.get("/", logger, auth, allUsers)
router.get("/logout", auth, logout)
router.get("/current-user", auth, getCurrentUser)
router.get("/:id", logger, auth, getUserById)

router.put("/:id", auth, updateUser)

router.delete("/:id", auth, deleteUser)

export default router