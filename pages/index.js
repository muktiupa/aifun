"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Brain, Zap } from "lucide-react";

export default function index() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col">
      {/* Hero Section */}
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
          className="text-lg md:text-xl max-w-2xl mb-6 text-slate-300"
        >
          Playground for Team Workstation Communication with Inbuilt AI Assistance
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-lg rounded-2xl shadow-lg">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <FeatureCard
            icon={<MessageSquare size={36} className="text-indigo-400 mx-auto mb-4" />}
            title="Smart Communication"
            desc="Real-time chat, voice, and collaboration powered by AI for smoother workflow."
          />
          <FeatureCard
            icon={<Users size={36} className="text-cyan-400 mx-auto mb-4" />}
            title="Team Workspace"
            desc="Organize projects, files, and meetings — all in one AI-enhanced hub."
          />
          <FeatureCard
            icon={<Brain size={36} className="text-pink-400 mx-auto mb-4" />}
            title="AI Assistance"
            desc="Built-in assistant helps summarize chats, generate ideas, and automate tasks."
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 text-center px-6 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Collaborate Smarter with <span className="text-indigo-400">AIPlay</span>
        </motion.h2>
        <p className="max-w-2xl mx-auto text-slate-300 mb-8">
          AIPlay transforms how teams work together. With built-in AI support,
          your workstation becomes a dynamic space for creativity, clarity, and productivity.
        </p>
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-lg rounded-2xl">
          Try AIPlay Free
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-slate-700 mt-auto text-slate-400 text-sm">
        © {new Date().getFullYear()} AIPlay — All Rights Reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-8 bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition"
    >
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </motion.div>
  );
}
