import React from "react";

class MusicList extends React.Component {
  handleMusicPlay(music) {
    this.props.onPlay(music);
  }

  handleMusicAdd(music) {
    this.props.onAdd(music);
  }

  render() {
    const musicList = this.props.list.map((music, index) => {
      return (
        <li className="music-list__item" key={index}>
          <div>{music.title}</div>
          <div>
            <button onClick={() => this.handleMusicPlay(music)}>Play</button>
            <button onClick={() => this.handleMusicAdd(music)}>+</button>
          </div>
        </li>
      );
    });

    return (
      <div className="music-list">
        <h3>Music List</h3>
        <ul className="music-list__list">{musicList}</ul>
      </div>
    );
  }
}

MusicList.defaultProps = {
  list: [],
  onPlay: () => {},
  onAdd: () => {}
};

export default MusicList;
