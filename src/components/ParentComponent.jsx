import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardList/CardList';

class ParentComponent extends Component {

  updateCurrentSong = (song) => {
    console.log(song);
  }

  updateSongCount = () => {
    console.log('song count +1');
  }

  updateSongState = (songClicked) => {
    console.log(songClicked);
  }

  render() {
    console.log('PARENT COMPONENT PROPS', this.props);
    const { currentSong, songCount, songs } = this.props;
    return (
      <div>
        <InfoHeader
          currentSong={currentSong}
          songCount={songCount}
        />
        <Container>
          <CardList
            songs={songs}
            updateCurrentSong={this.updateCurrentSong}
            updateSongCount={this.updateSongCount}
            updateSongState={this.updateSongState}
          />
        </Container>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('GLOBAL STATE', state);
  return {
    currentSong: state.toolbar.currentSong,
    songCount: state.toolbar.songCount,
    songs: state.songs
  };
};

export default connect(mapStateToProps)(ParentComponent);
