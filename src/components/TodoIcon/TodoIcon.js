import { ReactComponent as CheckSVG } from '../../assets/svg/check.svg';
import { ReactComponent as DeleteSVG } from '../../assets/svg/delete.svg';
import './TodoIcon.css';

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

const TodoIcon = ({ type, color, onClick }) => {
  return (
    <>
      <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
      >
        {iconTypes[type](color)}
      </span>
    </>
  );
};

export { TodoIcon };
