import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
  };
};



import { useState } from 'react';
import { useCounter } from '../hooks';

// const heavyStuff = (iterationNumber = 100) => {
//   for (let i = 0; i < iterationNumber; i++) {
//     console.log('ahi vamos...');
//   }
//   return `${iterationNumber} iteraciones realizadas`;
// };

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      {/* <h4>{heavyStuff(500)}</h4> */}
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
