import React from "react";

const BreakInterval = props => {
  const decreaseCounter = () => {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  };

  const increaseCounter = () => {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  };
  return (
    <section>
      <h4 id="break-label">Break Length</h4>
      <section className="interval-container">
        <button id="break-decrement" onClick={decreaseCounter}>
          Down
        </button>
        <p id="break-length" className="interval-length">
          {props.breakInterval}
        </p>
        <button id="break-increment" onClick={increaseCounter}>
          Up
        </button>
      </section>
    </section>
  );
};

export default BreakInterval;
