"use client";
import JobCard from "@/components/card";
import Filter from "@/components/filter";
import { getJobData } from "@/services/job";
import { Card } from "@/types/card.type";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>(["Frontend"]);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedCard = await getJobData("/data.json");
        setCards(fetchedCard);
        setLoading(false);
      } catch (err: any) {
        setError("Something went wrong.");
      }
    };

    fetchCard();
  }, []);

  const changeSelectedTags = (tag: string, isAdding?: boolean) => {
    let array = selectedTags;
    if (isAdding) array.push(tag);
    else array = array.filter((item) => item !== tag);
    setSelectedTags(array);
  };

  return (
    <div className="px-4">
      <Filter
        items={selectedTags}
        onRemoveTag={(tag: string) => changeSelectedTags(tag)}
        onRemoveAllTags={() => setSelectedTags([])}
      />
      <div className="flex flex-col gap-10 md:gap-4 items-center py-12 relative">
        {loading && <div className="p-4 text-center">Loading...</div>}
        {cards.length > 0 &&
          !loading &&
          cards.map((item, index) => (
            <JobCard
              key={index}
              item={item}
              selectedTags={selectedTags}
              onSelectTag={(tag: string) => changeSelectedTags(tag, true)}
            />
          ))}
        {cards.length === 0 && !loading && <div>No Results Found</div>}
      </div>
    </div>
  );
}
