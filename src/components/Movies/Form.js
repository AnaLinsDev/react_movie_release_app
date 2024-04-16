import React, { useState } from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
      value: input
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='tvshow-form'>

      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            className='tvshow-input edit'
          />

          <button onClick={handleSubmit} className='tvshow-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a Show'
            value={input}
            onChange={handleChange}
            name='text'
            className='tvshow-input'
          />
          
          <button onClick={handleSubmit} className='tvshow-button'>
            Add Show
          </button>
        </>
      )}
    </form>
  );
}

export default Form;