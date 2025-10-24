"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, MessageSquare, Users, Brain } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col transition-colors duration-500">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md dark:shadow-black/50">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">AIPlay</h1>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent"
        >
          AIPlay
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-6 text-gray-700 dark:text-slate-300"
        >
          Playground for Team Workstation Communication with Inbuilt AI Assistance
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 px-6 py-3 text-lg rounded-2xl shadow-lg text-white">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100 dark:bg-slate-950/40 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <FeatureCard icon={<MessageSquare size={36} className="text-indigo-400 mx-auto mb-4" />} title="Smart Communication" desc="Real-time chat, voice, and collaboration powered by AI." />
          <FeatureCard icon={<Users size={36} className="text-cyan-400 mx-auto mb-4" />} title="Team Workspace" desc="Organize projects, files, and meetings all in one hub." />
          <FeatureCard icon={<Brain size={36} className="text-pink-400 mx-auto mb-4" />} title="AI Assistance" desc="Summarize chats, generate ideas, and automate tasks." />
        </div>
      </section>

      {/* About */}
      <section className="py-20 text-center px-6 bg-white dark:bg-slate-900 transition-colors duration-500">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-semibold mb-6">
          Collaborate Smarter with <span className="text-indigo-400">AIPlay</span>
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-slate-300 mb-8">
          AIPlay transforms how teams work together. With built-in AI support, your workstation becomes a dynamic space for creativity, clarity, and productivity.
        </p>
        <button className="bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 text-lg rounded-2xl px-6 py-3 text-white">
          Try AIPlay Free
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-300 dark:border-slate-700 mt-auto text-gray-600 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} AIPlay — All Rights Reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-slate-300">{desc}</p>
    </motion.div>
  );
}
