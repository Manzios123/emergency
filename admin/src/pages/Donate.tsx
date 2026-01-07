import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Types for TypeScript
interface DonationTier {
  amount: number;
  title: string;
  description: string;
}

interface ImpactStat {
  number: number;
  label: string;
  suffix?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>('');

  // Donation tiers
  const donationTiers: DonationTier[] = [
    { amount: 10, title: 'Teach Empathy', description: 'Help teach empathy lessons from chimpanzee behavior' },
    { amount: 25, title: 'Support a Nature Class', description: 'Fund one nature-based psychology class' },
    { amount: 50, title: 'Sponsor Leadership', description: 'Support youth leadership activities' },
    { amount: 100, title: 'Empower Youth Leader', description: 'Sponsor a youth leader for one month' },
  ];

  // Impact statistics
  const impactStats: ImpactStat[] = [
    { number: 5000, label: 'Students Reached', suffix: '+' },
    { number: 250, label: 'Workshops Held', suffix: '+' },
    { number: 100, label: 'Schools Partnered', suffix: '+' },
    { number: 15, label: 'Countries', suffix: '' },
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      quote: "Evergreen taught me to see nature as my greatest teacher. I learned teamwork from birds and resilience from trees.",
      author: "Marie K.",
      role: "Student, Age 16"
    },
    {
      quote: "The empathy lessons from chimpanzee behavior have transformed how our students interact with each other.",
      author: "David M.",
      role: "Teacher"
    },
    {
      quote: "My child now understands balance and coexistence in ways I never thought possible. Thank you, Evergreen!",
      author: "Sarah T.",
      role: "Parent"
    }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleDonationSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(Number(value))) {
      setDonationAmount(Number(value));
    } else {
      setDonationAmount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement donation processing
    console.log('Donation submitted:', {
      amount: donationAmount,
      frequency: isMonthly ? 'monthly' : 'one-time'
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-emerald-900">
        {/* TODO: Insert real hero image here */}
        <div className="absolute inset-0 bg-emerald-800 opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div 
            className="text-center text-white px-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Help Us Learn From Nature
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Support future compassionate leaders inspired by the psychology of nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Donate Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Learn Our Impact
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Why Your Support Matters
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evergreen helps people learn essential life values by observing and understanding nature's wisdom.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: '🦍', title: 'Empathy & Teamwork', desc: 'From chimpanzees' },
            { icon: '🐘', title: 'Family Care', desc: 'From elephants' },
            { icon: '🐦', title: 'Resilience', desc: 'From migratory birds' },
            { icon: '🌳', title: 'Coexistence', desc: 'From forest ecosystems' },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What Donations Support */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              What Your Donation Supports
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📚', title: 'Nature-Based Education', desc: 'Developing curriculum that teaches values from natural ecosystems and animal behavior.' },
              { icon: '🌟', title: 'Youth Leadership', desc: 'Empowering young leaders with nature-inspired leadership principles.' },
              { icon: '👥', title: 'Community Engagement', desc: 'Building communities that practice environmental psychology in daily life.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Choose Your Impact
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {donationTiers.map((tier, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDonationSelect(tier.amount)}
              className={`p-6 rounded-xl border-2 text-left transition-all ${
                donationAmount === tier.amount
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              <div className="text-2xl font-bold text-emerald-700 mb-2">${tier.amount}</div>
              <h3 className="font-semibold text-lg mb-2 text-emerald-900">{tier.title}</h3>
              <p className="text-gray-600 text-sm">{tier.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <label className="block text-center text-gray-700 mb-2">
            Or enter custom amount
          </label>
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <span className="px-4 text-gray-500">$</span>
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
              className="flex-1 py-3 px-2 outline-none"
            />
          </div>
        </motion.div>
      </section>

      {/* Impact Carousel - Simplified for now */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            See Our Impact
          </motion.h2>
          
          {/* TODO: Replace with actual image carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-800 rounded-xl p-8 mb-8"
          >
            <p className="text-xl mb-4">Students learning empathy through nature observation</p>
            <div className="h-64 bg-emerald-700 rounded-lg flex items-center justify-center">
              {/* TODO: Insert real carousel images here */}
              <span>Image Carousel Placeholder</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-12"
        >
          Voices of Change
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl text-emerald-500 mb-4">"</div>
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="font-semibold text-emerald-800">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Transparent Impact
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donations create measurable change in communities worldwide
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-emerald-900 text-center mb-8">
              Make Your Donation
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Frequency Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${
                    !isMonthly
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${
                    isMonthly
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Selected Amount Display */}
              {donationAmount > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6 text-center"
                >
                  <div className="text-2xl font-bold text-emerald-700">
                    ${donationAmount} {isMonthly ? 'per month' : 'one-time'}
                  </div>
                </motion.div>
              )}

              {/* Personal Information */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={donationAmount === 0}
                className={`w-full py-4 rounded-lg font-semibold text-lg ${
                  donationAmount === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                }`}
              >
                {donationAmount === 0 ? 'Select an Amount' : `Donate $${donationAmount} ${isMonthly ? 'Monthly' : 'Today'}`}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Evergreen</h3>
              <p className="text-emerald-100 mb-4">
                Teaching people how to live better by learning from nature's wisdom.
                Building compassionate leaders through environmental psychology.
              </p>
              <div className="flex space-x-4">
                {/* Social Links */}
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                  <button key={platform} className="text-emerald-200 hover:text-white">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-emerald-100">
                <div>info@evergreen.org</div>
                <div>+1 (555) 123-4567</div>
                <div>123 Nature Way, Eco City</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2 text-emerald-100">
                {['Home', 'About', 'Programs', 'Impact', 'Donate'].map((item) => (
                  <button key={item} className="block hover:text-white">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
            <p>&copy; {new Date().getFullYear()} Evergreen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Donate;