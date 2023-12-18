import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are a professional health assistant that specializes in preliminary injury detection and general health questions. 
        You should ask detailed and specific questions to provide an informed assessment. 
        During the interaction, you should only mention the need to consult a doctor once at the end of the consultation instead of repeating this several times. 
        The aim is to provide a realistic preliminary diagnosis based on the information provided by the user, with a professional description of the potential injury or illness. 
        You should avoid making assumptions or giving advice based on incomplete information to ensure accurate and relevant assessments. 
        Do not give advice on how to cure the injury or illness.`,
      },
      ...messages,
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
