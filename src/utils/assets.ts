import { getAssetById, type AssetItem } from '@/data/assets';

/**
 * Resolves an asset's public URL safely by ID.
 * Returns a fallback if not found.
 */
export function resolveAssetUrl(assetId: string, fallbackUrl = '/assets/placeholders/hero-character.svg'): string {
  const asset = getAssetById(assetId);
  return asset ? asset.filename : fallbackUrl;
}

/**
 * Returns full asset metadata.
 */
export function getAssetMeta(assetId: string): AssetItem | undefined {
  return getAssetById(assetId);
}
