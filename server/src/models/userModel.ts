import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
      trim: true,
    },
    lName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPhoto: {
      type: String,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    folloing: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    request: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    search: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          require: true,
        },
        createdAt: {
          type: Date,
        },
      },
    ],

    details: {
      bio: {
        type: String,
      },
      nickName: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      workplace: {
        type: String,
      },
      collage: {
        type: String,
      },
      highschool: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationshipStatus: {
        type: String,
        enum: [
          "single",
          "in a relationship",
          "it's complicated",
          "married",
          "devorced",
        ],
      },

      instagram: {
        type: String,
      },
    },
    savePosts: [
      {
        posts: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
        saveAt: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", UserSchema);
