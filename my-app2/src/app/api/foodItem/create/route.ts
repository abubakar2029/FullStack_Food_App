import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { applyJsonParserMiddleware } from "../../../../../middlewares/bodyParser";
import { NextRequest } from "next/server";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: NextRequest) {
  // const {
  //   name,
  //   description,
  //   price,
  //   sellerId,
  //   categoryId,
  //   deliveryCharge,
  //   deliveryTime,
  //   rating,
  //   numberSold,
  //   images,
  // } = req.body;

  const body = await req.json();
  console.log("Received images: ", body);

  console.log("images\n\n\\n", );

  // Ensure images is an array
  // if (!Array.isArray(images)) {
  //   return res.status(400).json({ error: "Images should be an array" });
  // }

  // Upload images to Cloudinary
  // const imageUploadPromises = images.map(async (image: string) => {
  //   const result = await cloudinary.uploader.upload(image, {
  //     folder: "food_items",
  //   });
  //   return result.secure_url;
  // });

  // try {
  //   const imageUrls = await Promise.all(imageUploadPromises);

  //   // Validate inputs
  //   if (
  //     typeof name !== "string" ||
  //     typeof description !== "string" ||
  //     typeof price !== "number" ||
  //     typeof sellerId !== "number" ||
  //     typeof categoryId !== "number" ||
  //     typeof deliveryCharge !== "number" ||
  //     typeof deliveryTime !== "string" ||
  //     typeof rating !== "number" ||
  //     typeof numberSold !== "number" ||
  //     !Array.isArray(imageUrls)
  //   ) {
  //     return res.status(400).json({ error: "Invalid input" });
  //   }

  //   // Create new FoodItem
  //   const newFoodItem = await prisma.foodItem.create({
  //     data: {
  //       name,
  //       description,
  //       price,
  //       sellerId,
  //       categoryId,
  //       deliveryCharge,
  //       deliveryTime,
  //       rating,
  //       numberSold,
  //       images: {
  //         create: imageUrls.map((url) => ({ url })),
  //       },
  //     },
  //     include: {
  //       images: true,
  //     },
  //   });

  //   res.status(201).json(newFoodItem);
  // } catch (error) {
  //   console.error(error);
  //   res
  //     .status(500)
  //     .json({ error: "An error occurred while creating the food item." });
  // }
}
