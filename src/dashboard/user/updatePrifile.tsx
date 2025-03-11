import React from 'react'

import { motion } from 'framer-motion';
import { useAppSelector } from '../../redux/app/hook';
import { selectCurrentUser } from '../../redux/auth/authSlice';

import { Github, Twitter, Linkedin, Mail, MapPin, Calendar, Link as LinkIcon } from 'lucide-react';

export const  UpdateProfile =()=> {
  const user = useAppSelector(selectCurrentUser);
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
                  src={user?.photo}
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

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">About Me</h2>
                <p className="text-white/80 leading-relaxed">
                  Passionate software engineer with over 8 years of experience in full-stack development.
                  Specialized in building scalable web applications and mentoring junior developers.
                  Always excited to learn new technologies and solve complex problems.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm hover:bg-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Experience</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Senior Software Engineer',
                      company: 'Tech Corp',
                      period: '2020 - Present',
                      description: 'Leading the development of enterprise-scale web applications.'
                    },
                    {
                      title: 'Software Engineer',
                      company: 'StartUp Inc',
                      period: '2018 - 2020',
                      description: 'Developed and maintained multiple client-facing applications.'
                    }
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-lg bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <h3 className="text-white font-semibold">{job.title}</h3>
                      <p className="text-white/60">{job.company} • {job.period}</p>
                      <p className="text-white/80 mt-2">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

