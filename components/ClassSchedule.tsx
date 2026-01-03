'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, User } from 'lucide-react'
import { scheduleData, daysOfWeek, type ScheduleItem } from '@/data/scheduleData'

export default function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState<string>('Monday')

  const filteredClasses = scheduleData.filter(
    (item) => item.day === selectedDay
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section
      id="classes"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
      aria-labelledby="schedule-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          id="schedule-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-center mb-4 font-display tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Class <span className="text-accent-green">Schedule</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Filter by day to see available classes
        </motion.p>

        {/* Day Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {daysOfWeek.map((day) => (
            <motion.button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-accent-green text-dark-bg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={selectedDay === day}
              aria-label={`Filter classes for ${day}`}
            >
              {day.slice(0, 3)}
            </motion.button>
          ))}
        </div>

        {/* Class Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredClasses.length > 0 ? (
              filteredClasses.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-accent-green transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-accent-green uppercase tracking-wide font-display">
                      {classItem.classType}
                    </h3>
                    <span className="text-sm text-gray-400 font-semibold">
                      {classItem.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <User className="w-4 h-4 text-accent-green" />
                    <span className="text-sm">{classItem.trainer}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider">
                      <Clock className="w-3 h-3" />
                      <span>{classItem.day}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No classes scheduled for {selectedDay}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

