import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService implements CanActivate  {

  constructor(private router:Router) { }
  canActivate(): any {
    if (localStorage.getItem('token')) {
      this.router.navigate(["dashboard"])
      return false
    } else {
      return true
    }
  }
}