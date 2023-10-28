const UpperMenu = ({ handleChangeMode, countDown }) => {

  return (
    <div className="UpperMenu">
      <div className="counter">{countDown}s</div>
      <div className="counter-modes">
        <div className="counter-mode" id={15} onClick={handleChangeMode}>
          15s
        </div>
        <div className="counter-mode" id={30} onClick={handleChangeMode}>
          30S
        </div>
        <div className="counter-mode" id={60} onClick={handleChangeMode}>
          60S
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
