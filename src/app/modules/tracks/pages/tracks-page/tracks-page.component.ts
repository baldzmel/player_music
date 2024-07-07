import { Component } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTrackList = [
   
  ]

  constructor() {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    //console.log(data)
    this.mockTrackList = data
  }

}
