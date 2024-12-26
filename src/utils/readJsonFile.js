import fs from 'fs';
import path from 'path';

export const readJsonFile = () => {
  const filePath = path.join(__dirname, 'data/gamingCatalog.json');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (parseErr) {
        reject(parseErr);
      }
    });
  });
};