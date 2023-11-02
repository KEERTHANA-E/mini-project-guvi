import { Component } from '@angular/core';
import { ArtService } from 'src/shared/service/art/art.service';
import { UserService } from 'src/shared/service/user/user.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent {
  artWorks: any[] = [];
  constructor(private artService: ArtService, private userService: UserService) {
    if (this.userService.currentUser != null) {
      this.artWorks = this.artService.getFavList();
    }
  }
}
