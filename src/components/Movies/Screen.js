import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Screen({ addScreen, editScreen, listScreen }) {
  const screens = {
    edit: 1,
    add: 2,
    list: 3,
  };

  const [editParams, setEditParams] = useState({
    id: null,
    value: "",
  });

  const [screen, setScreen] = useState(3);

  const [tvShows, setTvShows] = useState([]);

  // _________________________________

  const setScreenAdd = () => {
    setScreen(screens.add);
  };

  const setScreenEdit = (tvshow) => {
    setEditParams({ id: tvshow.id, value: tvshow.value });

    setScreen(screens.edit);
  };

  const setScreenList = () => {
    setScreen(screens.list);
  };

  // _________________________________

  const addMovie = (movie) => {
    const newList = [movie, ...tvShows];

    setTvShows(newList);

    setScreen(screens.list);
  };

  const updateMovie = (updatedMovie) => {
    setTvShows((prev) =>
      prev.map((item) => (item.id === updatedMovie.id ? updatedMovie : item))
    );

    setScreen(screens.list);
  };

  // _________________________________

  const removeTvshow = (id) => {
    const removedArr = [...tvShows].filter((tvshow) => tvshow.id !== id);

    setTvShows(removedArr);
  };

  if (screen === screens.edit) {
    return (
      <>
        {" "}
        <Form onSubmit={updateMovie} edit={editParams} Cancel={setScreenList} />{" "}
      </>
    );
  }

  if (screen === screens.add) {
    return (
      <>
        {" "}
        <Form onSubmit={addMovie} Cancel={setScreenList} />{" "}
      </>
    );
  }

  return (
    <>
      <h1>My top expected shows:</h1>
      <button onClick={setScreenAdd} className="button-add">
        Add
      </button>

      <List
        tvShows={tvShows}
        removeTvShows={removeTvshow}
        updateTvShows={setScreenEdit}
      />
    </>
  );
}

export default Screen;
