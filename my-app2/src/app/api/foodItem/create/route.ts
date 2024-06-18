import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { NextRequest } from "next/server";

export const config = {
  api: {
    bodyParser: {
      type: "json",
    },
  },
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, image } = body;
  console.log("body", body.name);

  try {
    const uploadResult = await cloudinary.uploader.upload(image, {
      folder: "food_items",
    });
    const imageUrl = uploadResult.secure_url;
    console.log("Image url cloud", imageUrl);
  } catch (error) {
    console.error(error);
  }
}
