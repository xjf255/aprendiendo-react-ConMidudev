import { CohereClient } from "cohere-ai";
import { FromLanguage, Language } from "../Types";

const cohere = new CohereClient({
    token: "mk9tcaKUfI7Mni8ck47Z8mEbqwtiexGuFzB2il1Q",
});

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text
    const prediction = await cohere.chatStream({
        prompt: text,
        maxTokens: 100,
    });
    console.log(text)
    console.log("Received prediction", prediction);
};