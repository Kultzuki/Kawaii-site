/**
 * Frequently Asked Questions (FAQ) Data
 * National Level Hackathon - Tula's University, Dehradun
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'teams' | 'technical' | 'logistics';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-what-is',
    question: 'What is Hack The Future 2026?',
    answer: 'Hack The Future is India\'s premier 2-phase national hackathon organized on September 25–26 by the Department of Computer Science & Engineering at Tula\'s University, Dehradun in collaboration with Tula\'s ACM Student Chapter. It features a ₹7 Lakhs+ prize pool evaluated for overall excellence across 5 tracks: AI/ML, Cybersecurity, Robotics & Automation, Social Impact & Public Good, and Open Innovation.',
    category: 'general',
  },
  {
    id: 'faq-rounds-format',
    question: 'How do the rounds work? (Online PPT Round + In-Person Campus Finale)',
    answer: 'The hackathon is conducted in two exciting phases: (1) Phase 1 (Online PPT Round): Registered teams submit their project slide deck (PPT/PDF) and synopsis abstract online. (2) Phase 2 (In-Person Campus Finale): The top selected finalist teams from across India travel to the scenic Tula\'s University campus in Dehradun on September 25–26 for the 36-hour physical build marathon, with food and stay provided.',
    category: 'general',
  },
  {
    id: 'faq-prizes-breakdown',
    question: 'How are the prizes awarded and what is the breakdown?',
    answer: 'Prizes are awarded for overall event rankings across the entire hackathon: 1st Prize: ₹65,000 Direct Cash + ₹1,50,000 Incubation Support Grant + Golden Trophy; 2nd Prize: ₹45,000 Direct Cash + ₹1,50,000 Incubation Support Grant + Silver Trophy; 3rd Prize: ₹35,000 Direct Cash + ₹1,50,000 Incubation Support Grant + Bronze Trophy; 4th Place: ₹10,000 Cash Consolation Prize; 5th Place: ₹10,000 Cash Consolation Prize; plus Special Category Awards (₹10,000 each) and partner perks totalling ₹7 Lakhs+.',
    category: 'general',
  },
  {
    id: 'faq-cost',
    question: 'What is the registration fee and what does it cover?',
    answer: 'Registration is ₹500 per head (₹500 per team member). For selected finalist teams traveling to Tula\'s University, Dehradun, this fee covers full 36-hour meals, midnight snacks, on-campus accommodation/stay during the sprint, high-speed Wi-Fi, lab equipment, official developer hoodie & swag kit, and verified national certificates.',
    category: 'general',
  },
  {
    id: 'faq-eligibility',
    question: 'Who is eligible to participate?',
    answer: 'All enrolled undergraduate, postgraduate, and diploma students from any recognized university or engineering college across India (B.Tech, BCA, MCA, M.Tech, B.Sc, etc.) are eligible to participate in teams of 2 to 4 members.',
    category: 'general',
  },
  {
    id: 'faq-teams',
    question: 'What is the required team size?',
    answer: 'Teams must consist of 2 to 4 members. Interdisciplinary squads combining software coders, hardware builders, and UI/UX designers are highly encouraged. Solo registrants can use our Discord mixer channels to form teams of 2-4.',
    category: 'teams',
  },
  {
    id: 'faq-venue',
    question: 'Where is the Phase 2 in-person campus finale held?',
    answer: 'The 36-hour in-person grand finale is hosted on campus at Tula\'s University, Dhoolkot, PO Selaqui, Dehradun, Uttarakhand 248011 on September 25–26, 2026.',
    category: 'logistics',
  },
  {
    id: 'faq-tracks',
    question: 'What are the 5 official challenge tracks?',
    answer: 'The 5 official challenge tracks are: (1) AI / ML, (2) Cybersecurity, (3) Robotics & Automation, (4) Social Impact & Public Good, and (5) Open Innovation. All projects are evaluated together for the top overall prizes.',
    category: 'technical',
  },
  {
    id: 'faq-contact',
    question: 'How can I contact the organizing committee?',
    answer: 'You can reach out to the organizing team via email at tulashackathon@gmail.com, join the official Discord server, or contact the student coordinators (+91 70371 77342 / +91 80776 44887).',
    category: 'logistics',
  },
];

export default FAQ_ITEMS;
