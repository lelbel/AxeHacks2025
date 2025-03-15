const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/calendar", (req, res) => res.sendFile(path.join(__dirname, "public", "calendar.html")));
app.get("/tasks-page", (req, res) => res.sendFile(path.join(__dirname, "public", "tasks.html")));

mongoose.connect("mongodb+srv://admin:admin@cluster0.hs4hc.mongodb.net/axe_hacks", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log(" MongoDB connected"))
.catch(err => console.error(" MongoDB connection error:", err));

const taskSchema = new mongoose.Schema({
    title: String,
    status: String,
    dueDate: String,
    points: Number
});

const Task = mongoose.model("Task", taskSchema);

app.post("/tasks", async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put("/tasks/:id", async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Task updated" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
