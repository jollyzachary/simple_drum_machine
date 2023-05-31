import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
    };
  }

  handleClick = (displayText) => {
    this.setState({ displayText });
  };

  handleKeyPress = (e) => {
    const drumPad = e.key.toUpperCase();
    const audio = document.getElementById(drumPad);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      this.setState({ displayText: audio.parentNode.id });
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
  return (
    <div id="drum-machine">
      <div id="display">{this.state.displayText}</div>
      <div className="drum-pads">
        <div className="drum-pad" id="Heater-1" onClick={() => this.handleClick('Heater-1')}>
          Q
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        </div>
        <div className="drum-pad" id="Heater-2" onClick={() => this.handleClick('Heater-2')}>
          W
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
        </div>
        <div className="drum-pad" id="Heater-3" onClick={() => this.handleClick('Heater-3')}>
          E
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
        </div>
        <div className="drum-pad" id="Heater-4_1" onClick={() => this.handleClick('Heater-4_1')}>
          A
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
        </div>
        <div className="drum-pad" id="Heater-6" onClick={() => this.handleClick('Heater-6')}>
          S
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
        </div>
        <div className="drum-pad" id="Dsc_Oh" onClick={() => this.handleClick('Dsc_Oh')}>
          Z
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
        </div>
        <div className="drum-pad" id="Kick_n_Hat" onClick={() => this.handleClick('Kick_n_Hat')}>
          X
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
        </div>
        <div className="drum-pad" id="RP4_KICK_1" onClick={() => this.handleClick('RP4_KICK_1')}>
          C
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
        </div>
      </div>
    </div>
  );
}

}

ReactDOM.render(<DrumMachine />, document.getElementById('app'));
