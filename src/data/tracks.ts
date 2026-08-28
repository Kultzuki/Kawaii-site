/**
 * Hackathon Challenge Tracks & Themes Data
 * Tracks: AI/ML, Cybersecurity, Robotics & Automation, Social Impact & Public Good, Open Innovation
 * Note: Prizes are awarded overall for the entire event across all tracks!
 */

export interface TrackItem {
  id: string;
  number: string;
  title: string;
  kicker: string;
  tagline: string;
  description: string;
  promptExamples: string[];
  suggestedTech: string[];
  categoryBadge: string;
  badgeVariant: 'pink' | 'yellow' | 'blue' | 'cream';
  icon: 'sparkle' | 'code' | 'heart' | 'terminal' | 'trophy';
}

export const TRACKS_DATA: TrackItem[] = [
  {
    id: 'track-aiml',
    number: '01',
    title: 'AI / ML',
    kicker: 'Intelligent Models & Generative AI',
    tagline: 'Build intelligent, autonomous systems, predictive models, and empathetic agentic workflows.',
    description: 'Harness Large Language Models, deep neural networks, computer vision, and machine learning to build high-performance solutions — from multimodal copilots to automated predictive diagnostic systems.',
    promptExamples: [
      'Autonomous multilingual agent with multimodal document reasoning',
      'Real-time edge computer vision for safety and precision agriculture',
      'Personalized adaptive AI tutor with empathetic feedback loops',
    ],
    suggestedTech: ['PyTorch', 'TensorFlow', 'LangChain / LlamaIndex', 'OpenAI / Gemini API', 'Hugging Face', 'FastAPI'],
    categoryBadge: 'National Track 01',
    badgeVariant: 'pink',
    icon: 'sparkle',
  },
  {
    id: 'track-cybersecurity',
    number: '02',
    title: 'Cybersecurity',
    kicker: 'Defense, Zero Trust & Digital Privacy',
    tagline: 'Safeguard critical digital infrastructure, private identities, and network perimeters.',
    description: 'Design robust defensive tools, intrusion detection systems, cryptographic privacy protocols, zero-trust architectures, and automated vulnerability scanners to secure the digital frontier.',
    promptExamples: [
      'AI-powered zero-day phishing and anomalous traffic detector',
      'Decentralized identity & biometric proof-of-authenticity vault',
      'Automated smart contract and codebase vulnerability auditor',
    ],
    suggestedTech: ['Rust', 'Go', 'Snort / Suricata', 'Cryptography SDKs', 'WebAssembly', 'Wireshark', 'Linux Kernel'],
    categoryBadge: 'National Track 02',
    badgeVariant: 'blue',
    icon: 'terminal',
  },
  {
    id: 'track-robotics-automation',
    number: '03',
    title: 'Robotics & Automation',
    kicker: 'Embedded Systems & Smart Hardware',
    tagline: 'Fuse software and physical engineering into autonomous robots and intelligent IoT devices.',
    description: 'Bridge software intelligence with physical hardware. Construct smart autonomous rovers, drone surveillance mechanisms, industrial robotic arms, and connected IoT sensory companions.',
    promptExamples: [
      'Autonomous search-and-rescue rover with obstacle navigation',
      'Smart agricultural drone for automated soil and crop monitoring',
      'Connected desk robotic companion for posture and focus assistance',
    ],
    suggestedTech: ['ROS 2', 'Arduino / ESP32', 'Raspberry Pi', 'OpenCV', 'MQTT', 'MicroPython', 'Sensors / Actuators'],
    categoryBadge: 'National Track 03',
    badgeVariant: 'yellow',
    icon: 'code',
  },
  {
    id: 'track-social-impact',
    number: '04',
    title: 'Social Impact & Public Good',
    kicker: 'Healthcare, EdTech & Sustainability',
    tagline: 'Engineer solutions that uplift communities, enhance healthcare access, and protect the planet.',
    description: 'Focus on impactful technology for India and the world: rural healthcare access, patient record management, digital education accessibility (EdTech), disaster response, and clean energy optimization.',
    promptExamples: [
      'Accessible telemedicine and electronic health record management for rural clinics',
      'Multilingual assistive voice platform for visually impaired students',
      'Hyperlocal environmental air & water quality monitoring telemetry',
    ],
    suggestedTech: ['React / Astro', 'Mobile Flutter', 'Supabase / PostgreSQL', 'Open Data APIs', 'WebSockets', 'Cloudflare'],
    categoryBadge: 'National Track 04',
    badgeVariant: 'cream',
    icon: 'heart',
  },
  {
    id: 'track-open-innovation',
    number: '05',
    title: 'Open Innovation',
    kicker: 'Wildcard & Next-Gen Breakthroughs',
    tagline: 'No boundaries. Build whatever audacious, disruptive technology solves real problems.',
    description: 'For multidisciplinary inventions that defy conventional categories — immersive WebXR spatial computing, FinTech decentralized networks, logistics optimization, creative developer tooling, or experimental software.',
    promptExamples: [
      'Immersive WebXR 3D spatial collaboration workspace',
      'Decentralized peer-to-peer compute and storage resource grid',
      'Smart supply chain tracking with real-time fraud mitigation',
    ],
    suggestedTech: ['Three.js / WebGL', 'WebSockets', 'Solidity / Web3', 'Golang', 'Next-Gen Full-Stack', 'Vector DBs'],
    categoryBadge: 'National Track 05',
    badgeVariant: 'pink',
    icon: 'trophy',
  },
];

export default TRACKS_DATA;
