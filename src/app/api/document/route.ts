import { NextRequest, NextResponse } from 'next/server';

// Dynamic imports for server-side only
async function extractTextFromDOCX(buffer: Buffer): Promise<string> {
  const mammoth = (await import('mammoth')).default;
  const result = await mammoth.extractRawText({ buffer });
  return result.value;
}

function extractTextFromTXT(buffer: Buffer): string {
  return buffer.toString('utf-8');
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const sourceLang = formData.get('sourceLang') as string;
    const targetLang = formData.get('targetLang') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!sourceLang || !targetLang) {
      return NextResponse.json(
        { error: 'Source and target languages are required' },
        { status: 400 }
      );
    }

    // Check file type
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain',
    ];
    
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedTypes.includes(file.type) && !['docx', 'doc', 'txt'].includes(fileExtension || '')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload DOCX or TXT files.' },
        { status: 400 }
      );
    }

    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract text based on file type
    let extractedText = '';
    
    if (
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.type === 'application/msword' ||
      fileExtension === 'docx' ||
      fileExtension === 'doc'
    ) {
      extractedText = await extractTextFromDOCX(buffer);
    } else {
      extractedText = extractTextFromTXT(buffer);
    }

    // Clean up extracted text
    extractedText = extractedText
      .replace(/\s+/g, ' ')  // Normalize whitespace
      .trim();

    if (!extractedText) {
      return NextResponse.json(
        { error: 'Could not extract text from the document. The file might be empty.' },
        { status: 400 }
      );
    }

    // Check text length (Google Translate has limits)
    const maxChars = 5000;
    if (extractedText.length > maxChars) {
      // Return truncated text with warning
      return NextResponse.json({
        text: extractedText.slice(0, maxChars),
        originalLength: extractedText.length,
        truncated: true,
        message: `Document has ${extractedText.length} characters. Only first ${maxChars} characters will be translated.`,
      });
    }

    return NextResponse.json({
      text: extractedText,
      originalLength: extractedText.length,
      truncated: false,
    });

  } catch (error) {
    console.error('Document processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process the document. Please try a different file.' },
      { status: 500 }
    );
  }
}
