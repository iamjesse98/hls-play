import React, { useState, useEffect } from "react";
import ReactHLS from "react-hls-player";
import { Label, Input } from "@rebass/forms";
import { Box } from "rebass";
import "./styles.css";

function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }

  return true;
}

export default () => {
  const [vidUrl, setVidUrl] = useState("");
  const [name, setName] = useState("untitled");

  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="App">
      {isValidUrl(vidUrl) && <ReactHLS url={vidUrl} />}
      <Box>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="url">url</Label>
        <Input
          id="url"
          name="url"
          type="url"
          placeholder="URL"
          value={vidUrl}
          onChange={e => setVidUrl(e.target.value)}
        />
      </Box>
    </div>
  );
};
