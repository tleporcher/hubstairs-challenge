import React from "react";

class Player extends React.Component {
  handleToggleMusicState() {
    this.props.onToggle();
  }

  millisToMinutesAndSeconds(millis) {
    const min = Math.floor(millis / 60000);
    const sec = ((millis % 60000) / 1000).toFixed(0);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  render() {
    const { music, elapsedTime } = this.props;

    return (
      <div className="player">
        <div>{music.title}</div>
        <div>
          {this.millisToMinutesAndSeconds(elapsedTime)} /{" "}
          {this.millisToMinutesAndSeconds(music.duration_ms)}
        </div>
        <div>
          <button>Prev</button>
          <button
            disabled={!music.duration_ms}
            onClick={() => this.handleToggleMusicState()}
          >
            {music.playing ? "Pause" : "Play"}
          </button>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default Player;
