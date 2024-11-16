"use client";

import JobCard from "@/components/card";
import Filter from "@/components/filter";
import { getJobData } from "@/services/job";
import { Card } from "@/types/card.type";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedCard = await getJobData("/data.json");
        setCards(fetchedCard);
        setFilteredCards(fetchedCard);
        setLoading(false);
      } catch (err: any) {
        setError("Something went wrong.");
      }
    };

    fetchCard();
  }, []);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((card) => {
          const searchableAttributes = [
            card.role,
            card.level,
            ...card.languages,
            ...card.tools,
          ];
          return selectedTags.every((tag) =>
            searchableAttributes.includes(tag)
          );
        })
      );
    }
  }, [selectedTags, cards]);

  const changeSelectedTags = (tag: string, isAdding?: boolean) => {
    setSelectedTags((prevTags) => {
      if (isAdding) return [...prevTags, tag];
      return prevTags.filter((item) => item !== tag);
    });
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="px-4">
      <Filter
        items={selectedTags}
        onRemoveTag={(tag: string) => changeSelectedTags(tag)}
        onRemoveAllTags={clearAllTags}
      />
      <div className="flex flex-col gap-10 md:gap-4 items-center py-12 relative">
        {loading && <div className="p-4 text-center">Loading...</div>}
        {filteredCards.length > 0 &&
          !loading &&
          filteredCards.map((item, index) => (
            <JobCard
              key={index}
              item={item}
              selectedTags={selectedTags}
              onSelectTag={(tag: string) => changeSelectedTags(tag, true)}
            />
          ))}
        {filteredCards.length === 0 && !loading && <div>No Results Found</div>}
      </div>
    </div>
  );
}
