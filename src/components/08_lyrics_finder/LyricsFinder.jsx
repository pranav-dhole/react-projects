import { useState } from "react";
import "./lyricsFinder.css";

const LyricsFinder = () => {
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [lyrics, setLyrics] = useState("");

  const fetchLyrics = async () => {
    const res = await fetch(
      `https://api.lyrics.ovh/v1/${artistName}/${songName}`,
    );
    const data = await res.json();
    setLyrics(
      data?.lyrics?.trim() || "No Lyrics Found For Your Song, Sorry :[",
    );
  };

  return (
    <div className="lyrics-finder-container">
      <h1>Lyrics Finder</h1>

      <div className="lyrics-search-container">
        <input
          type="text"
          value={artistName}
          placeholder="Artist Name"
          onChange={(e) => setArtistName(e.target.value)}
        />
        <input
          type="text"
          value={songName}
          placeholder="Song Name"
          onChange={(e) => setSongName(e.target.value)}
        />

        <button onClick={fetchLyrics}>Search</button>
      </div>
      <p className="border"></p>
      <p className="lyrics">{lyrics}</p>
    </div>
  );
};

export default LyricsFinder;
