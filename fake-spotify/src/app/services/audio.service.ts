import { Injectable } from '@angular/core';
import NativeAudio from '@awesome-cordova-library/nativeaudio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio = new Audio();

  constructor() { }

  playAudio(trackName: string){
    this.audio.src=`../../assets/audio/${trackName}`;
    this.audio.load();
    this.audio.play();
  }

  pauseAudio(){
    this.audio.pause();
  }

  stopAudio(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume:number){
    this.audio.volume = volume;
  }
}
