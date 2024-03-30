import { promises as fs } from 'fs';
import csv from 'csv-parser';
import type { Dog } from 'types/dog';
import { Readable } from 'stream'; // Import the Readable class

export default async function fetchDogData(dogId: string): Promise<Dog | null> {
  console.log("Parsing CSV data for every request...");
  const formattedDogId = dogId.replace(/-/g, ' ');

  const data = await fs.readFile(process.cwd() + '/data/dogs.csv', 'utf8');
  const dogs: Dog[] = [];
  
  // Convert data to a readable stream
  const readableStream = Readable.from([data]);
  
  await new Promise((resolve, reject) => {
    readableStream
      .pipe(csv())
      .on('data', (row: Dog) => {
        if (row.id === formattedDogId) {
          dogs.push(row);
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });

  // Check if any dog was found
  if (dogs.length > 0) {
    return dogs[0]; // Return the first matching dog
  } else {
    return null; // No matching dog found
  }
}
