/**
 * How It Works / Participation Roadmap Data
 * 2-Phase Hackathon Structure - Tula's University, Dehradun
 */

export interface StepItem {
  number: string;
  title: string;
  kicker: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  stickerText: string;
  stickerVariant: 'pink' | 'yellow' | 'blue' | 'cream';
  icon: 'sparkle' | 'users' | 'code' | 'trophy';
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    kicker: "STEP 1 // TEAM REGISTRATION",
    title: "Register Team (₹500/head)",
    description: "Submit team details (2 to 4 members, nominal ₹500/head covering meals, accommodation & kits) and select your target challenge track.",
    actionLabel: "Register Team",
    actionHref: "#register",
    stickerText: "₹500 / HEAD",
    stickerVariant: "pink",
    icon: "sparkle",
  },
  {
    number: "02",
    kicker: "STEP 2 // ROUND 1: ONLINE PPT",
    title: "Submit Online PPT & Idea Synopsis",
    description: "Upload your slide deck (PPT/PDF) and technical abstract explaining the problem statement, system architecture, and tech stack.",
    stickerText: "ONLINE PPT ROUND",
    stickerVariant: "blue",
    icon: "code",
  },
  {
    number: "03",
    kicker: "STEP 3 // SELECTION & INVITATION",
    title: "Shortlist Announcement (Sep 22)",
    description: "Jury reviews all submitted PPTs. Selected top teams from across India receive official invitations to compete in-person at Tula's University campus in Dehradun.",
    stickerText: "CAMPUS SHORTLIST",
    stickerVariant: "yellow",
    icon: "users",
  },
  {
    number: "04",
    kicker: "STEP 4 // ROUND 2: CAMPUS SPRINT",
    title: "36-Hour In-Person Grand Finale",
    description: "Selected teams assemble on campus on Sep 25–26 for the 36-hour physical build. Pitch live before the national jury to win ₹65K, ₹45K, ₹35K, ₹10K prizes + ₹1.5L incubation grants!",
    stickerText: "₹7L+ FINALE",
    stickerVariant: "cream",
    icon: "trophy",
  },
];

export default HOW_IT_WORKS_STEPS;
