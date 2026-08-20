export const userName = 'Aisha';
export const userFullName = 'Aisha Sharma';
export const userEmail = 'aisha.sharma@email.com';
export const condition = 'Vitamin D Deficiency';
export const specialty = 'Endocrinologist';

export const doctors = [
  { id: '1', name: 'Dr. Ananya Rao', specialty, exp: '12 yrs', rating: '4.9', reviews: 214, fee: '₹800', initials: 'AR' },
  { id: '2', name: 'Dr. Vikram Sen', specialty, exp: '9 yrs', rating: '4.8', reviews: 189, fee: '₹650', initials: 'VS' },
  { id: '3', name: 'Dr. Meera Iyer', specialty, exp: '15 yrs', rating: '4.9', reviews: 302, fee: '₹950', initials: 'MI' },
  { id: '4', name: 'Dr. Karan Malhotra', specialty, exp: '7 yrs', rating: '4.7', reviews: 145, fee: '₹600', initials: 'KM' },
  { id: '5', name: 'Dr. Priya Nair', specialty, exp: '10 yrs', rating: '4.8', reviews: 176, fee: '₹700', initials: 'PN' },
  { id: '6', name: 'Dr. Rohan Gupta', specialty, exp: '6 yrs', rating: '4.6', reviews: 98, fee: '₹550', initials: 'RG' },
  { id: '7', name: 'Dr. Sanjana Desai', specialty, exp: '14 yrs', rating: '4.9', reviews: 260, fee: '₹900', initials: 'SD' },
  { id: '8', name: 'Dr. Arjun Kapoor', specialty, exp: '8 yrs', rating: '4.7', reviews: 132, fee: '₹620', initials: 'AK' },
];

export const reports = [
  { id: '1', name: 'Blood_Panel_Aug2026.pdf', date: '19 Aug 2026', condition, status: 'Reviewed' },
  { id: '2', name: 'Lipid_Profile_Apr.pdf', date: '03 Apr 2026', condition: 'Normal', status: 'Reviewed' },
  { id: '3', name: 'Thyroid_Test_Feb.pdf', date: '18 Feb 2026', condition: 'Hypothyroidism', status: 'Reviewed' },
];

export const recentReports = reports.slice(0, 2);

export const appointments = [
  { id: '1', doctor: 'Dr. Ananya Rao', specialty, date: 'Thu, 21 Aug', time: '10:30 AM', status: 'Confirmed' },
  { id: '2', doctor: 'Dr. Meera Iyer', specialty, date: '28 Aug 2026', time: '4:00 PM', status: 'Confirmed' },
];

export const chatMessages = [
  { id: '1', text: "Hi Aisha, I've reviewed your report. Your Vitamin D levels are low but easily manageable.", time: '9:02 AM', isDoctor: true },
  { id: '2', text: 'Thank you doctor! Should I take supplements?', time: '9:05 AM', isDoctor: false },
  { id: '3', text: "Yes — 2000 IU daily, plus 15 mins of sunlight. Let's review in 6 weeks.", time: '9:07 AM', isDoctor: true },
  { id: '4', text: "Sounds good, I'll book a follow-up.", time: '9:08 AM', isDoctor: false },
];

export const todayNotifs = [
  { id: '1', text: `Your report analysis is complete — ${condition} detected.`, time: '10 min ago' },
  { id: '2', text: 'Reminder: appointment with Dr. Ananya Rao tomorrow at 10:30 AM.', time: '2 hr ago' },
];

export const earlierNotifs = [
  { id: '1', text: 'Dr. Meera Iyer sent you a message.', time: 'Yesterday' },
  { id: '2', text: 'Health tip: get 15 minutes of sunlight daily for natural Vitamin D.', time: '2 days ago' },
];

export const keyMetrics = [
  { marker: 'Vitamin D', value: '12 ng/mL', flag: 'Low' as const },
  { marker: 'Calcium', value: '9.4 mg/dL', flag: 'Normal' as const },
  { marker: 'Hemoglobin', value: '13.1 g/dL', flag: 'Normal' as const },
];

export function getDoctorById(id: string) {
  return doctors.find((d) => d.id === id) ?? doctors[0];
}
