import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import {
  Trip_Planner_AI_Prompt,
  TRIP_PLANNER_FINAL_PROMPT,
} from "@/helpers/prompts";

const ai = new GoogleGenAI({});
export async function POST(req: NextRequest) {
  try {
    const { messages, isFinal } = await req.json();

    // console.log("messages: ", messages);
    const prompt =
      (!isFinal ? Trip_Planner_AI_Prompt : TRIP_PLANNER_FINAL_PROMPT) +
      JSON.stringify(messages);
    console.log("prompt: ", prompt);

    const response = await ai.models.generateContent({
      model: "gemma-4-26b-a4b-it",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH,
        },
      },
    });
    // console.log("response : ", response.text);
    return NextResponse.json({ message: response.text ?? "" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }

  //   const interaction = await ai.interactions.create({
  //     model: "gemini-3.1-flash-lite",
  //     input: messages,
  //   });
  //   console.log(interaction.output_text);
}
