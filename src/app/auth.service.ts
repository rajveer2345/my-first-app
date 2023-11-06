import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {



  // createProject(projectData: { image: string; category: string; title: string; desc: string; userId: string; url: string; type: string; }) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient , public auth: ApiService, public router: Router) {}
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
      body: updatedData 
    });
  }////


  getByTitle(title: any) {
    return this.auth.request({
      path:`http://localhost:4000/blog/search/get/${title}`,
      method:"GET",
    }); 
  }

//////////



createProject(body:any) {
  return this.auth.request({
    path:`http://localhost:4000/project/add`,
    method:"POST",
    body
  }); 
}

addProject(body: any) {
  return this.auth.request({
    path:`http://localhost:4000/project/add`,
    method:"POST",
    body
});
}


getAllProject() {
  return this.auth.request({
    path:`http://localhost:4000/project/getall`,
    method:"GET",
  }); 
}


deleteProject(id:any) {
    
    
  return this.auth.request({
    path:`http://localhost:4000/project/delete/${id}`,
    method:"DELETE",
  }); 
}


singleProject(id:any){
  return this.auth.request({
    path:`http://localhost:4000/project/${id}`,
    method:"GET",
  }); 
}



editProject(id:any,updatedData:any) {
    
  console.log("Updating user with ID:",id);
return this.auth.request({
  path:`http://localhost:4000/project/edit/${id}`,
  method:"PATCH",
  body:updatedData 
}); 
}

createEnquiry(body:any) {
  return this.auth.request({
    path:`http://localhost:4000/enquiry/add`,
    method:"POST",
    body
  }); 
}



getAllEnquiry() {
  return this.auth.request({
    path:`http://localhost:4000/enquiry/getall`,
    method:"GET",
  }); 
}



singleEnquiry(id:any){
  return this.auth.request({
    path:`http://localhost:4000/project/${id}`,
    method:"GET",
  }); 
}

////

getAll() {
  return this.auth.request({
    path:`http://localhost:4000/users/getall`,
    method:"GET",
  }); 
}

updateStatus(updatedData:any,id:any) {
  let roledata ={"status": updatedData};
  return this.auth.request({
    path:`http://localhost:4000/updateStatus/${id}`,
    method:"PATCH",
    body:roledata 

  }); 
}


  // updateStatus(username: string) {
  //   return this.http.put(`${this.apiUrl}/updateStatus/${username}`, {});
  // }

  getAllProjType() {
    return this.auth.request({
      path:`http://localhost:4000/type/getall`,
      method:"GET",
    }); 
  }
  
  
///


getType(id:any){
  return this.auth.request({
    path:`http://localhost:4000/proj/type/get/${id}`,
    method:"GET",
  }); 
}


setType(id:any){
  return this.auth.request({
    path:`http://localhost:4000/proj/type/edit/${id}`,
    method:"PATCH",
  }); 
}


createType(body:any) {
  return this.auth.request({
    path:`http://localhost:4000/type/add`,
    method:"POST",
    body
  }); 
}

deleteType(id:any) {
    
    

  return this.auth.request({
    path:`http://localhost:4000/type/delete/${id}`,
    method:"DELETE",
  }); 
}


  editType(id: any, updatedData: any) {
    console.log("Updating user with ID:", id);
    return this.auth.request({
      path: `http://localhost:4000/type/edit/${id}`,
      method: "PATCH", 
      body: updatedData 
    });
  }


  
singleType(id:any){
  return this.auth.request({
    path:`http://localhost:4000/type/get/${id}`,
    method:"GET",
  }); 
}

sendEmail(address,subject,message,name) {
  let addressArray = []
  addressArray.push(address)
  return this.auth.request({
    path:`http://localhost:4000/sendEmail`,
    method:"POST",
    body:{address:addressArray, subject: subject, message: message, name: name}
  }); 
}


getByEmail(email: any) {
  return this.auth.request({
    path:`http://localhost:4000/user/search/get/${email}`,
    method:"GET",
  }); 
}


}



