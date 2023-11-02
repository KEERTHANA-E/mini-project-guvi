import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtService } from 'src/shared/service/art/art.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  panelOpenState = false;
  artworks : any;
  id : string;
  constructor(private activeRoute: ActivatedRoute, private artService : ArtService){
    this.id=this.activeRoute.snapshot.params['id'];
    console.log("active",this.activeRoute);
    console.log("id",this.id);
  }
  ngOnInit(): void {
    this.getArtworks();
  }
  getArtworks(){
    this.artworks = this.artService.getDataById(this.id).subscribe((response: any) => {
      this.artworks = response.data;
      console.log(response.data);
      this.artService.dataLoaded = true;
    });
  }
}
