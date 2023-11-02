import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtService } from 'src/shared/service/art/art.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup | any;
  artworks: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 4;
  currentPage = 1;
  TotalItems = 123203;
  isActive = true;
  constructor(public artService: ArtService, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: this.fb.control(''),
    })
    this.searchForm.get('query').valueChanges.subscribe((val: any) => {
      this.getArtworks();
    }); 
    this.getArtworks();
  }
  getArtworks() {
    const page = this.currentPage;
    const limit = this.pageSize;
    const query = this.searchForm.get('query').value;
    console.log(`Page: ${page}, Limit: ${limit}`);
    if (query == '') {
      this.isActive=true;
      this.artworks = this.artService.getApiData(page, limit).subscribe((response: any) => {
        this.artworks = response;
        // console.log(response.data);
        this.TotalItems=response.pagination.total;
        // console.log(response.pagination.total);
        this.artService.dataLoaded = true;
      });

    }
    else {
      this.isActive=false;
      this.artworks = this.artService.getSearchResult(query, page, limit).subscribe((response: any) => {
        this.artworks = response;
        this.TotalItems=response.pagination.total;
        // console.log("search result", response.data);
        this.artService.dataLoaded = true;
      });
    }
  }
  onPageChange(event: any) {
    console.log("change event is called in home page")
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getArtworks();
  }
}
