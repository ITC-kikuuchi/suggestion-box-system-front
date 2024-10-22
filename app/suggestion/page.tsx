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
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedStatusId, setSelectedStatusId] = useState<number | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const [suggestionsResponse, categoriesResponse, statusesResponse] =
        await Promise.all([getSuggestions(), getCategories(), getStatuses()]);

      // ステータスが 200 の場合はレスポンスデータをセットし、それ以外は null をセット
      setSuggestions(
        suggestionsResponse.responseStatus === 200
          ? suggestionsResponse.responseData
          : null
      );
      setCategories(
        categoriesResponse.responseStatus === 200
          ? categoriesResponse.responseData
          : null
      );
      setStatus(
        statusesResponse.responseStatus === 200
          ? statusesResponse.responseData
          : null
      );

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

  // 選択された カテゴリID をセット
  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  // 選択された ステータスID をセット
  const handleStatusSelect = (statusId: number | null) => {
    setSelectedStatusId(statusId);
  };

  // 選択された category_id と status_id に紐づく意見を絞り込む
  const filteredSuggestions = suggestions?.suggestion_list.filter(
    (suggestion) =>
      // category_id が選択されている場合
      (selectedCategoryId
        ? suggestion.category_list.some(
          (category) => category.category_id === selectedCategoryId
        )
        : true) &&
      // status_id が選択されている場合
      (selectedStatusId ? suggestion.status_id === selectedStatusId : true)
  );

  return (
    <div className="flex justify-center mt-12 w-full relative">
      <div className="flex-item flex-col max-w-[800px] w-full">
        <div className="self-start">
          <Button variant="contained" className="w-42 mb-8 bg-neutral-500">
            意見を投稿
          </Button>
        </div>
        {/* 意見一覧表示 */}
        {filteredSuggestions ? (
          <SuggestionList
            suggestions={{ suggestion_list: filteredSuggestions }}
          />
        ) : (
          <p>データが存在しません</p>
        )}
      </div>

      {/* 絞り込み機能 */}
      <div className="absolute right-16 mt-16">
        {/* カテゴリ絞り込み */}
        {categories ? (
          <CategoryList
            categories={categories}
            onSelectCategory={handleCategorySelect}
          />
        ) : null}
        {/* ステータス絞り込み */}
        {statuses ? (
          <StatusList
            statuses={statuses}
            onSelectStatus={handleStatusSelect} />
        ) : null}
      </div>
    </div>
  );
}
