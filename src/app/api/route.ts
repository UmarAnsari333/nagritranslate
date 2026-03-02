import { NextResponse } from "next/server";
import { generateSitemap, generateSitemapIndex } from "@/lib/sitemap-generator";

const BASE_URL = 'https://nagritranslate.com';

// Sitemap route handler
export async function GET(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === '/sitemap.xml') {
    return new NextResponse(generateSitemap(BASE_URL), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }

  if (pathname === '/sitemap-index.xml') {
    return new NextResponse(generateSitemapIndex(BASE_URL), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }

  return NextResponse.json({ message: "Use /sitemap.xml or /sitemap-index.xml" });
}