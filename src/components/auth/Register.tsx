import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../../redux/api/baseApi/baseApi';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUploading, setImageUploading] = useState(false);
  const [photo, setPhoto] = useState<string>("");
  const [uploadError, setUploadError] = useState<string>("");

  const [addData, { isLoading, isSuccess }] = useAddUserMutation();

  // ImgBB API key and endpoint
  const imgBB_API_KEY = "5024dc2b3d8f0fc2e1c4e0125cb68e33"; // Replace with your actual API key

  // Handle image upload to ImgBB
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const uploadedImageUrl = await uploadImageToImgBB(file);
      if (uploadedImageUrl) {
        setPhoto(uploadedImageUrl); // Set the uploaded image URL
        setUploadError(""); // Reset any previous errors
      } else {
        setUploadError("Image upload failed. Please try again.");
      }
    }
  };

  // Upload image to ImgBB
  const uploadImageToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append("photo", file);
    setImageUploading(true);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        return data.data.url; // Return the image URL if successful
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

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
    console.log("Image URL:", photo);

    // Now you can send the form data along with the image URL to your backend or API
    if (photo) {
      const payload = {
        ...data,
        photo: photo, // Attach the image URL to the form data
      };
      // You can send payload using your addUserMutation or any other method
      await addData(payload);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            {...register('name', { required: 'Full name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Create a password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          {imageUploading && <p className="text-blue-500 text-sm">Uploading image...</p>}
          {uploadError && <p className="text-red-500 text-sm">{uploadError}</p>}
          {photo && <img src={photo} alt="Uploaded" className="mt-4 w-32 h-32 object-cover rounded-full" />}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>

        {isSuccess && <p className="text-green-500 text-sm mt-2">Account created successfully!</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
