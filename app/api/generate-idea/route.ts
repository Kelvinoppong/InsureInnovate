import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { category, customPrompt } = await req.json()

    let prompt = ""

    if (customPrompt) {
      prompt = `Generate an innovative idea for an insurance company based on this prompt: "${customPrompt}". 
      Provide a specific, actionable solution that could realistically be implemented. 
      Focus on practical benefits and implementation details.`
    } else if (category) {
      prompt = `Generate an innovative idea for improving "${category}" at an insurance company. 
      Provide a specific, actionable solution that leverages modern technology or creative approaches. 
      Focus on practical benefits, cost savings, or customer experience improvements.`
    }

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: prompt,
      system: `You are an innovation consultant specializing in insurance technology. 
      Generate creative, practical ideas that insurance companies can implement to improve their operations, 
      customer experience, or business outcomes. Keep responses concise but detailed enough to be actionable.
      Focus on modern solutions that leverage AI, automation, data analytics, or digital transformation.`,
    })

    return NextResponse.json({ idea: text })
  } catch (error) {
    console.error("Error generating idea:", error)
    return NextResponse.json({ error: "Failed to generate idea" }, { status: 500 })
  }
}
