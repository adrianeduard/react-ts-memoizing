import { IBug } from '../services/commonService';
import './card.scss';

interface ICardProps {
  bug: IBug;
}

const Card: React.FC<ICardProps> = ({ bug }) => {
  return (
    <>
      <div className="bug-card">
        <div className="card-container">
          <p>{`Id: ${bug.id}`}</p>
          <p>{`Name: ${bug.name}`}</p>
          <p>{`Resolved: ${bug.isResolved}`}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
