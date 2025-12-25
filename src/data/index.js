// Combined medical data index
import { medicalSections as baseSections, beginnerContent } from './medicalData';
import { additionalSections } from './additionalSections';
import { moreSections } from './moreSections';
import { extraSections } from './extraSections';

// Merge all sections into one array
export const medicalSections = [
    ...baseSections,
    ...additionalSections,
    ...moreSections,
    ...extraSections
];

export { beginnerContent };
