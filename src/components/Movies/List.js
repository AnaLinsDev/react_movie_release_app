import React from "react";
import MovieLine from "./MovieLine";

const List = ({ tvShows, removeTvShows, updateTvShows }) => {
  return tvShows.map((tvshow, index) => (
      <MovieLine
        key={index}
        index={index}
        tvshow={tvshow}
        removeTvShows={removeTvShows}
        updateTvShows={updateTvShows}
      />
  ));
};

export default List;
