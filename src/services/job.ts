import { Card } from "@/types/card.type";

export function getJobData(url: string): Promise<Card[]> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return reject(
            new Error(`Error: ${response.status} - ${response.statusText}`)
          );
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error(`Request failed: ${error.message}`));
      });
  });
}
