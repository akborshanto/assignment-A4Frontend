import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddBicycleMutation } from "../../redux/api/baseApi/baseApi";

import { Upload, Bike, DollarSign, Package, Box, Tag, Building } from "lucide-react";
import { GlassContainer } from "../../components/dahboardController";
import toast from "react-hot-toast";
export const BicycleController = () => {
  const [addData, { isLoading }] = useAddBicycleMutation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const imgBB_API_KEY = "77c6d8c4d5d9efed6090b118cb18fe34";

  const uploadImageToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    setImageUploading(true);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setImageUrl(data.data.url);
        return data.data.url;
      } else {
        toast.error("Image upload failed!");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image!");
      return null;
    } finally {
      setImageUploading(false);
    }
  };

  const onSubmit = async (data: any) => {
    if (!imageUrl) {
      toast.error("Please upload an image first!");
      return;
    }

    const bicycleData = { ...data, photo: imageUrl };

    try {
      const response = await addData(bicycleData).unwrap();
      if (response) {
        toast.success("Bicycle created successfully!");
        reset();
        setImageUrl(""); 
      }
    } catch (error) {
      toast.error("Failed to create bicycle!");
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        <GlassContainer className="p-8">
          <div className="flex items-center justify-center mb-8">
            <Bike className="w-10 h-10 text-purple-600" />
            <h2 className="ml-3 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
              New Mountain Bike
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-white dark:text-purple-300 mb-1">
                  Name
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="pl-10 w-full bg-white/20 border border-purple-200 dark:border-purple-700 rounded-lg py-2.5 px-3 text-gray-300 dark:text-white placeholder-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="Mountain Crusher 3000"
                  />
                </div>
                {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name.message as string}</span>}
              </div>

              {/* Brand Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-white dark:text-purple-300 mb-1">
                  Brand
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type="text"
                    {...register("brand", { required: "Brand is required" })}
                    className="pl-10 w-full bg-white/20 border border-purple-200 dark:border-purple-700 rounded-lg py-2.5 px-3 text-gray-300 dark:text-white placeholder-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="TrekMaster"
                  />
                </div>
                {errors.brand && <span className="text-sm text-red-500 mt-1">{errors.brand.message as string}</span>}
              </div>

              {/* Price Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-white dark:text-purple-300 mb-1">
                  Price
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type="number"
                    {...register("price", { required: "Price is required", min: 0 })}
                    className="pl-10 w-full bg-white/20 border border-purple-200 dark:border-purple-700 rounded-lg py-2.5 px-3 text-gray-300 dark:text-white placeholder-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="999.99"
                  />
                </div>
                {errors.price && <span className="text-sm text-red-500 mt-1">{errors.price.message as string}</span>}
              </div>

              {/* Model Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-white dark:text-purple-300 mb-1">
                  Model
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type="text"
                    {...register("model", { required: "Model is required" })}
                    className="pl-10 w-full bg-white/20 border border-purple-200 dark:border-purple-700 rounded-lg py-2.5 px-3 text-gray-300 dark:text-white placeholder-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="X-2023"
                  />
                </div>
                {errors.model && <span className="text-sm text-red-500 mt-1">{errors.model.message as string}</span>}
              </div>

              {/* Stock Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-white dark:text-purple-300 mb-1">
                  Stock
                </label>
                <div className="relative">
                  <Box className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type="number"
                    {...register("stock", { required: "Stock is required", min: 0 })}
                    className="pl-10 w-full bg-white/20 border border-purple-200 dark:border-purple-700 rounded-lg py-2.5 px-3 text-gray-300 dark:text-white placeholder-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="10"
                  />
                </div>
                {errors.stock && <span className="text-sm text-red-500 mt-1">{errors.stock.message as string}</span>}
              </div>

              {/* File Upload Field */}
              <div className="relative sm:col-span-2">
                <label className="block text-sm font-medium text-white dark:text-purple-300 mb-1">
                  Upload Photo
                </label>
                <div className="relative">
                  <Upload className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      if (e.target.files?.length) {
                        const file = e.target.files[0];
                        const uploadedUrl = await uploadImageToImgBB(file);
                        if (uploadedUrl) setImageUrl(uploadedUrl);
                      }
                    }}
                    className="pl-10 w-full bg-white/20 border border-purple-200 dark:border-purple-700 rounded-lg py-2.5 px-3 text-gray-300 dark:text-purple-3 placeholder-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-black hover:file:bg-purple-100"
                  />
                </div>
                {imageUploading && (
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-500 border-t-transparent"></div>
                    <span className="text-sm text-purple-600">Uploading image...</span>
                  </div>
                )}
                {imageUrl && (
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-sm text-green-600">✓ Image uploaded successfully!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || imageUploading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-lg py-3 px-4 font-medium hover:from-purple-700 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-8 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:opacity-0"></span>
              <span className="relative">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Add Mountain Bike"
                )}
              </span>
            </button>
          </form>
        </GlassContainer>
      </div>
    </div>
  );
};