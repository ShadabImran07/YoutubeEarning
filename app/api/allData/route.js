import { connectToDB } from "@/utils/database";
import Score from "@/models/scoreDataModel";

export const GET = async (request) => {
	try {
		await connectToDB();

		const prompts = await Score.find({});

		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch all data", { status: 500 });
	}
};
