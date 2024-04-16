import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const List = ({ tvShows, removeTvShows, updateTvShows }) => {

  return tvShows.map((tvshow, index) => (
    <div
      className='tvshow-row'
      key={index}
    >
      <div key={tvshow.id} className='tvshow-text'>
        {tvshow.value}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTvShows(tvshow.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => updateTvShows({ id: tvshow.id, value: tvshow.value })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default List;