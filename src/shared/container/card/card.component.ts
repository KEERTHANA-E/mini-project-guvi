import { Component, Input, OnInit } from '@angular/core';
import { ArtService } from 'src/shared/service/art/art.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/service/user/user.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  artworks: any;
  @Input() cardData: any;

  isfav!: boolean;
  constructor(private router: Router, private artService: ArtService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService: UserService) {
    console.log(this.router.url);
  }
  ngOnInit() {
    this.isfav = this.artService.isFav(this.cardData.id);
  }
  openSnackBar() {
    this.snackBar.open("add to fav", "close");
  }
  openSnackBar2() {
    this.snackBar.open("removed from fav", "close");
  }
  onClick(card: any) {
    if (this.userService.currentUser != null) {
      this.artService.addToFav(card);
      this.isfav = this.artService.isFav(card.id);
      if (this.isfav == true) this.openSnackBar();
      else this.openSnackBar2();
    }
    else{
      alert("login to add to fav");
    }
  }
  share(id:number){
    if(navigator.share){
      navigator.share({
        title:"artworks",
        text:"Check this art",
        url:`${window.location.origin}/view/${id}`
      })
    }
  }
  openDialogForShare(id: any) {
    const url = `${window.location.origin}/details/${id}`;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      height: '300px',
      data: url
    })
  }
}
