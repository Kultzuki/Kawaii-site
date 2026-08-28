/**
 * Hackathon Prizes & Awards Data
 * National Level Hackathon - Tula's University, Dehradun
 * Rewards awarded overall for the entire event:
 * - 1st Prize: ₹65,000 Cash + ₹1.5L Incubation Support
 * - 2nd Prize: ₹45,000 Cash + ₹1.5L Incubation Support
 * - 3rd Prize: ₹35,000 Cash + ₹1.5L Incubation Support
 * - 4th Place: ₹10,000 Cash (Consolation Prize)
 * - 5th Place: ₹10,000 Cash (Consolation Prize)
 * Total Prize Pool: ₹7,00,000+
 */

export interface PrizeItem {
  id: string;
  rank: string;
  title: string;
  amount: string;
  cashAmount: string;
  incubationAmount?: string;
  description: string;
  perks: string[];
  badgeVariant: 'pink' | 'yellow' | 'blue' | 'cream';
  isGrandPrize?: boolean;
}

export interface SpecialAward {
  title: string;
  amount: string;
  description: string;
  icon: 'sparkle' | 'heart' | 'trophy' | 'code';
}

export interface SwagItem {
  name: string;
  description: string;
  icon: 'sparkle' | 'bow' | 'heart';
}

export interface PrizesData {
  totalPool: string;
  grandPrize: PrizeItem;
  podiumPrizes: PrizeItem[];
  consolationPrizes: PrizeItem[];
  specialAwards: SpecialAward[];
  swag: SwagItem[];
}

export const PRIZES_DATA: PrizesData = {
  totalPool: "₹7,00,000+",
  grandPrize: {
    id: "first-prize",
    rank: "1st Prize Winner",
    title: "1st Prize // Grand National Champion",
    amount: "₹65,000 + ₹1.5L Incubation",
    cashAmount: "₹65,000 Direct Cash",
    incubationAmount: "₹1,50,000 Incubation Support",
    description: "Awarded to the top overall team across the entire hackathon, demonstrating breakthrough innovation, technical craft, and presentation polish.",
    perks: [
      "₹65,000 Direct Cash Prize",
      "₹1,50,000 Direct Incubation Support via Tula's University TBI",
      "Official Golden Hello Kitty National Trophy",
      "Fast-track investor pitch & national media spotlight",
    ],
    badgeVariant: "yellow",
    isGrandPrize: true,
  },
  podiumPrizes: [
    {
      id: "first-prize-card",
      rank: "1st Prize",
      title: "National Champion",
      amount: "₹65,000 + ₹1.5L Incubation",
      cashAmount: "₹65,000 Cash",
      incubationAmount: "₹1,50,000 Incubation Grant",
      description: "Highest scoring team across all national criteria and live jury evaluation.",
      perks: [
        "₹65,000 Direct Cash Prize",
        "₹1,50,000 Incubation Grant (Tula's TBI)",
        "Golden National Champion Trophy",
        "Incubation Fast-Track & Mentorship",
      ],
      badgeVariant: "yellow",
      isGrandPrize: true,
    },
    {
      id: "second-prize-card",
      rank: "2nd Prize",
      title: "1st Runner Up",
      amount: "₹45,000 + ₹1.5L Incubation",
      cashAmount: "₹45,000 Cash",
      incubationAmount: "₹1,50,000 Incubation Grant",
      description: "Second overall project showcasing exceptional technical craft, originality, and impact.",
      perks: [
        "₹45,000 Direct Cash Prize",
        "₹1,50,000 Incubation Grant (Tula's TBI)",
        "Silver Runner-Up Trophy",
        "Cloud Credits & Venture Mentorship",
      ],
      badgeVariant: "pink",
    },
    {
      id: "third-prize-card",
      rank: "3rd Prize",
      title: "2nd Runner Up",
      amount: "₹35,000 + ₹1.5L Incubation",
      cashAmount: "₹35,000 Cash",
      incubationAmount: "₹1,50,000 Incubation Grant",
      description: "Third overall project demonstrating outstanding engineering and working prototype execution.",
      perks: [
        "₹35,000 Direct Cash Prize",
        "₹1,50,000 Incubation Grant (Tula's TBI)",
        "Bronze Runner-Up Trophy",
        "Developer Tooling Grants",
      ],
      badgeVariant: "blue",
    },
  ],
  consolationPrizes: [
    {
      id: "fourth-prize-card",
      rank: "4th Place",
      title: "Consolation Prize // 4th Place",
      amount: "₹10,000 Cash",
      cashAmount: "₹10,000 Cash",
      description: "Recognizing outstanding technical innovation and real-world problem-solving feasibility.",
      perks: [
        "₹10,000 Cash Award",
        "Certificate of National Excellence",
        "Tula's TBI Mentorship Access",
      ],
      badgeVariant: "cream",
    },
    {
      id: "fifth-prize-card",
      rank: "5th Place",
      title: "Consolation Prize // 5th Place",
      amount: "₹10,000 Cash",
      cashAmount: "₹10,000 Cash",
      description: "Honoring exemplary teamwork, prototype usability, and high-quality build execution.",
      perks: [
        "₹10,000 Cash Award",
        "Certificate of National Excellence",
        "Tula's TBI Mentorship Access",
      ],
      badgeVariant: "cream",
    },
  ],
  specialAwards: [
    {
      title: "Best UI/UX Motion & Polish",
      amount: "₹10,000",
      description: "Honoring silky smooth 60fps animations, accessible interface design, and delightful interaction craft.",
      icon: "sparkle",
    },
    {
      title: "Best All-Women Hacker Team",
      amount: "₹10,000",
      description: "Recognizing and empowering top women engineers and innovators in technology.",
      icon: "heart",
    },
    {
      title: "Best First-Year / Freshman Squad",
      amount: "₹10,000",
      description: "Celebrating junior student developers building their first ambitious national hackathon project.",
      icon: "trophy",
    },
    {
      title: "Most Novel Hardware Prototype",
      amount: "₹10,000",
      description: "Awarded to the most creative live physical embedded build demonstrated to judges.",
      icon: "code",
    },
  ],
  swag: [
    {
      name: "Official Hackathon Hoodie & T-Shirt",
      description: "Exclusive custom-designed national edition developer apparel.",
      icon: "bow",
    },
    {
      name: "National Certificate of Merit",
      description: "Verified digital credential backed by Tula's University & ACM Chapter.",
      icon: "sparkle",
    },
    {
      name: "$500 Cloud & API Credits",
      description: "Generous partner credits for cloud compute, database hosting, and LLM APIs.",
      icon: "heart",
    },
  ],
};

export default PRIZES_DATA;
