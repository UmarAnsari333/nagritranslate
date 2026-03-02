import { NextRequest, NextResponse } from 'next/server';

interface TranslationRequestBody {
  sourceLang: string;
  targetLang: string;
  text: string;
}

interface TranslationResponse {
  translatedText: string;
}

function getTranslatedText(response: unknown[]): { translatedText: string } {
  const tenses = response[0] as unknown[][];
  const tense: string[] = [];
  
  for (let index = 0; index < tenses.length; index++) {
    for (let secondIndex = 0; secondIndex < tenses.length; secondIndex++) {
      tense.push(tenses[index][secondIndex] as string);
      break;
    }
  }
  
  const translatedText = tense.join("");
  return {
    translatedText: translatedText,
  };
}

async function getTranslation(
  sourceLang: string,
  targetLang: string,
  input: string
): Promise<string | undefined> {
  if (input.trim() !== "") {
    const sourceText = input;
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
      sourceLang +
      "&tl=" +
      targetLang +
      "&dt=t&q=" +
      encodeURI(sourceText);
    
    try {
      const request = await fetch(url);
      const response = await request.json();
      const result = getTranslatedText(response);
      return result.translatedText;
    } catch (error) {
      console.error("Translation error:", error);
      return undefined;
    }
  } else {
    return undefined;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: TranslationRequestBody = await request.json();
    const { sourceLang, targetLang, text } = body;

    if (!text || text.trim() === "") {
      return NextResponse.json(
        { error: "No text provided for translation" },
        { status: 400 }
      );
    }

    if (!sourceLang || !targetLang) {
      return NextResponse.json(
        { error: "Source and target languages are required" },
        { status: 400 }
      );
    }

    const translatedText = await getTranslation(sourceLang, targetLang, text);

    if (translatedText === undefined) {
      return NextResponse.json(
        { error: "Translation failed" },
        { status: 500 }
      );
    }

    const response: TranslationResponse = {
      translatedText,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
