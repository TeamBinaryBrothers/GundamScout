const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define schema and model
const GundamSchema = new mongoose.Schema({
  name: String,
  grade: String,
  scale: String,
  series: String,
  image: String,
});

const Gundam = mongoose.model("Gundam", GundamSchema);

// Fetch initial gundams
app.get("/gundams/init", async (req, res) => {
  try {
    const gundams = await Gundam.find().limit(24);
    res.json({ gundams });
  } catch (error) {
    console.error("❌ Init fetch failed", error);
    res.status(500).json({ message: "Failed to fetch Gundam kits." });
  }
});

// Search by name
app.get("/gundams/search", async (req, res) => {
  const query = req.query.query || "";
  console.log("🔍 Search query received:", query);
  try {
    const gundams = await Gundam.find({
      name: { $regex: query, $options: "i" },
    });
    console.log("✅ Search results count:", gundams.length);
    res.json({ gundams });
  } catch (error) {
    console.error("❌ Search failed", error);
    res.status(500).json({ message: "Search failed." });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
