import { Suggestions } from "@/apis/suggestion/types";
import SuggestionCard from "../suggestionCard/suggestionCard";

export default function SuggestionList({ suggestions }: { suggestions: Suggestions }) {
  return (
    <div>
      {suggestions.suggestion_list.map((suggestion) => (
        <SuggestionCard key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
}
