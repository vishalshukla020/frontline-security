const fast2sms = require("fast-two-sms");
import Post from "../../../models/Post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (req.body.type == "payment") {
        const user = await Post.findByIdAndUpdate(req.body._id, {
          payment: true,
        });

        if (user) {
          await fast2sms
            .sendMessage({
              authorization: process.env.FAST2SMS,
              message:
                "Your job request has been approved, kindly follow the link to pay the fee",
              numbers: [req.body.phone],
            })
            .then(() => {
              return res.status(200).send("Approved successfully");
            });
          return;
        }
        return res.status(404).send("user not found");
      }

      if (req.body.type == "approve") {
        const referenceId = Math.floor(
          100000000000 + Math.random() * 900000000000
        );

        const user = await Post.findByIdAndUpdate(req.body._id, {
          approved: true,
        });

        if (user) {
          await fast2sms
            .sendMessage({
              authorization: process.env.FAST2SMS,
              message: `Your job request has been approved, refId:${referenceId}`,
              numbers: [req.body.phone],
            })
            .then(() => {
              return res.status(200).send("Approved successfully");
            });
          return;
        }
        return res.status(404).send("user not found");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  res.status(404).send("Method not allowed");
}
