export interface ScheduleItem {
  id: string
  time: string
  classType: string
  trainer: string
  day: string
}

export const scheduleData: ScheduleItem[] = [
  // Monday
  { id: '1', time: '06:00', classType: 'HIIT', trainer: 'Sarah Johnson', day: 'Monday' },
  { id: '2', time: '08:00', classType: 'Yoga', trainer: 'Michael Chen', day: 'Monday' },
  { id: '3', time: '10:00', classType: 'Strength Training', trainer: 'David Martinez', day: 'Monday' },
  { id: '4', time: '12:00', classType: 'Cardio Blast', trainer: 'Emma Wilson', day: 'Monday' },
  { id: '5', time: '18:00', classType: 'CrossFit', trainer: 'James Anderson', day: 'Monday' },
  { id: '6', time: '20:00', classType: 'Pilates', trainer: 'Lisa Thompson', day: 'Monday' },

  // Tuesday
  { id: '7', time: '06:30', classType: 'Bootcamp', trainer: 'Sarah Johnson', day: 'Tuesday' },
  { id: '8', time: '09:00', classType: 'Spin Class', trainer: 'Robert Lee', day: 'Tuesday' },
  { id: '9', time: '11:00', classType: 'Yoga Flow', trainer: 'Michael Chen', day: 'Tuesday' },
  { id: '10', time: '13:00', classType: 'Boxing', trainer: 'Carlos Rodriguez', day: 'Tuesday' },
  { id: '11', time: '17:30', classType: 'Strength Training', trainer: 'David Martinez', day: 'Tuesday' },
  { id: '12', time: '19:30', classType: 'Zumba', trainer: 'Maria Garcia', day: 'Tuesday' },

  // Wednesday
  { id: '13', time: '07:00', classType: 'HIIT', trainer: 'Sarah Johnson', day: 'Wednesday' },
  { id: '14', time: '09:30', classType: 'Pilates', trainer: 'Lisa Thompson', day: 'Wednesday' },
  { id: '15', time: '12:00', classType: 'Yoga', trainer: 'Michael Chen', day: 'Wednesday' },
  { id: '16', time: '14:00', classType: 'CrossFit', trainer: 'James Anderson', day: 'Wednesday' },
  { id: '17', time: '18:30', classType: 'Cardio Blast', trainer: 'Emma Wilson', day: 'Wednesday' },
  { id: '18', time: '20:00', classType: 'Meditation', trainer: 'Michael Chen', day: 'Wednesday' },

  // Thursday
  { id: '19', time: '06:00', classType: 'Bootcamp', trainer: 'Sarah Johnson', day: 'Thursday' },
  { id: '20', time: '08:30', classType: 'Strength Training', trainer: 'David Martinez', day: 'Thursday' },
  { id: '21', time: '10:30', classType: 'Spin Class', trainer: 'Robert Lee', day: 'Thursday' },
  { id: '22', time: '13:00', classType: 'Boxing', trainer: 'Carlos Rodriguez', day: 'Thursday' },
  { id: '23', time: '17:00', classType: 'Yoga Flow', trainer: 'Michael Chen', day: 'Thursday' },
  { id: '24', time: '19:00', classType: 'HIIT', trainer: 'Emma Wilson', day: 'Thursday' },

  // Friday
  { id: '25', time: '07:00', classType: 'CrossFit', trainer: 'James Anderson', day: 'Friday' },
  { id: '26', time: '09:00', classType: 'Pilates', trainer: 'Lisa Thompson', day: 'Friday' },
  { id: '27', time: '11:30', classType: 'Cardio Blast', trainer: 'Emma Wilson', day: 'Friday' },
  { id: '28', time: '14:00', classType: 'Yoga', trainer: 'Michael Chen', day: 'Friday' },
  { id: '29', time: '17:30', classType: 'Strength Training', trainer: 'David Martinez', day: 'Friday' },
  { id: '30', time: '19:30', classType: 'Zumba', trainer: 'Maria Garcia', day: 'Friday' },

  // Saturday
  { id: '31', time: '08:00', classType: 'Bootcamp', trainer: 'Sarah Johnson', day: 'Saturday' },
  { id: '32', time: '10:00', classType: 'HIIT', trainer: 'Emma Wilson', day: 'Saturday' },
  { id: '33', time: '12:00', classType: 'Yoga Flow', trainer: 'Michael Chen', day: 'Saturday' },
  { id: '34', time: '14:30', classType: 'Boxing', trainer: 'Carlos Rodriguez', day: 'Saturday' },
  { id: '35', time: '16:00', classType: 'Spin Class', trainer: 'Robert Lee', day: 'Saturday' },

  // Sunday
  { id: '36', time: '09:00', classType: 'Yoga', trainer: 'Michael Chen', day: 'Sunday' },
  { id: '37', time: '11:00', classType: 'Pilates', trainer: 'Lisa Thompson', day: 'Sunday' },
  { id: '38', time: '13:00', classType: 'Meditation', trainer: 'Michael Chen', day: 'Sunday' },
  { id: '39', time: '15:00', classType: 'Yoga Flow', trainer: 'Michael Chen', day: 'Sunday' },
]

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

