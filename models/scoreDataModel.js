import { Schema, model, models } from "mongoose";

const ScoreDataSchema = new Schema({
	title: String,
	videoId: String,
	thumbnailUrl: String,
	publishedAt: String,
	channelId: String,
	viewCount: Number,
	likeCount: Number,
	commentCount: Number,
	subscriberCount: {
		type: Number,
		required: true,
	},
	earningScore: {
		type: Number,
		required: true,
	},
});

const Score = models.Score || model("Score", ScoreDataSchema);

export default Score;
