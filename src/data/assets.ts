/**
 * Visual Asset Manifest & Metadata Registry
 * Hello Kitty Hackathon Website Asset Pipeline
 */

export type AssetCategory =
  | 'character'
  | 'environment'
  | 'background'
  | 'decoration'
  | 'sticker'
  | 'icon'
  | 'logo'
  | 'texture'
  | 'illustration'
  | 'video'
  | 'placeholder';

export type AssetFileType = 'svg' | 'webp' | 'png' | 'avif' | 'webm';

export type SectionTarget = 'hero' | 'story' | 'tracks' | 'timeline' | 'prizes' | 'registration' | 'footer' | 'global' | 'loading';

export interface AssetItem {
  id: string;
  filename: string;
  category: AssetCategory;
  type: AssetFileType;
  source: string;
  license: string;
  intendedUse: string;
  sectionTargets: SectionTarget[];
  notes: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export const ASSETS_MANIFEST: AssetItem[] = [
  // --------------------------------------------------------------------------
  // VIDEO & ANIMATIONS
  // --------------------------------------------------------------------------
  {
    id: 'video-loading-animation',
    filename: '/assets/video/this_pic_make_it_animated_like.webm',
    category: 'video',
    type: 'webm',
    source: 'User Provided Animation Asset',
    license: 'Event Production Asset',
    intendedUse: 'Loading screen preloader and animated intro reveal',
    sectionTargets: ['loading', 'hero', 'global'],
    notes: 'High-quality animated WebM sequence for smooth loading transition',
  },

  // --------------------------------------------------------------------------
  // LOGOS
  // --------------------------------------------------------------------------
  {
    id: 'logo-primary',
    filename: '/assets/logos/hack-the-future-logo.svg',
    category: 'logo',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Proprietary / Project Hackathon',
    intendedUse: 'Header navigation, hero branding, footer',
    sectionTargets: ['global', 'hero', 'footer'],
    notes: 'Vector mark combining iconic Hello Kitty bow and modern geometric type',
    dimensions: { width: 320, height: 80 },
  },

  // --------------------------------------------------------------------------
  // CHARACTERS & PLACEHOLDERS
  // --------------------------------------------------------------------------
  {
    id: 'character-kitty-hero',
    filename: '/assets/characters/kitty-hero-placeholder.svg',
    category: 'character',
    type: 'svg',
    source: 'Architectural Drop-in Placeholder',
    license: 'Custom Placeholder (Requires official Sanrio asset for final art)',
    intendedUse: 'Hero main visual focal point',
    sectionTargets: ['hero'],
    notes: 'Architectural slot ready for 800x960 transparent WebP hero character pose',
    dimensions: { width: 400, height: 480 },
  },
  {
    id: 'character-kitty-coding',
    filename: '/assets/characters/kitty-coding-placeholder.svg',
    category: 'character',
    type: 'svg',
    source: 'Architectural Drop-in Placeholder',
    license: 'Custom Placeholder (Requires official Sanrio asset for final art)',
    intendedUse: 'Tracks / Hackathon Building section',
    sectionTargets: ['story', 'tracks'],
    notes: 'Architectural slot ready for Hello Kitty at laptop artwork',
    dimensions: { width: 400, height: 480 },
  },
  {
    id: 'character-kitty-celebration',
    filename: '/assets/characters/kitty-celebration-placeholder.svg',
    category: 'character',
    type: 'svg',
    source: 'Architectural Drop-in Placeholder',
    license: 'Custom Placeholder (Requires official Sanrio asset for final art)',
    intendedUse: 'Prizes & Registration celebration',
    sectionTargets: ['prizes', 'registration'],
    notes: 'Architectural slot ready for trophy celebration artwork',
    dimensions: { width: 400, height: 480 },
  },

  // --------------------------------------------------------------------------
  // DECORATIONS & MOTIFS
  // --------------------------------------------------------------------------
  {
    id: 'dec-red-bow',
    filename: '/assets/decorations/red-bow.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Sanrio-inspired Project Motif (CC-BY 4.0 compatible vector)',
    intendedUse: 'Floating hero decoration, badge accent, card kicker',
    sectionTargets: ['hero', 'story', 'registration', 'global'],
    notes: 'Crisp vector Hello Kitty red bow with ink outline and highlights',
    dimensions: { width: 120, height: 90 },
  },
  {
    id: 'dec-pink-bow',
    filename: '/assets/decorations/pink-bow.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Sanrio-inspired Project Motif',
    intendedUse: 'Soft blossom decorative accents across cards',
    sectionTargets: ['tracks', 'story'],
    notes: 'Blossom pink variant with highlight gradient',
    dimensions: { width: 120, height: 90 },
  },
  {
    id: 'dec-sparkle-star',
    filename: '/assets/decorations/sparkle-star.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Motion sparkle effects, particle parallax, badge icon',
    sectionTargets: ['hero', 'prizes', 'global'],
    notes: '4-point kawaii sparkle star in warm gold yellow',
    dimensions: { width: 100, height: 100 },
  },
  {
    id: 'dec-kawaii-flower',
    filename: '/assets/decorations/kawaii-flower.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Garden background accents, environment layer',
    sectionTargets: ['story', 'footer'],
    notes: 'Classic 5-petal white and yellow flower',
    dimensions: { width: 100, height: 100 },
  },
  {
    id: 'dec-kawaii-heart',
    filename: '/assets/decorations/kawaii-heart.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Floating community accents, footer badge',
    sectionTargets: ['registration', 'footer', 'global'],
    notes: 'Vibrant pink heart with gloss reflection',
    dimensions: { width: 100, height: 100 },
  },
  {
    id: 'dec-cute-apple',
    filename: '/assets/decorations/cute-apple.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Sanrio lore reference asset (Public Domain Vector)',
    intendedUse: 'Story section: Height & Weight lore cards',
    sectionTargets: ['story'],
    notes: 'Hello Kitty is 5 apples tall and weighs 3 apples',
    dimensions: { width: 100, height: 110 },
  },
  {
    id: 'dec-cute-strawberry',
    filename: '/assets/decorations/cute-strawberry.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Story & tracks kawaii decorative motif',
    sectionTargets: ['story', 'tracks'],
    notes: 'Crisp vector strawberry with yellow seeds and green leaves',
    dimensions: { width: 100, height: 110 },
  },
  {
    id: 'dec-candy-sweet',
    filename: '/assets/decorations/candy-sweet.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Swag & prizes section floating sweets',
    sectionTargets: ['prizes'],
    notes: 'Wrapped candy with tricolor stripes',
    dimensions: { width: 120, height: 70 },
  },
  {
    id: 'dec-ribbon-streamer',
    filename: '/assets/decorations/ribbon-streamer.svg',
    category: 'decoration',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Celebration header and registration banner',
    sectionTargets: ['registration', 'hero'],
    notes: 'Dynamic wave ribbon in electric pink',
    dimensions: { width: 200, height: 60 },
  },

  // --------------------------------------------------------------------------
  // ENVIRONMENTS
  // --------------------------------------------------------------------------
  {
    id: 'env-cloud-fluffy-large',
    filename: '/assets/environments/cloud-fluffy-large.svg',
    category: 'environment',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Hero parallax background cloud element',
    sectionTargets: ['hero', 'story'],
    notes: 'Large fluffy cloud with 4.5px ink outline and warm interior',
    dimensions: { width: 240, height: 130 },
  },
  {
    id: 'env-cloud-fluffy-small',
    filename: '/assets/environments/cloud-fluffy-small.svg',
    category: 'environment',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Floating secondary clouds across sections',
    sectionTargets: ['hero', 'timeline', 'registration'],
    notes: 'Small floating cloud with stroke',
    dimensions: { width: 140, height: 80 },
  },
  {
    id: 'env-cloud-hero-layer',
    filename: '/assets/environments/cloud-hero-layer.svg',
    category: 'environment',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Hero section horizon transition divider',
    sectionTargets: ['hero'],
    notes: 'Full-width 1440px wide organic cloud baseline',
    dimensions: { width: 1440, height: 200 },
  },
  {
    id: 'env-hill-landscape',
    filename: '/assets/environments/hill-landscape.svg',
    category: 'environment',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Story & garden environment background backdrop',
    sectionTargets: ['story'],
    notes: 'Two-tier rolling green hills with graphic outlines',
    dimensions: { width: 1440, height: 280 },
  },
  {
    id: 'env-kawaii-house',
    filename: '/assets/environments/kawaii-house.svg',
    category: 'environment',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Sanrio-inspired architectural illustration',
    intendedUse: 'Story section: London hometown / cottage setting',
    sectionTargets: ['story'],
    notes: 'Iconic red roofed cottage with chimney, round window and blue door',
    dimensions: { width: 200, height: 180 },
  },
  {
    id: 'env-garden-fence',
    filename: '/assets/environments/garden-fence.svg',
    category: 'environment',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Garden foreground divider in story section',
    sectionTargets: ['story'],
    notes: 'White picket fence with warm cream crossbars',
    dimensions: { width: 240, height: 80 },
  },

  // --------------------------------------------------------------------------
  // STICKERS
  // --------------------------------------------------------------------------
  {
    id: 'sticker-code-cute',
    filename: '/assets/stickers/sticker-code-cute.svg',
    category: 'sticker',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Project Proprietary Asset',
    intendedUse: 'Hero floating badge, CTA header',
    sectionTargets: ['hero', 'tracks'],
    notes: 'Sticker with code brackets and bold pink typography',
    dimensions: { width: 160, height: 80 },
  },
  {
    id: 'sticker-sanrio-vibe',
    filename: '/assets/stickers/sticker-sanrio-vibe.svg',
    category: 'sticker',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Project Proprietary Asset',
    intendedUse: 'Editorial verification badge',
    sectionTargets: ['hero', 'story'],
    notes: 'Yellow sticker badge with CERTIFIED KAWAII FUTURE TECH',
    dimensions: { width: 160, height: 80 },
  },
  {
    id: 'sticker-prizes',
    filename: '/assets/stickers/sticker-prizes.svg',
    category: 'sticker',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Project Proprietary Asset',
    intendedUse: 'Prize pool highlight starburst badge',
    sectionTargets: ['prizes', 'hero'],
    notes: 'Circular starburst sticker: $50K+ PRIZES',
    dimensions: { width: 140, height: 140 },
  },
  {
    id: 'sticker-hackathon-2026',
    filename: '/assets/stickers/sticker-hackathon-2026.svg',
    category: 'sticker',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Project Proprietary Asset',
    intendedUse: 'Date & Location badge',
    sectionTargets: ['hero', 'timeline'],
    notes: 'Blue sticker badge with OCTOBER 15-17 TOKYO + HYBRID',
    dimensions: { width: 160, height: 80 },
  },
  {
    id: 'sticker-heart-terminal',
    filename: '/assets/stickers/sticker-heart-terminal.svg',
    category: 'sticker',
    type: 'svg',
    source: 'Custom Project Vector Asset',
    license: 'Project Proprietary Asset',
    intendedUse: 'Code & Dev section sticker',
    sectionTargets: ['tracks', 'story'],
    notes: 'Heart-shaped terminal window running kawaii.run()',
    dimensions: { width: 120, height: 110 },
  },

  // --------------------------------------------------------------------------
  // TEXTURES
  // --------------------------------------------------------------------------
  {
    id: 'tex-grid-paper',
    filename: '/assets/textures/grid-paper-pattern.svg',
    category: 'texture',
    type: 'svg',
    source: 'Custom Project Vector Pattern',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Editorial grid backdrop for cards and tracks',
    sectionTargets: ['tracks', 'timeline'],
    notes: '32px subtle grid paper pattern',
  },
  {
    id: 'tex-subtle-dots',
    filename: '/assets/textures/subtle-dots-pattern.svg',
    category: 'texture',
    type: 'svg',
    source: 'Custom Project Vector Pattern',
    license: 'Public Domain / Project Vector',
    intendedUse: 'Kawaii polka dots background texture',
    sectionTargets: ['story', 'hero'],
    notes: '24px subtle polka dots pattern',
  },

  // --------------------------------------------------------------------------
  // ICONS
  // --------------------------------------------------------------------------
  {
    id: 'icon-trophy',
    filename: '/assets/icons/icon-trophy.svg',
    category: 'icon',
    type: 'svg',
    source: 'Lucide/Feather adapted vector',
    license: 'MIT License',
    intendedUse: 'Prizes and awards track',
    sectionTargets: ['prizes', 'tracks'],
    notes: 'Crisp 2.5px stroke trophy icon',
  },
  {
    id: 'icon-users',
    filename: '/assets/icons/icon-users.svg',
    category: 'icon',
    type: 'svg',
    source: 'Lucide/Feather adapted vector',
    license: 'MIT License',
    intendedUse: 'Team building and community tracks',
    sectionTargets: ['story', 'registration'],
    notes: 'Community users group icon',
  },
  {
    id: 'icon-discord',
    filename: '/assets/icons/icon-discord.svg',
    category: 'icon',
    type: 'svg',
    source: 'Official Vector Mark',
    license: 'Brand Trademark (Editorial / Fair Use)',
    intendedUse: 'Discord community join links',
    sectionTargets: ['registration', 'footer'],
    notes: 'Standard Discord logo icon',
  },
  {
    id: 'icon-github',
    filename: '/assets/icons/icon-github.svg',
    category: 'icon',
    type: 'svg',
    source: 'Official Vector Mark',
    license: 'MIT / Brand Trademark',
    intendedUse: 'GitHub submission & code repo links',
    sectionTargets: ['registration', 'footer'],
    notes: 'Standard GitHub Octocat mark',
  },
];

/**
 * Lookup helper: Get single asset by unique ID
 */
export function getAssetById(id: string): AssetItem | undefined {
  return ASSETS_MANIFEST.find((item) => item.id === id);
}

/**
 * Lookup helper: Get all assets in a category
 */
export function getAssetsByCategory(category: AssetCategory): AssetItem[] {
  return ASSETS_MANIFEST.filter((item) => item.category === category);
}

/**
 * Lookup helper: Get all assets planned for a specific website section
 */
export function getAssetsForSection(section: SectionTarget): AssetItem[] {
  return ASSETS_MANIFEST.filter(
    (item) => item.sectionTargets.includes(section) || item.sectionTargets.includes('global')
  );
}

export default ASSETS_MANIFEST;
