import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffectOnce } from '../hooks/useEffectOnce';
import {
  bugsLoaded,
  getBugList,
  getPageNumber,
  getPageSize,
} from '../store/features/commonSlice';
import Card from './card';
import './cards.scss';

interface ICardsProps {}

const Cards: React.FC<ICardsProps> = () => {
  const [index, setIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const pageNumber = useSelector(getPageNumber);
  const pageSize = useSelector(getPageSize);
  const bugs = useSelector(getBugList);

  useEffectOnce(() => {
    dispatch(bugsLoaded());
  });

  const handleButtonClick = () => {
    setIndex(index + 1);
  };

  const handleMoreBugsClick = () => {
    dispatch(bugsLoaded({ pageNumber: pageNumber + 1, pageSize }));
  };

  return (
    <>
      <div className="pages-loaded">{`Pages loaded: ${pageNumber}`}</div>
      <p>Index: {index}</p>
      <p>
        <button onClick={handleButtonClick}>Increment</button>
      </p>
      <hr />
      <div className="bug-row">
        {bugs.map((bug) => (
          <Card key={bug.id} bug={bug} />
        ))}
      </div>
      <div className="bug-row">
        <button type="button" onClick={handleMoreBugsClick}>
          more bugs...
        </button>
      </div>
    </>
  );
};

export default Cards;
