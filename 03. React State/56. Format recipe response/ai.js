import Anthropic from "@anthropic-ai/sdk"
import {HfInference} from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

const anthropic = new Anthropic({
    // Make sure you set an environment variable in Scrimba 
    // for ANTHROPIC_API_KEY
    apiKey: 'process.env.ANTHROPIC_API_KEY',
    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(", ")

	const msg = await anthropic.messages.create({
		model: "claude-3-haiku-20240307",
		max_tokens: 1024,
		system: SYSTEM_PROMPT,
		messages: [
			{role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`},
		],
	});
	return msg.content[0].text
}

export async function getRecipeFromFakeAI(ingredientsArr) {
	return Promise.resolve("## Chef Claude Recommends:\n\n**Based on the ingredients you have available, I would recommend making a simple and delicious Beef Bolognese Pasta. Here is the recipe:**\n\n### Beef Bolognese Pasta\n\n**Ingredients:**\n\n- 1 lb. ground beef\n- 1 onion, diced\n- 3 cloves garlic, minced\n- 2 tablespoons tomato paste\n- 1 (28 oz) can crushed tomatoes\n- 1 cup beef broth\n- 1 teaspoon dried oregano\n- 1 teaspoon dried basil\n- Salt and pepper to taste\n- 8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)\n\n**Instructions:**\n\n1. Bring a large pot of salted water to a boil for the pasta.\n2. In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.\n3. Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.\n4. Stir in the tomato paste and cook for 1 minute.\n5. Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.\n6. Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.\n7. While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.\n8. Add the Bolognese sauce to the cooked pasta and toss to combine.\n9. Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.")
}

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
const hf = new HfInference("process.env.HF_ACCESS_TOKEN")

export async function getRecipeFromMistral(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(", ")
	try {
		const response = await hf.chatCompletion({
			model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
			messages: [
				{role: "system", content: SYSTEM_PROMPT},
				{role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`},
			],
			max_tokens: 1024,
		})
		return response.choices[0].message.content
	} catch (err) {
		console.error(err.message)
	}
}
