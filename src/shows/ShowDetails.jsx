import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();
  if (!show) {
    return (
      <section className="show-details">
        <p>Select a show to learn more</p>
      </section>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList
        name={show.title}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
