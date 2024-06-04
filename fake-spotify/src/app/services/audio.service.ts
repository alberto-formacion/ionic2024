import { Injectable } from '@angular/core';
import NativeAudio from '@awesome-cordova-library/nativeaudio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  preLoadAudio(){
    NativeAudio.preloadSimple(
      'song1',
      '../../assets/audio/El Reno Renardo - 03 - No Hay Huevos.mp3',
      () => {
        this.playAudio();
        console.log('success')
      },
      () => console.error('fail'),
    );
  }

  playAudio(){
    NativeAudio.play('song1',
      ()=>console.log("Estoy sonando"),
      ()=>console.log("Algo no va bien"),
      ()=>console.log("completo"));
  }

  pauseAudio(){

  }

  stopAudio(){

  }

  setVolume(volume:number){

  }
}
