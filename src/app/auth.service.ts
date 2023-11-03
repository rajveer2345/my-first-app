import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {
  
  constructor(public auth: ApiService, public router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(["login"])
      return false

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

  getById (id:any) : Observable<any> {

    return this.auth.request({
      path:`http://localhost:4000/contact/${id}`,
      method:"GET",
    }); 
  }
  
singleBlog(id:any){
  return this.auth.request({
    path:`http://localhost:4000/blog/${id}`,
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

  createProject(body:any) {
    return this.auth.request({
      path:`http://localhost:4000/project/add`,
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

addcontact(body: any) {
  return this.auth.request({
    path:`http://localhost:4000/contact/add`,
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

editproj(id:any,updatedData:any) {
    
  console.log("Updating user with ID:",id);
return this.auth.request({
  path:`http://localhost:4000/project/edit/${id}`,
  method:"PATCH",
  body:updatedData 
}); 
}
view(id:any,updatedData:any) {
    
return this.auth.request({
  path:`http://localhost:4000/contact/${id}`,
  method:"PATCH",
  body:updatedData 
}); 
}

singleProject(id:any){
  return this.auth.request({
    path:`http://localhost:4000/project/${id}`,
    method:"GET",
  }); }
deleteBlog(id:any) {
    
    
  return this.auth.request({
    path:`http://localhost:4000/blog/delete/${id}`,
    method:"DELETE",
  }); 
}
deleteproject(id:any) {
    
    
  return this.auth.request({
    path:`http://localhost:4000/project/delete/${id}`,
    method:"DELETE",
  }); 
}


  edit(id: any, updatedData: any) {
    console.log("Updating user with ID:", id);
    return this.auth.request({
      path: `http://localhost:4000/user/edit/${id}`,
      method: "PATCH",
      body: updatedData 
    });
  }
  updateStatus(id: any, updatedData: any) {
    let roledata={"status": updatedData};
    return this.auth.request({
      path: `http://localhost:4000/user/updateStatus/${id}`,
      method: "PATCH",
      body: roledata 
    });
  }
}
