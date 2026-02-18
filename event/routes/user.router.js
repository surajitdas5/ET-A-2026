import express from 'express'

import {
    addUser,
    allUsers,
    getUserById,
    updateUser,
    deleteUser
} from "./../controller/user.controller.js"

const router = express.Router();


router.post("/", addUser)
router.get("/", allUsers)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router