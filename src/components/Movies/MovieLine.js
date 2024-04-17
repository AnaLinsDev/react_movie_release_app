import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function MovieLine({ index, tvshow, removeTvShows, updateTvShows }) {
  
    return (
    <div>
      <div className="tvshow-row" key={index}>
        <div key={tvshow.id}>
          <div className="tvshow-text title">{tvshow.value.title}</div>

          <div className="tvshow-text release">
            Release Date: {tvshow.value.release}
          </div>

          <div></div>
        </div>

        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTvShows(tvshow.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() =>
              updateTvShows({ id: tvshow.id, value: tvshow.value })
            }
            className="edit-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieLine;
