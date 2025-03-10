import React, { useState } from "react";
import { useGetALlUserQuery } from "../../redux/auth/auth.api";
import { GlassCard } from "../GlassCard";
import {
  ShoppingCart,
  Info,
  Trash2,
  X,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetBicycleByIdQuery } from "../../redux/api/baseApi/baseApi";
import { Loading } from "../../components/ui/loading";
import { Link } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  phone?: string;
}

export const UserManagement = () => {
  const { data, error, isLoading } = useGetALlUserQuery(undefined);

  return (
    <div className="w-full h-screen overflow-auto">
      <GlassCard title="User Management">
        <h2 className="text-white text-xl font-bold mb-4">Your Recent Users</h2>

        {isLoading && <Loading></Loading>}
        {error && (
          <p className="text-red-500 text-center">Error fetching users.</p>
        )}

        {data?.data?.length > 0 ? (
          <div className="space-y-4">
            {data.data.map((user: User, index: number) => (
              <div
                key={user._id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium">User #{index + 1}</p>
                    <p className="text-white/70 text-sm">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-white/70 text-sm mr-4">
                    {user.email}
                  </span>

                  <Link
                    to={`/dashboard/admin-user-detail/${user?._id}`}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition"
                  >
                    {" "}
                    <Info className="w-4 h-4" />
                    <span className="text-sm">Details</span>
                  </Link>

                  <button
                    onClick={() => console.log("Delete user:", user._id)}
                    className="px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center">No users found.</p>
        )}
      </GlassCard>
    </div>
  );
};
