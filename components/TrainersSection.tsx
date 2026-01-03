'use client'

import { motion } from 'framer-motion'
import { Award, Users } from 'lucide-react'

const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'HIIT & Bootcamp',
    experience: '10+ years',
    certification: 'NASM Certified',
  },
  {
    name: 'David Martinez',
    specialty: 'Strength Training',
    experience: '12+ years',
    certification: 'CSCS Certified',
  },
  {
    name: 'Michael Chen',
    specialty: 'Yoga & Meditation',
    experience: '8+ years',
    certification: 'RYT-500 Certified',
  },
  {
    name: 'Emma Wilson',
    specialty: 'Cardio & CrossFit',
    experience: '9+ years',
    certification: 'CrossFit Level 2',
  },
  {
    name: 'James Anderson',
    specialty: 'CrossFit & Functional',
    experience: '11+ years',
    certification: 'CrossFit Level 3',
  },
  {
    name: 'Carlos Rodriguez',
    specialty: 'Boxing & Combat',
    experience: '15+ years',
    certification: 'USA Boxing Certified',
  },
]

export default function TrainersSection() {
  return (
    <section
      id="trainers"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      aria-labelledby="trainers-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          id="trainers-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-center mb-4 font-display tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Expert <span className="text-accent-green">Trainers</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Meet our certified professionals dedicated to your success
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              className="bg-dark-bg border border-gray-800 rounded-lg p-6 hover:border-accent-green transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-green uppercase font-display">
                    {trainer.name}
                  </h3>
                  <p className="text-sm text-gray-400">{trainer.specialty}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Award className="w-4 h-4 text-accent-green" />
                  <span>{trainer.certification}</span>
                </div>
                <p className="text-gray-400 text-sm">Experience: {trainer.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

