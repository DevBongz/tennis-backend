const express = require("express");
const gameRoutes = require("./routes/gameRoutes");
const cors = require('cors'); 

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/game", gameRoutes);

// Route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the Tennis Backend API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// app.use(cors({ origin: 'https://your-frontend.vercel.app' }));