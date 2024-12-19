"use client"

import { Button, CircularProgress, Container } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [hackyDebounce, setHackyDebounce] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  }

  const handleCopy = () => {
    if (summary.length < 1) {
      alert("Nothing to copy");
      return
    }

    navigator.clipboard.writeText(summary).then(() => {
      alert(`Copied to clipboard. Text length (characters): ${summary.length}`);
    }).catch(_err => {
      alert("Failed to copy text...");
    })
  }

  // TODO:
  // - Create debouncer
  // - Add api link to env
  // - sanitize input
  const generateSummary = async () => {
    setHackyDebounce(true);

    try {
      const res = await fetch('http://localhost:5000/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "payload": input })
      });

      const data = await res.json();
      setSummary(data.summary);
    } catch (e) {
      setSummary("Sorry, failed to summarize");
      console.error(`Error occured: ${e}`);
    }

    setTimeout(() => {
      setHackyDebounce(false);
    }, 5000)
  }

  return (
    <Container className="p-2 flex flex-col gap-2 h-full">
      <div className="p-2 flex flex-col gap-2 justify-center align-middle text-center rounded-lg">
        <h1 className="text-2xl font-bold">
          GistHub
        </h1>
        <p className="text-sm text-white/70">Summarize text with easeeee...</p>
      </div>
      <div className="flex flex-col align-middle justify-center h-full gap-4">
        <div className="grid grid-cols-2 gap-4">
          <textarea className="bg-gray-700 p-2 rounded-lg w-full h-full max-h-[500px]" placeholder="Enter text to be summarized." onChangeCapture={handleChange} />
          <div className="relative border border-blue-200/50 rounded-lg p-2">
            <Button variant="outlined" className="w-full" onClick={() => { handleCopy() }}>Copy to clipboard</Button>
            <div className="border-2 border-dashed border-blue-900 min-h-[250px] mt-2 p-2">
              {hackyDebounce ? <div className="w-full flex algin-middle justify-center"><CircularProgress /></div> : <p>{summary}</p>}
            </div>
          </div>
        </div>
        <Button variant="contained" className="w-full" disabled={hackyDebounce} onClick={() => { generateSummary() }}>Generate Summary</Button>
      </div>
    </Container>
  )
}
