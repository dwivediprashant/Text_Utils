require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const translate = require("./utils/translate");
const port = process.env.PORT;

//------cors config-----
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://textutils-kappa-six.vercel.app",
    "textutils-git-main-prashants-projects-0dc8cb90.vercel.app",
    "https://textutils-ajix40xsh-prashants-projects-0dc8cb90.vercel.app",
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));
//-----------

app.post("/translate", async (req, res) => {
  const { text } = req.body || {};
  if (!text) {
    return res.status(200).json({ success: "ok", translatedText: "" });
  }
  try {
    const translatedText = await translate(text.trim());
    return res.status(200).json({ success: "ok", translatedText });
  } catch (err) {
    return res.status(500).json({ success: "error", message: err.message });
  }
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
