'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period: string
  features: string[]
  cta: string
  popular?: boolean
  stripeUrl: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Drop-In',
    price: '$25',
    period: 'per visit',
    features: [
      'Single day access',
      'All equipment available',
      'Locker room access',
      'No commitment',
    ],
    cta: 'Buy Now',
    stripeUrl: 'https://buy.stripe.com/test-dropin',
  },
  {
    name: 'Monthly Standard',
    price: '$79',
    period: 'per month',
    features: [
      'Unlimited access',
      'All group classes included',
      'Locker room & showers',
      'Free parking',
      'Mobile app access',
    ],
    cta: 'Start Membership',
    stripeUrl: 'https://buy.stripe.com/test-monthly',
  },
  {
    name: 'Yearly Pro',
    price: '$799',
    period: 'per year',
    features: [
      'Everything in Monthly',
      '2 personal training sessions',
      'Nutrition consultation',
      'Priority class booking',
      'Guest passes (4 per year)',
      '24/7 facility access',
      'Best value - Save 15%',
    ],
    cta: 'Get Best Value',
    popular: true,
    stripeUrl: 'https://buy.stripe.com/test-yearly',
  },
]

export default function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      id="membership"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-gray-900"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          id="pricing-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-center mb-4 font-display tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Membership <span className="text-accent-green">Pricing</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Choose the plan that fits your fitness journey
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative bg-gray-900 border-2 rounded-xl p-8 flex flex-col ${
                tier.popular
                  ? 'border-accent-green scale-105 md:scale-110 shadow-[0_0_30px_rgba(204,255,0,0.3)]'
                  : 'border-gray-800 hover:border-accent-green'
              } transition-all duration-300`}
              variants={cardVariants}
              whileHover={{ scale: tier.popular ? 1.12 : 1.05, y: -10 }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="bg-accent-green text-dark-bg px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </motion.div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold uppercase mb-2 font-display text-accent-green">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold text-dark-text"
                    aria-label={`Price: ${tier.price} ${tier.period}`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-gray-400 text-sm">{tier.period}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={tier.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                  tier.popular
                    ? 'bg-accent-green text-dark-bg hover:bg-accent-blue'
                    : 'bg-gray-800 text-dark-text border-2 border-gray-700 hover:bg-accent-green hover:text-dark-bg hover:border-accent-green'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`${tier.cta} - ${tier.name} plan for ${tier.price} ${tier.period}`}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

