"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { RequiredError } from "@/components/RequiredError";
type Inputs = {
  name: string;
  description: string;
  price: string;
  deliveryCharge: string;
  deliveryTime: string;
  categoryId: string;
  sellerId: string;
  rating: string;
  images: FileList;
};

const CreateFoodItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "Dummy Food Item",
      description: "This is a dummy description.",
      price: "10.99",
      deliveryCharge: "2.99",
      deliveryTime: "30 mins",
      categoryId: "1",
      sellerId: "1",
      rating: "5",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const imagesBase64Promises = Array.from(data.images).map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    });

    const imagesBase64 = await Promise.all(imagesBase64Promises);

    try {
      console.log("image64 : ", imagesBase64);
      const res = await fetch("http://localhost:3000/api/foodItem/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          price: parseFloat(data.price),
          deliveryCharge: parseFloat(data.deliveryCharge),
          rating: parseInt(data.rating, 10),
          images: imagesBase64,
        }),
      });
      // await axios.post("/api/foodItem/create", {
      //   ...data,
      //   price: parseFloat(data.price),
      //   deliveryCharge: parseFloat(data.deliveryCharge),
      //   rating: parseInt(data.rating, 10),
      //   images: imagesBase64,
      // });
      redirect("/");
    } catch (error) {
      console.error("Error creating food item:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Food Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.price && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Delivery Charge
          </label>
          <input
            type="number"
            step="0.01"
            {...register("deliveryCharge", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.deliveryCharge && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Delivery Time
          </label>
          <input
            type="text"
            {...register("deliveryTime", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.deliveryTime && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            min="1"
            max="5"
            {...register("rating", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.rating && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category ID
          </label>
          <input
            type="number"
            {...register("categoryId", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.categoryId && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seller ID
          </label>
          <input
            type="number"
            {...register("sellerId", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.sellerId && <RequiredError />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Images
          </label>
          <input
            type="file"
            {...register("images", { required: true })}
            multiple
            accept="image/*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.images && <RequiredError />}
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Food Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFoodItem;
