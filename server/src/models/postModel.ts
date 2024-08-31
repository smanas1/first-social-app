import mongoose from "mongoose";

const postModel = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["profilePicture", "cover", null],
      default: null,
    },
    images: {
      type: Array,
    },
    text: {
      type: String,
    },
    background: {
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    comments: [
      {
        text: {
          type: String,
        },
        image: {
          type: String,
        },
        commentedBy: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        commentedAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postModel);
