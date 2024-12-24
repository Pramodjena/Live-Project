const express = require("express");

const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "It's working" });
});

// port
const port = process.env.PORT || 5001;

// server run
app.listen(port, () => console.log(`Server is running at ${port}`));
