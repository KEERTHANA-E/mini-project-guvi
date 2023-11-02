import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
interface art {
  card: any,
  isFav: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ArtService implements OnInit {

  constructor(private http: HttpClient, private userService: UserService) {

  }
  ngOnInit(): void {
  }

  dataLoaded = false;
  GetDataLoaded() {
    return this.dataLoaded;
  }
  getApiData(page: number, limit: number): any {
    const url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;
    this.dataLoaded = false;
    return this.http.get(url);
  }
  getDataById(id: string) {
    const url = `https://api.artic.edu/api/v1/artworks/${id}`;
    this.dataLoaded = false;
    return this.http.get(url);
  }
  getSearchResult(val: any, page: number, limit: number) {
    if (val.query == "") {
      return this.getApiData(page, limit);
    }
    else {
      const url = `https://api.artic.edu/api/v1/artworks/search?fields=image_id,id,artist_display,date_display,thumbnail,title&q=${val}&page=${page}&limit=${limit}`;
      console.log("url", url);
      // https://api.artic.edu/api/v1/artworks/search?fields=image_id&q=cats&page=1&limit=4
      return this.http.get(url);
    }
  }
  getFavList(){
    if(this.userService.currentUser!=null){
      const favList = this.userService.currentUser?.favList;
      return favList;
    }
    else{
      return [];
    }
  }
  addToFav(card: any) {
    if (this.userService.currentUser != null) {
      let favList = this.userService.currentUser?.favList;
      const index = favList.findIndex(c => c.id === card.id);
      console.log(card, "data");
      if (index === -1) {
        favList.push(card);
      } else {
        favList.splice(index, 1);
      }
      localStorage.setItem('user',JSON.stringify(this.userService.currentUser));
    }
    else{
      alert("login to access your favorites");
    }

  }
  isFav(id: any) {
    if (this.userService.currentUser != null) {
      let favList = this.userService.currentUser?.favList;
      const index = favList.findIndex(c => c.id === id);
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    }
    else{
      return false;
    }
  }
}
