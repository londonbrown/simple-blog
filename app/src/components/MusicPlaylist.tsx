import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { YOUTUBE_PLAYLIST_ID } from "../config.json";
import "../scss/components/MusicPlaylist.scss";

type MusicPlaylistProps = {
  className?: string;
};
type MusicPlaylistState = {};

export default class MusicPlaylist extends Component<
  MusicPlaylistProps,
  MusicPlaylistState
> {
  render() {
    return (
      <>
        <Card className={`music-playlist ${this.props.className}`}>
          <Card.Body className="p-0">
            <iframe
              className="music-playlist-embedded-player"
              src={`https://www.youtube.com/embed/videoseries
              ?list=${YOUTUBE_PLAYLIST_ID}`}
              frameBorder="0"
              allowFullScreen
            />
          </Card.Body>
        </Card>
      </>
    );
  }
}
