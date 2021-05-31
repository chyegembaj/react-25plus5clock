import React from "react";
import "./style.css";
import BreakInterval from "./components/BreakInterval.js";
import SessionLength from "./components/SessionLength.js";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlaying: false,
      isPaused: false
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseSessionLength = () => {
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      };
    });
  };

  onDecreaseSessionLength = () => {
    this.setState(prevState => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      };
    });
  };

  onIncreaseBreakLength = () => {
    this.setState(prevState => {
      return {
        breakLength: prevState.breakLength + 1
      };
    });
  };

  onDecreaseBreakLength = () => {
    this.setState(prevState => {
      return {
        breakLength: prevState.breakLength - 1
      };
    });
  };

  onUpdateTimerMinute = () => {
    this.setState(prevState => {
      return {
        timerMinute: prevState.timerMinute - 1
      };
    });
  };

  onToggleInterval = isSession => {
    if (isSession) {
      this.setState({ timerMinute: this.state.sessionLength });
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      });
    }
  };

  onResetTimer = () => {
    this.setState({
      timerMinute: 25,
      breakLength: 5,
      sessionLength: 25
    });
  };

  onPlayStopTimer = isPlaying => {
    this.setState({
      isPlaying: isPlaying
    });
  };
  render() {
    return (
      <main>
        <h2>25 + 5 Clock</h2>
        <section className="interval-length-container">
          <BreakInterval
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
            isPlaying={this.state.isPlaying}
            isPaused={this.state.isPaused}
          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
            isPlaying={this.state.isPlaying}
            isPaused={this.state.isPaused}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          onResetTimer={this.onResetTimer}
          playStopTimer={this.onPlayStopTimer}
          isPlaying={this.state.isPlaying}
          isPaused={this.state.isPaused}
        />
      </main>
    );
  }
}

export default App;
