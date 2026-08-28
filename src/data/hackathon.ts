export interface NavItem {
  label: string;
  href: string;
}

export interface HackathonConfig {
  name: string;
  tagline: string;
  description: string;
  edition: string;
  level: string;
  organizer: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  venue: string;
  format: string;
  contactEmail: string;
  registrationUrl: string;
  navItems: NavItem[];
}

export const HACKATHON_CONFIG: HackathonConfig = {
  name: "Hack The Future: Hello Kitty 2026",
  tagline: "India's Flagship 36-Hour National Level Hackathon",
  description: "A premier 2-phase national innovation marathon (Round 1: Online PPT Submission -> Round 2: 36-Hour In-Person Grand Finale) organized by Tula's University, Dehradun with a ₹7 Lakh prize pool.",
  edition: "National Edition 2026",
  level: "National Level Hackathon",
  organizer: "Department of CSE, Tula's University, Dehradun in association with Tula's ACM Student Chapter",
  startDate: "2026-09-25",
  endDate: "2026-09-26",
  duration: "36 Hours Non-Stop (In-Person Finale)",
  location: "Tula's University Campus, Dehradun (In-Person Finale)",
  venue: "Tula's University Campus, Dhoolkot, Dehradun, Uttarakhand 248011",
  format: "Phase 1: Online PPT Round → Phase 2: In-Person Campus Finale",
  contactEmail: "tulashackathon@gmail.com",
  registrationUrl: "#register",
  navItems: [
    { label: "Home", href: "#hero-scene" },
    { label: "About", href: "#about" },
    { label: "Event", href: "#event" },
    { label: "Tracks", href: "#tracks" },
    { label: "Schedule", href: "#schedule" },
    { label: "Prizes", href: "#prizes" },
    { label: "FAQ", href: "#faq" },
  ],
};

export default HACKATHON_CONFIG;
