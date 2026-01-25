require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const translate = require("./utils/translate");
const port = process.env.PORT;

//------cors config-----
const corsOptions = {
  origin: ["http://localhost:5173", "http://textutils-kappa-six.vercel.app/"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
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
    const translatedText = await translate(text);
    return res.status(200).json({ success: "ok", translatedText });
  } catch (err) {
    return res.status(500).json({ success: "error", message: err.message });
  }
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
