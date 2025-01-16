import { NextResponse } from "next/server";
import { getObject } from "../minio";

export async function GET(req: Request) {
  const url = new URL(req.url); // Get the full URL
  const fileName = url.searchParams.get("fileName");
  if (!fileName) {
    return NextResponse.json(
      { error: "fileName query parameter is required" },
      { status: 400 }
    );
  }
  const [objectStream, metadata] = await getObject(fileName);
  const contentType = metadata.metaData["content-type"];
  const chunks: Uint8Array[] = [];
  for await (const chunk of objectStream) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);
  return new NextResponse(buffer, {
    headers: { "Content-Type": contentType },
  });
}
