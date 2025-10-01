// Define the MajorCredits interface
export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // Brand property for nominal typing
}

// Define the MinorCredits interface
export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // Brand property for nominal typing
}

/**
 * Calculates the sum of credits for two MajorCredits subjects.
 * @param subject1 - The first MajorCredits subject.
 * @param subject2 - The second MajorCredits subject.
 * @returns A MajorCredits object with the total credits.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Calculates the sum of credits for two MinorCredits subjects.
 * @param subject1 - The first MinorCredits subject.
 * @param subject2 - The second MinorCredits subject.
 * @returns A MinorCredits object with the total credits.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;            