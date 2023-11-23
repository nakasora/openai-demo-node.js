import OpenAI from "openai";

const openai = new OpenAI();

async function main(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main("2023年現在の日本の首相は誰ですか");
