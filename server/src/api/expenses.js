const { Router } = require("express");
const ExpenseEntry = require("../models/ExpenseEntry");

const router = Router();

router.get('/', async(req, res) => {
    try {
        const entries = await ExpenseEntry.find();
        res.json(entries)
    } catch (error) {
        console.error(error)
    }
});

router.post('/', async(req, res) => {
    try {
        const expensEntry = new ExpenseEntry(req.body);
        const createdAt  = await expensEntry.save();   
        res.json(createdAt)
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;