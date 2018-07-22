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
      currentMusic: {
        title: "No title playing"
      },
      musicList: MUSIC_LIST,
      playlist: []
    };
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
    this.playMusic = this.playMusic.bind(this);
  }

  playMusic(music) {
    this.setState({
      playlist: _.uniqWith([music, ...this.state.playlist], _.isEqual),
      currentMusic: music
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

  render() {
    return (
      <div className="music">
        <h1>Music Page</h1>
        <Player music={this.state.currentMusic} />
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
