import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ArtService } from 'src/shared/service/art/art.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit{
  artworks: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 4;
  currentPage = 1;
  TotalItems = 123203;
  isActive = true;
  constructor(public artService: ArtService) {

  }
  ngOnInit(): void {
    this.getArtworks();
  }
  getArtworks() {
    const page = this.currentPage;
    const limit = this.pageSize;
    this.isActive=true;
      this.artworks = this.artService.getApiData(page, limit).subscribe((response: any) => {
        this.artworks = response;
        this.TotalItems=response.pagination.total;
        this.artService.dataLoaded = true;
      });
  }
  onPageChange(event: any) {
    console.log("change event is called in collections page")
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getArtworks();
  }
}
