import { Injectable } from "@angular/core";
import { ArtService } from "../service/art/art.service";
import { ToastrService } from "ngx-toastr";
@Injectable()
export class FavListValidator {
    constructor(private artService: ArtService, private toastr: ToastrService) {

    }
    isValid(id: any): boolean {
        return this.artService.isFav(id);
    }
    showSuccess() {
        // this.toastr.success('Hello world!', 'Toastr fun!');
    }
    showError(){
        this.toastr.error('add to fav list to see the art','404 not found');
    }
}
