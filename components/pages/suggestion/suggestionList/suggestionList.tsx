import { Suggestions } from "@/apis/suggestion/types";
import SuggestionCard from "../suggestionCard/suggestionCard";

export default function SuggestionList({ suggestions }: { suggestions: Suggestions }) {
  return (
    <div className="max-h-[500px] overflow-y-auto">
      <div className="pr-2">
        {suggestions.suggestion_list.map((suggestion) => (
          <SuggestionCard key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
}
