import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2Client } from "../../utils/r2";

export const config = {
  api: { bodyParser: { sizeLimit: '50mb' } },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { filename, fileData } = req.body;
    if (!filename || !fileData) return res.status(400).json({ error: 'Missing filename or fileData' });

    // Convert base64 to buffer
    const buffer = Buffer.from(fileData, 'base64');
    const key = `uploads/${Date.now()}-${filename}`;

    // Upload to R2
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME || 'my-photographer-assets',
      Key: key,
      Body: buffer,
      ContentType: 'image/*',
    });

    await r2Client.send(command);
    const publicUrl = `${process.env.R2_PUBLIC_URL || 'https://r2.example.com'}/${key}`;

    return res.status(200).json({ ok: true, url: publicUrl, key });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}