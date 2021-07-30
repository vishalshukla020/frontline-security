const fast2sms = require("fast-two-sms");
import Post from "../../../models/Post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const obj = req.body;
    return res.status(200).send(obj);
  }
  return res.status(404).send("Method not allowed");
}
