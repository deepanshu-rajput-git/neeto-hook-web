import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const Feature = ({ icon, title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 shadow-lg hover:bg-gray-800/50 hover:border-primary-500/50 transition-all duration-300 group"
  >
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500/20 text-primary-400 mb-4 border border-primary-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </motion.div>
);

function LandingPage() {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">
      <style>
        {`
          .neeto-gradient-text {
            background: -webkit-linear-gradient(45deg, #818CF8, #A5B4FC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero-glow {
            box-shadow: 0 0 150px 40px rgba(99, 102, 241, 0.2);
          }
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
        `}
      </style>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="h-8 w-8 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>
              <span className="font-bold text-2xl text-white group-hover:text-primary-300 transition-colors duration-300">
                NeetoHooks
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-5 py-2.5 rounded-md font-semibold hover:from-primary-700 hover:to-indigo-700 transition-all duration-300 flex items-center group shadow-lg shadow-primary-500/20"
                >
                  Go to Dashboard
                  <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full max-w-5xl h-[500px] bg-primary-900/30 rounded-full blur-3xl hero-glow opacity-50"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter"
          >
            The Missing <span className="neeto-gradient-text">Webhook</span>
            <br />
            Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A reliable, scalable, and developer-friendly platform to inspect, transform, and deliver your webhooks. Stop worrying about infrastructure and focus on building.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-indigo-700 transition-transform transform hover:scale-105 inline-flex items-center shadow-2xl shadow-primary-500/30"
            >
              Create a Hook - It's Free
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              No sign-up required for public, temporary hooks.
            </p>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Everything you need to handle webhooks</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">From local development to production-grade delivery, NeetoHooks has you covered.</p>
          </div>
          <div className="feature-grid">
            <Feature delay={0} icon={<CodeBracketIcon className="h-7 w-7"/>} title="Inspect & Debug">
              Get a unique URL to collect and inspect incoming HTTP requests in a beautiful, real-time interface.
            </Feature>
            <Feature delay={0.1} icon={<CommandLineIcon className="h-7 w-7"/>} title="Forward Locally">
              Use our CLI to securely tunnel webhooks to your local development server. No more deploying to test.
            </Feature>
            <Feature delay={0.2} icon={<CubeTransparentIcon className="h-7 w-7"/>} title="Transform & Replay">
              Forward webhooks to one or more destinations, replay them anytime, and transform payloads with custom logic.
            </Feature>
            <Feature delay={0.3} icon={<ShieldCheckIcon className="h-7 w-7"/>} title="Reliable Delivery">
              With automatic retries and exponential backoff, we ensure your webhooks are delivered, every time.
            </Feature>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12 text-center text-gray-400">
          <div className="mb-4">
            <Link to="/" className="font-bold text-xl text-white hover:text-primary-300 transition-colors">NeetoHooks</Link>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="#features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <a href="https://github.com/bigbinary/neeto-hook-web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.bigbinary.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BigBinary</a>
          </div>
          <p>&copy; 2025 NeetoHooks. A BigBinary Product. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
