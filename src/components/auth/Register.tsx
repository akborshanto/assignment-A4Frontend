import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../../redux/api/baseApi/baseApi';
import toast from 'react-hot-toast';
import BallsLoading from '../ui/balls.loading';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageUploading, setImageUploading] = useState(false);
  const [photo, setPhoto] = useState<string>("");
  const [uploadError, setUploadError] = useState<string>("");

  const [addData, { isLoading, isSuccess, isError, error }] = useAddUserMutation();

  const imgBB_API_KEY = "5024dc2b3d8f0fc2e1c4e0125cb68e33";

  // Image Upload Handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBB_API_KEY}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setPhoto(data.data.url);
        setUploadError("");
      } else {
        setUploadError("Image upload failed. Please try again.");
      }
    } catch (error) {
      setUploadError("Error uploading image. Check your connection.");
    } finally {
      setImageUploading(false);
    }
  };

  // Form Submit Handler
  const onSubmit = async (data: any) => {
    console.log(data)
    if (!photo) {
      setUploadError("Please upload an image before submitting.");
      return;
    }

    const payload = {
      ...data,
      photo,
    };
console.log(payload)
    try {
      await addData(payload).unwrap();
      reset();
      toast.success("User created successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error('Something went wrong...');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg min-h-svh">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-36">
        
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
              pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
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
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
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
            required
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          {imageUploading && <BallsLoading />}
          {!imageUploading && uploadError && (
            <p className="text-red-500 text-sm">{uploadError}</p>
          )}
          {!imageUploading && photo && (
            <>
              <p className="text-green-500 text-sm">Image uploaded successfully!</p>
              <img
                src={photo}
                alt="Uploaded"
                className="mt-4 w-32 h-32 object-cover rounded-full"
              />
            </>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>

        {isSuccess && <p className="text-green-500 text-sm mt-2">Account created successfully!</p>}
        {isError && <p className="text-red-500 text-sm mt-2">Error: {error?.data?.message || "Something went wrong!"}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
