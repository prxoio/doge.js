// app/api/dogs/[id]/route.ts
import parseCsv from 'lib/parseCsv';
import type { Dog } from 'types/dog';
let cache: Dog[] | null = null;
export async function fetchDogData(dogId: string): Promise<Dog | null> {
    if (cache === null) {
      console.log('Loading CSV data into cache...');
      cache = await parseCsv('data/dogs.csv'); // Make sure the path is correct
    }
  
    const formattedDogId = dogId.replace(/-/g, ' ');
    return cache.find((dog) => dog.id === formattedDogId) || null;
  }
  