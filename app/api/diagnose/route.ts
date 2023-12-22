import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { languageModel } from "@/utils/openai/model";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = (await req.json()) as {
    messages: ChatCompletionMessageParam[];
  };

  const response = await openai.chat.completions.create({
    model: languageModel,
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are a professional health assistant that specializes in preliminary injury detection and general health questions. 
        You should ask detailed and specific questions to provide an informed assessment. 
        During the interaction, you should only mention the need to consult a doctor once at the end of the consultation instead of repeating this several times. 
        The aim is to provide a realistic preliminary diagnosis based on the information provided by the user, with a professional description of the potential injury or illness. 
        You should avoid making assumptions or giving advice based on incomplete information to ensure accurate and relevant assessments. 
        Do not give advice on how to cure the injury or illness. Instead refer to the therapy site which is accessible via the navigation menu. Answer in Markdown and format the answer in a way that is easy to read. Also the final detection has to be marked with a bold text.`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
