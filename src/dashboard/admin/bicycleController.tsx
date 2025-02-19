import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddBicycleMutation } from "../../redux/api/baseApi/baseApi";
import toast from "react-hot-toast";
import { Loading } from "../../components/ui/loading";
import BallsLoading from "../../components/ui/balls.loading";

export const BicycleController = () => {
  const [addData, { isLoading ,isSuccess}] = useAddBicycleMutation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const imgBB_API_KEY = "a7c1b646d9d84adbad01ccc764183aa2"; // Replace with your actual API key

  const uploadImageToImgBB = async (file) => {
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
        alert("Image upload failed!");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    } finally {
      setImageUploading(false);
    }
  };

  const onSubmit = async (data) => {
    if (!imageUrl) {
      alert("Please upload an image first!");
      return;
    }

    const bicycleData = { ...data, photo: imageUrl };
    if(isLoading){
        return <Loading></Loading>
    }
    await addData(bicycleData);
    if(isSuccess){
        toast.success('Bicycle created successfully')
        reset();
        setImageUrl("");
        return null
    }
 
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Mountain Bike Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
        </div>

        {/* Brand Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            {...register("brand", { required: "Brand is required" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
          {errors.brand && <span className="text-sm text-red-500">{errors.brand.message}</span>}
        </div>

        {/* Price Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            {...register("price", { required: "Price is required", min: 0 })}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
          {errors.price && <span className="text-sm text-red-500">{errors.price.message}</span>}
        </div>

        {/* Model Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <input
            type="text"
            {...register("model", { required: "Model is required" })}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
          {errors.model && <span className="text-sm text-red-500">{errors.model.message}</span>}
        </div>

        {/* Stock Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input
            type="number"
            {...register("stock", { required: "Stock is required", min: 0 })}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
          {errors.stock && <span className="text-sm text-red-500">{errors.stock.message}</span>}
        </div>

        {/* File Upload Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              if (e.target.files.length > 0) {
                const file = e.target.files[0];
                const uploadedUrl = await uploadImageToImgBB(file);
                if (uploadedUrl) setImageUrl(uploadedUrl);
              }
            }}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
          {imageUploading && <p className="text-blue-500 text-sm"><BallsLoading></BallsLoading></p>}
          {imageUrl && (
            <p className="text-green-500 text-sm">Image uploaded successfully!</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || imageUploading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
