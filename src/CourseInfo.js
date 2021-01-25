import React from 'react';

const CurseInfo = ({ id, onClickHandler, title }) => {
  const handleOnClick = () => onClickHandler({ id, type: 'REMOVE' });

  return (
    <div>
      <p>{title}</p>
      <button onClick={handleOnClick}>Delete curse</button>
    </div>
  );
};

export default CurseInfo;
