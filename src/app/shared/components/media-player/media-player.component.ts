import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: '',
    album: 'Gioli & Assia',
    name: 'BEBE (Official)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
}
