import express from 'express'

import {
    addUser,
    allUsers,
    getUserById,
    updateUser,
    deleteUser
} from "./../controller/user.controller.js"

import logger from '../middlewares/logger.middleware.js';

const router = express.Router();


router.post("/", addUser)
router.get("/", logger, allUsers)
router.get("/:id", logger, getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router