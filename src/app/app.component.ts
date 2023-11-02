import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtService } from 'src/shared/service/art/art.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'minorProject';
  artworks : any;
  dataLoaded!:boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public artService : ArtService) {
    this.dataLoaded=this.artService.GetDataLoaded();
  }
  ngOnInit(): void {
    this.dataLoaded=this.artService.GetDataLoaded();
  }
}
