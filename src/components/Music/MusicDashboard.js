import React from "react";
import Playlist from "./Playlist";
import Player from "./Player";
import MusicList from "./MusicList";
import MUSIC_LIST from "../../constants/MusicList.constant";
import _ from "lodash";
import "./Music.css";

class MusicDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      currentMusic: {
        title: "No title playing",
        duration_ms: 0,
        playing: false
      },
      elapsedTime: 0,
      musicList: MUSIC_LIST,
      playlist: []
    };
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.toggleMusicState = this.toggleMusicState.bind(this);
  }

  playMusic(music) {
    this.setState({
      playlist: _.uniqWith([music, ...this.state.playlist], _.isEqual),
      currentMusic: { ...music, playing: true }
    });
    this.tick();
  }

  tick() {
    const timer = setInterval(() => {
      this.setState({
        elapsedTime: this.state.elapsedTime + 1000
      });
    }, 1000);
    this.setState({
      timer
    });
  }

  addToPlaylist(music) {
    this.setState({
      playlist: _.uniqWith([...this.state.playlist, music], _.isEqual)
    });
  }

  removeFromPlaylist(music) {
    this.setState({
      playlist: this.state.playlist.filter(item => music.title !== item.title)
    });
  }

  toggleMusicState() {
    this.setState({
      currentMusic: {
        ...this.state.currentMusic,
        playing: !this.state.currentMusic.playing
      }
    });
  }

  render() {
    return (
      <div className="music">
        <h1>Music Page</h1>
        <Player
          music={this.state.currentMusic}
          elapsedTime={this.state.elapsedTime}
          onToggle={this.toggleMusicState}
        />
        <Playlist
          list={this.state.playlist}
          onPlay={this.playMusic}
          onRemove={this.removeFromPlaylist}
        />
        <MusicList
          list={this.state.musicList}
          onPlay={this.playMusic}
          onAdd={this.addToPlaylist}
        />
      </div>
    );
  }
}

export default MusicDashboard;
