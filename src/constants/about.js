// Re-export master data from asyuraData.js so older imports that reference
// `ABOUT_CONTENT` or default exports from `@/constants/about` keep working.

import { asyuraData } from './asyuraData';

export const ABOUT_CONTENT = asyuraData;
export default asyuraData;
