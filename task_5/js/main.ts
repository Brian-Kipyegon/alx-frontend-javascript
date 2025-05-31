// Define interfaces with credits and brand

interface MajorCredits {
  credits: number;
  readonly __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  readonly __brand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'MajorCredits' };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'MinorCredits' };
}

// Example usage (optional for testing):
const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const sumMajor = sumMajorCredits(major1, major2);
console.log(`Total MajorCredits: ${sumMajor.credits}`);

const minor1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const sumMinor = sumMinorCredits(minor1, minor2);
console.log(`Total MinorCredits: ${sumMinor.credits}`);
