import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songsList: any;
  textName: any;
  showData:boolean = true;

  constructor() { }

  ngOnInit(): void {

    this.songsList =[
      {name:'Song1'},
      {name:'Song2'},
      {name:'Song3'}
    ];
  }

  toggleData()
  {
    this.showData = !this.showData;
  }

  addData()
  {
    this.songsList.push({name:this.textName});
  }
}
