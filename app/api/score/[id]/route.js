import { connectToDB } from "@/utils/database";
import Score from "@/models/scoreDataModel";

export const GET = async (request, { params }) => {
	try {
		await connectToDB();

		console.log(params.id);
		const response = await fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params.id}&key=${process.env.YOUTUBE_API_KEY}`
		);
		const data = await response.json();
		const { items } = data;
		const { snippet, statistics } = items[0];
		const response1 = await fetch(
			`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${snippet.channelId}&key=${process.env.YOUTUBE_API_KEY}`
		);
		const data1 = await response1.json();
		const { items: items1 } = data1;
		const { statistics: statistics1 } = items1[0];
		console.log(statistics1);

		const earningScore =
			Math.min(statistics1.subscriberCount, statistics.viewCount) +
			10 * statistics.commentCount +
			5 +
			statistics.likeCount;
		const newScoreData = await Score.create({
			title: snippet.title,
			videoId: snippet.videoId,
			thumbnailUrl: snippet.thumbnails.default.url,
			publishedAt: snippet.publishedAt,
			channelId: snippet.channelId,
			viewCount: statistics.viewCount,
			likeCount: statistics.likeCount,
			commentCount: statistics.commentCount,
			subscriberCount: statistics1.subscriberCount,
			earningScore: earningScore,
		});
		newScoreData.save();
		console.log(newScoreData);
		return new Response(JSON.stringify(newScoreData), { status: 200 });
	} catch (err) {
		console.log(err);
	}
};
