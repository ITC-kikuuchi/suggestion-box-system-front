"use client";

import { useEffect, useState } from "react";
import { Suggestions } from "@/apis/suggestion/types";
import { Categories } from "@/apis/category/types";
import { Statuses } from "@/apis/status/types";
import { Button } from "@mui/material";
import { getSuggestions } from "@/apis/suggestion/api/getSuggestions";
import { getCategories } from "@/apis/category/api/getCategories";
import { getStatuses } from "@/apis/status/api/getStatuses";
import SuggestionList from "@/components/pages/suggestion/suggestionList/suggestionList";
import CategoryList from "@/components/pages/suggestion/categoryList/categoryList";
import StatusList from "@/components/pages/suggestion/statusList/statusList";

export default function SuggestionPage() {
  const [suggestions, setSuggestions] = useState<Suggestions | null>(null);
  const [categories, setCategories] = useState<Categories | null>(null);
  const [statuses, setStatus] = useState<Statuses | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedStatusId, setSelectedStatusId] = useState<number | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const [suggestionsResponse, categoriesResponse, statusesResponse] =
        await Promise.all([getSuggestions(), getCategories(), getStatuses()]);

      // ステータスが 200 の場合はレスポンスデータをセットし、それ以外は null をセット
      setSuggestions(suggestionsResponse.responseStatus === 200 ? suggestionsResponse.responseData : null);
      setCategories(categoriesResponse.responseStatus === 200 ? categoriesResponse.responseData : null);
      setStatus(statusesResponse.responseStatus === 200 ? statusesResponse.responseData : null);

      if (suggestionsResponse.responseStatus !== 200) {
        // ステータスが　200 ではなかった場合
        console.error(
          "Error fetching suggestions:",
          suggestionsResponse.responseStatus
        );
      }
      if (categoriesResponse.responseStatus !== 200) {
        // ステータスが　200 ではなかった場合
        console.error(
          "Error fetching categories:",
          categoriesResponse.responseStatus
        );
      }
      if (statusesResponse.responseStatus !== 200) {
        // ステータスが　200 ではなかった場合
        console.error(
          "Error fetching statuses:",
          statusesResponse.responseStatus
        );
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="flex justify-center mt-12 w-full">
      <div className="flex flex-col max-w-[800px] w-full mx-auto">
        <div className="self-start">
          <Button variant="contained" className="w-42 mb-8 bg-neutral-500">
            意見を投稿
          </Button>
        </div>
        {suggestions ? <SuggestionList suggestions={suggestions} /> : <p>データが存在しません</p>}
      </div>
    </div>
  );
}
