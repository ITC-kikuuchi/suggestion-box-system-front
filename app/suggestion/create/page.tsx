"use client";

import { Button, Checkbox, FormControlLabel, FormGroup, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const ReactSimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function createSuggestionPage() {

  const router = useRouter();
  const cancelButtonClick = () => {
    router.push('/suggestion');
  };

  return (
    <div className="flex justify-center items-center mt-12 w-full">
      <div className="flex flex-col max-w-[950px] mb-12 w-full bg-white items-center">
        <Typography
          variant="h5"
          className="mt-10"
          sx={{ fontWeight: "bold", width: "700px" }}
        >
          タイトル
        </Typography>
        <TextField
          className="mt-3"
          sx={{ width: "700px" }}
          id="outlined-basic"
          label="タイトルを入力してください"
          variant="outlined"
        />
        <Typography
          variant="h5"
          className="mt-6"
          sx={{ fontWeight: "bold", width: "700px" }}
        >
          詳細
        </Typography>
        <TextareaAutosize minRows={15} className="mt-3" style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          padding: "12px",
          width: "700px",
          border: "1px solid #C4C4C4",
          borderRadius: "4px",
        }} placeholder="意見を入力してください" />

        <Typography
          variant="h5"
          className="mt-6"
          sx={{ fontWeight: "bold", width: "700px" }}
        >
          カテゴリ
        </Typography>
        <FormGroup row sx={{ width: "700px" }}>
          <FormControlLabel control={<Checkbox />} label="社内環境" />
          <FormControlLabel control={<Checkbox />} label="業務改善" />
          <FormControlLabel control={<Checkbox />} label="福利厚生" />
          <FormControlLabel control={<Checkbox />} label="提案" />
        </FormGroup>

        <div className="flex justify-center gap-16 mt-12 mb-8 w-full" style={{ maxWidth: "700px" }}>
          <Button variant="contained" className="w-48 bg-white text-black" onClick={cancelButtonClick}>
            キャンセル
          </Button>
          <Button variant="contained" className="w-48 bg-neutral-500">
            投稿
          </Button>
        </div>
      </div>
    </div>
  );
}
