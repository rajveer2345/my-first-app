import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  getAllUser() {
    return this.request({
      path:`http://localhost:4000/user/getall`,
      method:"GET",
    }); 
  }

  getUserById(id:any) {
    console.log("id56",id);
    
    return this.request({
      path:`http://localhost:4000/user/${id}`,
      method:"GET",
    }); 
  }

  createUser(body:any) {
    return this.request({
      path:`http://localhost:4000/user/add`,
      method:"POST",
      body
    }); 
  }
  loginCheck(body:any) {
    return this.request({
      path:`http://localhost:4000/user/login`,
      method:"POST",
      body
    }); 
  
  }
  deleteblog(id:any) {
      return this.request({
      path:`http://localhost:4000/blog/delete/${id}`,
      method:"DELETE",
    }); 
  }
  editblog(id:any) {
    return this.request({
    path:`http://localhost:4000/blog/edit/${id}`,
    method:"PATCH",
  }); 
}

 
}
