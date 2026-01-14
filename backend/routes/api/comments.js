/**
 * Express router for comment-related API endpoints
 * @type {Express.Router}
 */

/**
 * Retrieves all comments from the database
 * @async
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Deletes a comment by its ID
 * @async
 * @route DELETE /:id
 * @param {string} req.params.id - The comment ID to delete
 * @returns {Promise<void>} JSON success message if deleted, 404 if not found
 * @throws {Error} Returns 404 status if comment not found, 500 if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});