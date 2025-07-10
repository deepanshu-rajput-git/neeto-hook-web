import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Logo from "../components/Logo";

const Feature = ({ icon, title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700'
  >
    <div className='flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4'>
      {icon}
    </div>
    <h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
      {title}
    </h3>
    <p className='text-gray-600 dark:text-gray-300'>{children}</p>
  </motion.div>
);

const UseCase = ({ title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'
  >
    <h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
      {title}
    </h3>
    <p className='text-gray-600 dark:text-gray-300'>{children}</p>
  </motion.div>
);

const Testimonial = ({ quote, author, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'
  >
    <p className='text-gray-600 dark:text-gray-300 italic'>"{quote}"</p>
    <p className='text-gray-900 dark:text-gray-100 font-bold mt-4'>
      - {author}
    </p>
  </motion.div>
);

function LandingPage() {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans'>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50'
      >
        <div className='container mx-auto px-6 py-4'>
          <nav className='flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-3'>
              <Logo />
              <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
                NeetoWebhooks
              </h1>
            </Link>
            <div className='flex items-center space-x-6'>
              <Link
                to='/dashboard'
                className='bg-green-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-green-700 transition-all duration-300 flex items-center group'
              >
                Go to Dashboard
                <ArrowRightIcon className='h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform' />
              </Link>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className='container mx-auto px-6 pt-24 md:pt-32 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight'
        >
          Reliable Webhook Infrastructure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'
        >
          Inspect, transform, and deliver your webhooks with a
          developer-friendly platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className='mt-10'
        >
          <Link
            to='/dashboard'
            className='bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-transform transform hover:scale-105 inline-flex items-center'
          >
            Get Your Webhook URL
          </Link>
        </motion.div>
      </main>

      {/* Showcase Section */}
      <section className='container mx-auto px-6 py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
              Everything you need to handle webhooks
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg'>
              From local development to production-grade delivery, NeetoWebhooks
              has you covered.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Feature
              delay={0}
              icon={<CodeBracketIcon className='h-7 w-7' />}
              title='Inspect & Debug'
            >
              Get a unique URL to collect and inspect incoming HTTP requests.
            </Feature>
            <Feature
              delay={0.1}
              icon={<CommandLineIcon className='h-7 w-7' />}
              title='Forward Locally'
            >
              Use our CLI to securely tunnel webhooks to your local server.
            </Feature>
            <Feature
              delay={0.2}
              icon={<CubeTransparentIcon className='h-7 w-7' />}
              title='Transform & Replay'
            >
              Forward, replay, and transform webhooks with custom logic.
            </Feature>
            <Feature
              delay={0.3}
              icon={<ShieldCheckIcon className='h-7 w-7' />}
              title='Reliable Delivery'
            >
              Automatic retries and exponential backoff ensure delivery.
            </Feature>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id='use-cases' className='py-20 bg-gray-100'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
              How will you use NeetoWebhooks?
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg'>
              NeetoWebhooks is a versatile tool that can be used in a variety of
              scenarios.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <UseCase delay={0} title='Webhook Development'>
              Develop and test webhooks locally without exposing your
              development server to the internet.
            </UseCase>
            <UseCase delay={0.1} title='Third-party Integrations'>
              Integrate with third-party services that require a publicly
              accessible webhook URL.
            </UseCase>
            <UseCase delay={0.2} title='API Mocking'>
              Create mock API endpoints to simulate webhook payloads for testing
              and development.
            </UseCase>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
              What our users are saying
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Testimonial
              delay={0}
              quote='NeetoWebhooks has been a game-changer for our development workflow. We can now test our webhooks locally without any hassle.'
              author='John Doe, Lead Developer at BigBinary'
            />
            <Testimonial
              delay={0.1}
              quote='The ability to inspect and replay webhooks has saved us countless hours of debugging time.'
              author='Jane Smith, Senior Engineer at BigBinary'
            />
            <Testimonial
              delay={0.2}
              quote="NeetoWebhooks is a must-have tool for any developer working with webhooks. It's simple, reliable, and easy to use."
              author='Sam Wilson, Software Engineer at BigBinary'
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-100 border-t border-gray-200'>
        <div className='container mx-auto px-6 py-8 text-center text-gray-500'>
          <p>&copy; 2025 NeetoWebhooks. A BigBinary Product.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
