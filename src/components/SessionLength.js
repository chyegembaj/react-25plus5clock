import React from "react";

const SessionLength = props => {
  const increaseSession = () => {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  };

  const decreaseSession = () => {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  };
  return (
    <section>
      <h4 id="session-label">Session Length</h4>
      <section className="interval-container">
        <button id="session-decrement" onClick={decreaseSession}>
          Down
        </button>
        <p id="session-length" className="interval-length">
          {props.sessionLength}
        </p>
        <button id="session-increment" onClick={increaseSession}>
          Up
        </button>
      </section>
    </section>
  );
};

export default SessionLength;
