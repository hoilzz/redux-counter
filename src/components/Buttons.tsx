import * as React from 'react';

import './Buttons.css';

interface IProps {
  onCreate(): void;
  onRemove(): void;
}

const Buttons: React.StatelessComponent<IProps> = ({ onCreate, onRemove }) => {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={onCreate}>
        생성
      </div>
      <div className="btn remove" onClick={onRemove}>
        제거
      </div>
    </div>
  );
};

export default Buttons;
