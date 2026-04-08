import express from "express";


import {
    addEvent,
    allEvents,
    updateEventImage,
    getEventById,
    searchEvent
} from "./../controller/event.controller.js"

import upload from "../middlewares/fileUpload.middleware.js";

const router = express.Router()

router.post("/", upload.single("image") , addEvent)
router.get("/", allEvents)
router.get("/:id", getEventById)
router.put("/update-image/:id", upload.single("image") , updateEventImage)
router.post("/search", searchEvent)

export default router