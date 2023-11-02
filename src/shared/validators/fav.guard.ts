import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { FavListValidator } from '../model/fav-list-validator.model';

// @Injectable()
// export class Helper{
//   constructor(private artService : ArtService){

//   }
//   isValid(id : any) : boolean{
//     return this.artService.isFav(id);
//   }
// }
export const favGuard: CanActivateFn = (route, state) => {
  console.log("route",route.params['id']);
  console.log("state",state);
  const ans  = inject(FavListValidator).isValid(route.params['id']);
  const router = inject(Router)
  if(ans==true){
    inject(FavListValidator).showSuccess();
    return true;
  }
  else{
    console.log("not found");
    router.navigate(['']);
    inject(FavListValidator).showError();
    return false;
  }
};
