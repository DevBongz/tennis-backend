const express = require("express");
const gameRoutes = require("./routes/gameRoutes");
const cors = require('cors'); 

const app = express();
app.use(cors());
const PORT = 3000;

//Middleware
app.use(express.json());

//Routes
app.use("/api/game", gameRoutes);

//Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
