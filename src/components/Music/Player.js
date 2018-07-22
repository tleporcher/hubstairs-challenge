import React from "react";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false
    };
  }

  toggleMusicState() {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    const { music } = this.props;

    return (
      <div className="player">
        <div>{music.title}</div>
        <div>
          <button>Prev</button>
          <button onClick={() => this.toggleMusicState()}>
            {this.state.playing ? "Pause" : "Play"}
          </button>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

Player.defaultProps = {
  music: {
    title: "No title"
  }
};

export default Player;
