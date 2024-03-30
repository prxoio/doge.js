import parseCsv from "lib/parseCsv";
import type { Dog } from "types/dog";

export async function fetchDogData(dogId: string): Promise<Dog | null> {
  console.log("Parsing CSV data for every request...");
  const dogs: Dog[] = await parseCsv("data/dogs.csv"); // Make sure the path is correct

  const formattedDogId = dogId.replace(/-/g, " ");
  return dogs.find((dog) => dog.id === formattedDogId) || null;
}
