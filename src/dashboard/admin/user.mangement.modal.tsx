import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleUserIdQuery } from "../../redux/auth/auth.api";
import { Loading } from "../../components/ui/loading";
import { X, Mail, Phone, Calendar } from "lucide-react";

export const UserDetail = () => {
  const { id } = useParams(); // Get id from URL
  const navigate=useNavigate()
  const { data: user, error, isLoading } = useGetSingleUserIdQuery(id);
const [isModalOpen, setIsModalOpen] = useState(true); 
  useEffect(() => {
    if (id) {
      console.log("Fetching details for user ID:", id);
    }
  }, [id]);

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Error fetching user details.</p>;
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/dashboard/UserManagement')
  };
    // If the modal is closed, return null (don't render the modal)
    if (!isModalOpen) return null;

  return (
    <div className="w-full h-screen overflow-auto p-4">
      {user && (
        <div className="bg-white/10 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-white">User Details</h2>
            <button className="p-1 rounded-full hover:bg-white/10">
              <X className="w-5 h-5 text-white" onClick={closeModal}/>
            </button>
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3 text-white/90">
              <Mail className="w-5 h-5 text-purple-300" />
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p>{user?.data?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <Phone className="w-5 h-5 text-purple-300" />
              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p>{user?.data?.phone || "Not provided"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <Calendar className="w-5 h-5 text-purple-300" />
              <div>
                <p className="text-sm text-white/60">Member Since</p>
                <p>{new Date(user?.data?.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-white/60">Role</p>
                  <p className="text-white font-medium capitalize">{user?.data?.role}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
