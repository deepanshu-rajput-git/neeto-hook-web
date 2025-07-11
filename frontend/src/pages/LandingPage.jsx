import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@bigbinary/neetoui";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  EyeIcon,
  ClockIcon,
  ChartBarIcon,
  BoltIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Logo from "../components/Logo";

const Feature = ({ icon, title, description }) => (
  <div className='group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200'>
    <div className='flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300'>
      {icon}
    </div>
    <Typography style='h3' className='text-xl font-semibold text-gray-900 mb-3'>
      {title}
    </Typography>
    <Typography style='body2' className='text-gray-600 leading-relaxed'>
      {description}
    </Typography>
  </div>
);

const UseCase = ({ title, description, icon }) => (
  <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300'>
    <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 text-blue-600 mb-4'>
      {icon}
    </div>
    <Typography style='h3' className='text-lg font-semibold text-gray-900 mb-3'>
      {title}
    </Typography>
    <Typography style='body2' className='text-gray-600'>
      {description}
    </Typography>
  </div>
);

const Testimonial = ({ quote, author, role, company }) => (
  <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
    <div className='flex items-start mb-6'>
      <div className='flex-shrink-0'>
        <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center'>
          <span className='text-white font-semibold text-lg'>
            {author.charAt(0)}
          </span>
        </div>
      </div>
      <div className='ml-4'>
        <Typography style='body1' className='font-semibold text-gray-900'>
          {author}
        </Typography>
        <Typography style='body2' className='text-sm text-gray-600'>
          {role} at {company}
        </Typography>
      </div>
    </div>
    <Typography style='body1' className='text-gray-700 italic leading-relaxed'>
      "{quote}"
    </Typography>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className='text-center'>
    <Typography style='h1' className='text-5xl font-bold text-green-600 mb-2'>
      {number}
    </Typography>
    <Typography style='h3' className='text-gray-600 font-medium text-lg'>
      {label}
    </Typography>
  </div>
);

function LandingPage() {
  return (
    <div className='bg-white text-gray-900 font-sans'>
      {/* Header */}
      <header className='border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <nav className='flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-3'>
              <Logo />
              <Typography
                style='h2'
                className='text-xl font-bold text-gray-900'
              >
                NeetoWebhooks
              </Typography>
            </Link>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className='max-w-7xl mx-auto px-6 pt-20 pb-16 text-center'>
        <div className='mb-8 text-center'>
          <div className='text-[3rem] md:text-[5rem] font-extrabold leading-[1.1] tracking-tight text-gray-900'>
            One hook to{" "}
            <span className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent'>
              inspect them all
            </span>
          </div>
        </div>

        <div className='mb-10 flex justify-center'>
          <Typography
            style='h3'
            className='text-center w-full text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed'
          >
            The developer-friendly platform for testing, inspecting, and
            transforming webhooks. Get instant visibility into your webhook
            traffic with real-time monitoring and powerful transformation
            capabilities.
          </Typography>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button
            label='Get Your Webhook URL'
            variant='primary'
            size='large'
            to='/dashboard'
            className='px-8 py-4 text-lg hover:scale-105 transition-transform'
          />
          <Button
            label='View Documentation'
            variant='secondary'
            size='large'
            className='px-8 py-4 text-lg'
          />
        </div>
      </main>

      {/* Features Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Typography
              style='h1'
              className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'
            >
              Everything you need for webhook development
            </Typography>
            <div className='flex justify-center'>
              <Typography
                style='h3'
                className='text-center w-full text-xl text-gray-600 max-w-3xl'
              >
                From local development to production monitoring, we've got you
                covered with powerful tools and real-time insights.
              </Typography>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Feature
              icon={<EyeIcon className='h-7 w-7' />}
              title='Live Inspection'
              description='Real-time webhook inspection with detailed request and response analysis. See headers, body, IP, and timing information instantly.'
            />
            <Feature
              icon={<CubeTransparentIcon className='h-7 w-7' />}
              title='Payload Transformation'
              description='Transform webhook payloads using JavaScript with our powerful transformation engine. Modify data on-the-fly without touching your code.'
            />
            <Feature
              icon={<ShieldCheckIcon className='h-7 w-7' />}
              title='Reliable Delivery'
              description='Ensure webhook delivery with retry mechanisms and delivery guarantees. Never miss a webhook again.'
            />
            <Feature
              icon={<CommandLineIcon className='h-7 w-7' />}
              title='Local Tunneling'
              description='Test webhooks locally with secure tunneling and instant setup. Expose your localhost to the world safely.'
            />
            <Feature
              icon={<ClockIcon className='h-7 w-7' />}
              title='Webhook History'
              description='Complete history of all webhooks with search and filtering capabilities. Find any webhook in seconds.'
            />
            <Feature
              icon={<ChartBarIcon className='h-7 w-7' />}
              title='Analytics & Monitoring'
              description='Track webhook performance with detailed analytics, success rates, and real-time monitoring dashboards.'
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Typography
              style='h1'
              className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'
            >
              How it works
            </Typography>
            <div className='flex justify-center'>
              <Typography
                style='h3'
                className='text-center w-full text-xl text-gray-600 max-w-3xl'
              >
                Get started in seconds with our simple three-step process.
              </Typography>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold mx-auto mb-6'>
                1
              </div>
              <Typography
                style='h3'
                className='text-xl font-semibold text-gray-900 mb-4'
              >
                Get Your URL
              </Typography>
              <Typography style='body2' className='text-gray-600'>
                Create a webhook inbox and get a unique URL instantly. No setup
                required.
              </Typography>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold mx-auto mb-6'>
                2
              </div>
              <Typography
                style='h3'
                className='text-xl font-semibold text-gray-900 mb-4'
              >
                Send Webhooks
              </Typography>
              <Typography style='body2' className='text-gray-600'>
                Point your webhooks to the URL and watch them arrive in
                real-time on your dashboard.
              </Typography>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold mx-auto mb-6'>
                3
              </div>
              <Typography
                style='h3'
                className='text-xl font-semibold text-gray-900 mb-4'
              >
                Inspect & Transform
              </Typography>
              <Typography style='body2' className='text-gray-600'>
                View detailed information, transform payloads, and forward to
                your applications.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-6'>
      <div className='border-t border-gray-800 text-center'>
            <Typography style='body2' className='text-gray-400'>
              &copy; 2025 NeetoWebhooks. A BigBinary Product. All rights
              reserved.
            </Typography>
          </div>
      </footer>
    </div>
  );
}

export default LandingPage;
