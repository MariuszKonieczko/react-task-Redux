import { useState } from 'react';

const Form = ({ addHandler, courses }) => {
  const [inputData, setInputData] = useState('');

  const handleOnChange = (e) => {
    setInputData(e.target.value);
  };

  const newID =
    courses.length === 0
      ? 1
      : Math.max.apply(
          null,
          courses.map((course) => course.id)
        ) + 1;

  const handleOnClick = () => {
    if (inputData.length === 0) {
      alert('Write something');
      return;
    }
    const course = {
      id: newID,
      title: inputData,
    };
    addHandler({ type: 'ADD', course });
    setInputData('');
  };

  return (
    <>
      <input type="text" onChange={handleOnChange} value={inputData} />
      <button onClick={handleOnClick}>Add new course</button>
    </>
  );
};

export default Form;
