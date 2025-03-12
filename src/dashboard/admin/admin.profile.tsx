import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useAppSelector } from '../../redux/app/hook';
import { selectCurrentUser } from '../../redux/auth/authSlice';
import { Github, Twitter, Linkedin, Mail, MapPin, Calendar, Link as LinkIcon } from 'lucide-react';
import { useUpdateUserMutation } from '../../redux/auth/auth.api';
import axios from 'axios';

export const AdminProfile = () => {
  const user = useAppSelector(selectCurrentUser);
  const [name, setName] = useState(user.name);
  const [photo, setPhoto] = useState(user.photo);
  const [imageFile, setImageFile] = useState(null);
  const [updateUser, { isLoading, isError }] = useUpdateUserMutation();

  // ImgBB API Key
  const IMGBB_API_KEY = "053180a32948842b7dc189029d94f9cd"; // Replace with your ImgBB API key

  const handleUpdate = async () => {
    try {
      // Check if image is provided and upload it
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, formData);
        const imageUrl = response.data.data.url;

        // Update photo with the new image URL
        setPhoto(imageUrl);
      }

      // Update user profile data
      await updateUser({ userId: user._id, name, photo }).unwrap();
    } catch (error) {
      console.error("Update Failed:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 p-6 relative overflow-hidden">
      {/* Background circles for visual effect */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Main content container with glass effect */}
      <div className="max-w-6xl mx-auto relative">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-3xl">
          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-72 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl">
                  <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
                  <p className="text-white/80">{user.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/80">
                  <span>{user?.email}</span>
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="hover:text-white transition-colors">portfolio.dev</a>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Input for updating profile */}
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-md bg-white/10 text-white"
                placeholder="Enter your name"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="p-2 rounded-md bg-white/10 text-white"
                accept="image/*"
              />
              <button
                onClick={handleUpdate}
                disabled={isLoading}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
              {isError && <p className="text-red-500">Update Failed</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
