import React from 'react'
import { GlassCard } from './../GlassCard';

const UpdateProfile = () => {
  return (
    <div>    <GlassCard>
                    <h2 className="text-white text-xl font-bold mb-4">New Users</h2>
                    <div className="space-y-4">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <img
                              src={`https://images.unsplash.com/photo-${1500 + index}`}
                              alt="User"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-white font-medium">User Name</p>
                              <p className="text-white/70 text-sm">user@example.com</p>
                            </div>
                          </div>
                         {/*  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                            New
                          </span> */}
                        </div>
                      ))}
                    </div>
                  </GlassCard></div>
  )
}

export default UpdateProfile