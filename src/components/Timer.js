import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaPlay,
  FaPause,
  FaRedo
} from "react-icons/fa";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
      isPaused: false,
      isPlaying: false
    };
    this.playTimer = this.playTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startAudio = this.startAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
  }

  playTimer = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    //this.props.playStopTimer(true);

    this.setState({
      intervalId: intervalId,
      isPaused: true,
      isPlaying: true
    });
  };

  startAudio = () => {
    document.getElementById("beep").play();
  };

  stopAudio = () => {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  };

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false
            });
            this.props.toggleInterval(this.state.isSession);
            this.startAudio();
          } else {
            this.setState({
              isSession: true
            });
            this.props.toggleInterval(this.state.isSession);
            this.startAudio();
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59
          });
        }

        break;
      default:
        this.setState(prevState => {
          return {
            timerSecond: prevState.timerSecond - 1
          };
        });
        break;
    }
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      isPaused: false
    });
    //this.props.playStopTimer(false);
  };
  resetTimer = () => {
    clearInterval(this.state.intervalId);
    this.stopTimer();
    this.props.onResetTimer();
    this.stopAudio();
    //this.props.playStopTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true,
      audio: null,
      intervalId: 0,
      isPaused: false,
      isPlaying: false
    });
  };

  render() {
    return (
      <section>
        <section className="timer-container">
          <h4 id="timer-label">
            {this.state.isSession === true ? "Session" : "Break"}
          </h4>
          <span id="time-left" className="timer">
            {this.props.timerMinute === 0
              ? "00"
              : this.props.timerMinute < 10
              ? "0" + this.props.timerMinute
              : this.props.timerMinute}
            :
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </section>
        <section className="timer-actions">
          <button
            id="start_stop"
            onClick={
              !this.state.isPlaying
                ? this.playTimer
                : this.state.isPaused
                ? this.stopTimer
                : this.playTimer
            }
          >
            <FaPlay />
            <FaPause />
          </button>
          <button id="reset" onClick={this.resetTimer}>
            Refresh
          </button>
          <audio
            id="beep"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          />
        </section>
      </section>
    );
  }
}

export default Timer;
