import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {
  constructor(public auth: ApiService, public router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {

      this.router.navigate(['login']);
    }
  }

 
  getAllUser() {
    return this.auth.request({
      path:`http://localhost:4000/user/getall`,
      method:"GET",
    }); 
  }
///////////////////////////////////////////////////////////////
  getUserById(id:any) {
    
    
    console.log("id56",id);
    return this.auth.request({
      path:`http://localhost:4000/user/${id}`,
      method:"GET",
    }); 
  }

  ///////////////////////////////////////////////////////////////

  createBlog(body:any) {
    return this.auth.request({
      path:`http://localhost:4000/blog/add`,
      method:"POST",
      body
    }); 
  }


  /////////////////////////////////////////////
  loginCheck(body:any) {
    return this.auth.request({
      path:`http://localhost:4000/user/login`,
      method:"POST",
      body
    }); 
  
  }
  signupCheck(body:any) {
    return this.auth.request({
      path:`http://localhost:4000/user/add`,
      method:"POST",
      body
    }); 
  }


  addBlog(body: any) {
    return this.auth.request({
      path:`http://localhost:4000/blog/add`,
      method:"POST",
      body
  });
}

editBlog(id:any,updatedData:any) {
    
    console.log("Updating user with ID:",id);
  return this.auth.request({
    path:`http://localhost:4000/blog/edit/${id}`,
    method:"PATCH",
    body:updatedData 
  }); 
}
singleBlog(id:any){
  return this.auth.request({
    path:`http://localhost:4000/blog/${id}`,
    method:"GET",
  }); 
}
deleteBlog(id:any) {
    
    
  return this.auth.request({
    path:`http://localhost:4000/blog/delete/${id}`,
    method:"DELETE",
  }); 
}
  edit(id: any, updatedData: any) {
    console.log("Updating user with ID:", id);
    return this.auth.request({
      path: `http://localhost:4000/user/edit/${id}`,
      method: "PATCH",
      body: updatedData // Include the updated data in the request body
    });
  }
}
