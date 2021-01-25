import './App.css';
import { useEffect, useReducer } from 'react';
import CurseInfo from './CourseInfo';
import Form from './Form';
import loading from './loading.gif';

const courses = [
  {
    id: 1,
    title: 'JavaScript',
  },
  {
    id: 2,
    title: 'HTML',
  },
  {
    id: 3,
    title: 'CSS',
  },
  {
    id: 4,
    title: 'Node.js',
  },
  {
    id: 5,
    title: 'Java',
  },
  {
    id: 6,
    title: 'PHP',
  },
];
const cursesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.course];
    case 'REMOVE':
      return state.filter((course) => course.id !== action.id);
    case 'FETCH':
      return action.data;
    default:
      throw new Error('Ooops somethings went wrong');
  }
};

const fetchAsyncData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

let LOADED = false;
const App = () => {
  const [state, dispatch] = useReducer(cursesReducer, []);

  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: 'FETCH', data: courses });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const cursesElements = state.map((course) => (
    <CurseInfo key={course.id} onClickHandler={dispatch} {...course} />
  ));

  const curses =
    cursesElements.length >= 0 && LOADED ? (
      cursesElements
    ) : (
      <img src={loading} alt="" />
    );

  const form = LOADED ? <Form addHandler={dispatch} courses={state} /> : null;

  if (cursesElements.length > 0) {
    LOADED = true;
  }

  return (
    <div>
      {form}
      {curses}
    </div>
  );
};
export default App;
