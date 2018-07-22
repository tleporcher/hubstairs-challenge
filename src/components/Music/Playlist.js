import React from "react";

class Playlist extends React.Component {
  handleMusicPlay(music) {
    this.props.onPlay(music);
  }

  handleMusicRemove(music) {
    this.props.onRemove(music);
  }

  render() {
    const musicList = this.props.list.map((music, index) => {
      return (
        <li className="playlist__item" key={index}>
          <div>{music.title}</div>
          <div>
            <button onClick={() => this.handleMusicPlay(music)}>Play</button>
            <button onClick={() => this.handleMusicRemove(music)}>X</button>
          </div>
        </li>
      );
    });

    return (
      <div className="playlist">
        <h3>Playlist</h3>
        <ul className="playlist__list">{musicList}</ul>
      </div>
    );
  }
}

Playlist.defaultProps = {
  list: []
};

export default Playlist;
