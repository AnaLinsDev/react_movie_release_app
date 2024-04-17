import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function MovieLine({ index, tvshow, removeTvShows, updateTvShows }) {
  const dateNow =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1 > 9
      ? new Date().getMonth() + 1
      : "0" + (new Date().getMonth() + 1)) +
    "-" +
    new Date().getDate();

  const dateNowNumber = new Date(dateNow);
  const dateReleaseNumber = new Date(tvshow.value.release);

  const milliLeft = dateReleaseNumber - dateNowNumber;

  const daysLeft = milliLeft > 0 ? milliLeft / (1000 * 60 * 60 * 24) : 0;

  const textDaysLeft = daysLeft === 0 ? "Is Released" : daysLeft + " Days Left ! ";

  return (
    <div>
      <div className="tvshow-row" key={index}>
        <div key={tvshow.id}>
          <div className="tvshow-text title">{tvshow.value.title}</div>

          <hr />

          <div className="tvshow-text release">{textDaysLeft}</div>
        </div>

        <div className="icons">
          <RiCloseCircleLine
            color="red"
            onClick={() => removeTvShows(tvshow.id)}
            className="delete-icon"
          />
          <TiEdit
            color="orange"
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
