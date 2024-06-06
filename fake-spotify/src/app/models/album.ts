import { Artist } from "./artist";
import { Track } from "./track";

export interface Album {
  name: string,
  trackList: Array<Track>,
  cover: string,
  artist: Artist
}
