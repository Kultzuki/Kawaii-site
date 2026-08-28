/**
 * Event Metadata & General Information
 * Tula's University, Dehradun - National Level Hackathon
 * 2-Phase Structure: Online PPT Round → Selected Teams On-Campus Finale
 */

export interface QuickFact {
  label: string;
  value: string;
  icon: 'calendar' | 'map-pin' | 'users' | 'trophy' | 'code' | 'sparkle';
  badge?: string;
}

export interface EligibilityCriterion {
  title: string;
  description: string;
  icon: 'sparkle' | 'heart' | 'users' | 'code';
}

export interface EventDetails {
  name: string;
  level: string;
  tagline: string;
  headline: string;
  summary: string;
  organizer: string;
  institution: string;
  dates: {
    start: string;
    end: string;
    display: string;
    duration: string;
    timezone: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
    venue: string;
    isHybrid: boolean;
    onlinePlatform: string;
  };
  teamRequirements: {
    minSize: number;
    maxSize: number;
    soloAllowed: boolean;
    teamMatchingAssistance: boolean;
    description: string;
  };
  registrationFee: string;
  quickFacts: QuickFact[];
  eligibility: EligibilityCriterion[];
}

export const EVENT_DETAILS: EventDetails = {
  name: "Hack The Future 2026",
  level: "National Level Hackathon",
  tagline: "India's Flagship 36-Hour National Innovation Marathon",
  headline: "Where National Ingenuity Meets Kawaii Engineering",
  summary: "A 2-phase national hackathon organized by the Department of CSE at Tula's University, Dehradun in association with Tula's ACM Chapter. All registered teams of 2–4 members participate in Phase 1 (Online PPT & Idea Synopsis Submission). Selected finalist squads travel to Tula's University campus for Phase 2: a 36-hour in-person physical build sprint with meals and stay provided, competing for the ₹7 Lakh prize pool.",
  organizer: "Department of CSE, Tula's University",
  institution: "Tula's University, Dehradun",
  dates: {
    start: "2026-09-25",
    end: "2026-09-26",
    display: "September 25 – 26, 2026",
    duration: "36 Hours Non-Stop (Campus Finale)",
    timezone: "IST (UTC+5:30) / All India Synchronized",
  },
  location: {
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India",
    venue: "Tula's University Campus, Dhoolkot, Selaqui, Dehradun",
    isHybrid: false,
    onlinePlatform: "Discord, GitHub & Online PPT Submission Portal",
  },
  teamRequirements: {
    minSize: 2,
    maxSize: 4,
    soloAllowed: false,
    teamMatchingAssistance: true,
    description: "Teams of 2 to 4 members. Interdisciplinary squads combining coders, hardware tinkerers, and designers are encouraged.",
  },
  registrationFee: "₹500 per head",
  quickFacts: [
    { label: "Phase 1", value: "Online PPT Round", icon: "code", badge: "All India Entry" },
    { label: "Phase 2", value: "36-Hr Campus Finale", icon: "calendar", badge: "In-Person Sprint" },
    { label: "Location", value: "Tula's University, Dehradun", icon: "map-pin", badge: "On-Campus" },
    { label: "Registration", value: "₹500 / Head", icon: "sparkle", badge: "Meals & Stay Inc." },
  ],
  eligibility: [
    {
      title: "All Indian College Students Eligible",
      description: "Open to B.Tech, BCA, MCA, M.Tech, Polytechnic, Diploma, and all enrolled students nationwide in teams of 2 to 4.",
      icon: "sparkle",
    },
    {
      title: "Phase 1: Online PPT Submission Round",
      description: "Submit your team presentation deck (PPT/PDF) and technical synopsis abstract online across any of the 5 national tracks.",
      icon: "code",
    },
    {
      title: "Phase 2: In-Person Campus Finale in Dehradun",
      description: "Selected shortlisted finalist squads travel to Tula's University, Dehradun on September 25–26 for the 36-hour physical hackathon.",
      icon: "users",
    },
    {
      title: "₹500 / Head Registration (Meals & Stay Included)",
      description: "Nominal fee of ₹500 per participant. Covers full 36-hour on-campus meals, accommodation/stay, lab access, swag kits, and certificates.",
      icon: "heart",
    },
  ],
};

export default EVENT_DETAILS;
