/**
 * Hackathon Timeline & Schedule Data
 * 2-Phase Format: Phase 1 Online PPT Round → Phase 2 In-Person 36-Hour Campus Sprint
 * Tula's University Campus, Dehradun (September 25 – 26, 2026)
 */

export interface TimelineMilestone {
  id: string;
  day: string;
  date: string;
  time: string;
  title: string;
  description: string;
  isKeyMilestone?: boolean;
  tag: string;
  tagVariant: 'pink' | 'yellow' | 'blue' | 'cream' | 'dark';
}

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: 'step-1-reg-ppt',
    day: 'Phase 01',
    date: 'Aug 1 - Sep 20',
    time: 'Online Submission',
    title: 'Round 1: Team Registration & Online PPT Deck Submission',
    description: 'Teams of 2 to 4 members register online (₹500/head) and submit their project presentation (PPT/PDF) & solution synopsis across one of the 5 tracks.',
    tag: 'Online PPT',
    tagVariant: 'cream',
  },
  {
    id: 'step-2-shortlist',
    day: 'Phase 01',
    date: 'Sep 22, 2026',
    time: '6:00 PM IST',
    title: 'National Shortlist Results: Selected Teams Invited to Campus',
    description: 'Jury evaluates online PPTs and synopses. Top shortlisted national squads receive official invitations to compete in-person at Tula\'s University, Dehradun.',
    tag: 'Campus Invite',
    tagVariant: 'yellow',
  },
  {
    id: 'step-3-checkin',
    day: 'Phase 02 / Day 1',
    date: 'Friday, Sep 25',
    time: '8:00 AM - 9:30 AM',
    title: 'In-Person Campus Check-in, Kits & Opening Ceremony',
    description: 'Selected teams arrive at Tula\'s University campus in Dehradun. Receive developer kits, ID badges, accommodation allotment, and opening keynote briefing.',
    isKeyMilestone: true,
    tag: 'In-Person Kickoff',
    tagVariant: 'pink',
  },
  {
    id: 'step-4-mentoring-1',
    day: 'Phase 02 / Day 1',
    date: 'Friday, Sep 25',
    time: '4:00 PM - 7:00 PM',
    title: 'In-Person Mentorship Checkpoint 1: Architecture Review',
    description: 'Industry mentors visit team stations in the campus labs to review codebase setup, hardware circuits, and API integration architectures.',
    tag: 'Mentorship',
    tagVariant: 'blue',
  },
  {
    id: 'step-5-midnight',
    day: 'Phase 02 / Night 1',
    date: 'Sep 25 - 26',
    time: '12:00 AM Midnight',
    title: 'Midnight Campus Fuel: Snacks, Energy Games & Hacking',
    description: 'Round-the-clock lab access with hot meals, energizer gaming challenges, music breaks, and coffee/snack stations.',
    tag: 'Midnight Fuel',
    tagVariant: 'dark',
  },
  {
    id: 'step-6-mentoring-2',
    day: 'Phase 02 / Day 2',
    date: 'Saturday, Sep 26',
    time: '9:00 AM - 12:00 PM',
    title: 'In-Person Mentorship Checkpoint 2: Prototype & Pitch Polish',
    description: 'Second hands-on checkpoint testing live prototype readiness, edge cases, and slide pitch delivery before final jury presentation.',
    tag: 'Checkpoint',
    tagVariant: 'blue',
  },
  {
    id: 'step-7-freeze',
    day: 'Phase 02 / Day 2',
    date: 'Saturday, Sep 26',
    time: '8:00 PM IST',
    title: '36-Hour Sprint Closes: Code Freeze & Demo Submission',
    description: 'The 36-hour physical hacking timer stops. Final GitHub commits, hardware project stations, and live deployment links are frozen.',
    isKeyMilestone: true,
    tag: 'Code Freeze',
    tagVariant: 'yellow',
  },
  {
    id: 'step-8-eval',
    day: 'Phase 02 / Day 2',
    date: 'Saturday, Sep 26',
    time: '8:30 PM - 10:30 PM',
    title: 'Live On-Stage Jury Pitching & ₹7 Lakhs Awards Ceremony',
    description: 'Top finalist squads pitch working prototypes live on stage before the national jury. Announcement of 1st, 2nd, 3rd, 4th & 5th overall winners and ₹7L+ prizes!',
    isKeyMilestone: true,
    tag: 'Grand Finale',
    tagVariant: 'pink',
  },
];

export default TIMELINE_DATA;
