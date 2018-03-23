import React from 'react';
import { Menu, Button, Container, Card, Header } from 'semantic-ui-react';

class Static extends React.Component {
    state = {};

    rednder() {
        return (
            <div>
                <InfoHeader />
                <Container>
                    <CardList />
                </Container>
            </div>
        );
    }

}

const InfoHeader = () => {
  return (
    <Menu size='huge' inverted borderless>
      <Menu.Item position='left'>
        <CurrentSong
            songName={'In Da Club'}
        />
      </Menu.Item>
      <Menu.Item position='right'>
        <SongCount
            totalPlays={20000}
        />
      </Menu.Item>
    </Menu>
  );
}

const CurrentSong = (props) => {
  return (
    <Header as='h3' inverted>
        {`NOW PLAYING ${props.songName}`}
    </Header>
  );
}

const SongCount = (props) => {
  return (
    <Header as='h3' inverted>
        {props.totalPlays}
    </Header>
  );
}

const CardList = () => {
  return (
    <Card.Group itemsPerRow={4}>
      <SongCard
        songName={'XXX'}
        artistName={'2 Chainz'}
        imageSRC={'httt....'}
        isSongPlaying={false}
      />
      <SongCard />
      <SongCard />
      <SongCard />
    </Card.Group>
  );
}

const SongCard = (props) => {
  return (
    <Card
      image='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/80/d5/bd/80d5bde3-d604-4383-5014-d8c279008ca3/AppIcon-1x_U007emarketing-85-220-0-5.png/1200x630bb.jpg'
      header='Song Name'
      meta={props.artistName}
      extra={
          <SongState
            isPlaying={props.isSongPlaying}
          />
      }
    />
  );
}

const SongState = (props) => {
  return (
    <Button fluid icon="play" color='green'/>
  );
}

export default Static;
