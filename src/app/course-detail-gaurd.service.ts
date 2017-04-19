import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot  } from '@angular/router'

@Injectable()
export class CourseDetailGaurdService implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    console.log(route.queryParams["token"]);
    if(route.queryParams["token"]=="343254252452352sdfsadgf")
      return true;
    else{
      alert('Please login to access this route');
      return false;
    }
  }


  constructor() { }

}
