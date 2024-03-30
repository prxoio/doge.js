// lib/parseCsv.ts
import fs from 'fs';
import csv from 'csv-parser';
import { Dog } from '../types/dog';

const parseCsv = async (filePath: string): Promise<Dog[]> => {
  const data: Dog[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row: Dog) => data.push(row))
      .on('end', () => {
        resolve(data);
      });
  });
};

export default parseCsv;
