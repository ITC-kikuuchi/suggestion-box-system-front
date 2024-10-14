"use client";

import { useEffect, useState } from "react";
import { Suggestions } from "@/apis/suggestion/types";
import { Button } from "@mui/material";
import { getSuggestions } from "@/apis/suggestion/api/getSuggestions";
import SuggestionList from "@/components/pages/suggestion/suggestionList/suggestionList";

export default function SuggestionPage() {
  const [suggestions, setSuggestions] = useState<Suggestions | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const { data, status } = await getSuggestions();
      if (status === 200) {
        setSuggestions(data);
      } else {
        console.error("Error fetching suggestions:", status);
      }
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="flex justify-center mt-12 w-full">
      <div className="flex flex-col max-w-[800px] w-full mx-auto">
        <div className="self-start">
          <Button variant="contained" className="w-42 mb-8 bg-neutral-500">
            意見を投稿
          </Button>
        </div>
        <SuggestionList suggestions={suggestions} />
      </div>
    </div>
  );
}
