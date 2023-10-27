import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  projectRes: any;
  projectForm: FormGroup;
  
  updatedData:any={};
  userData:any;
  projectListData:any[] = []
  id: any='651ffbe565d01d087be5854e';
title:any;
  //formBuilder: any;

  constructor(private http: HttpClient, private authservice: AuthService, private router: Router,  private formBuilder: FormBuilder){
    this.fetchData();
  }

ngOnInit() {
  this.fetchData();
}
searchQuery: string = '';



search() {
  this.authservice.getByTitle(this.searchQuery).subscribe((res:any)=>{
    this.userData = res || {};
    console.log(this.userData);
    this.projectListData =  this.userData?.data

      
    })
}

fetchData() {

this.http.get('http://localhost:4000/project/getall').subscribe(
  (data) => {

    console.log('API Response:', data);
    
    this.projectListData = data as any[];
  },
  (error) => {
   
    console.error('API Error:', error);
  }
);
}
edit(id:any){
  this.router.navigate(['/dashboard/editproject'],{
    queryParams:{
      id:id
    }
  })}


  private buildForm(): void {
    this.projectForm = this.formBuilder.group({
      title: [''],
      url: ['', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)]],
    });
  }



// editBlogPost(blogid: any) {
//   //console.log(this.formData.password);
//   this.authservice.editBlog(blogid).subscribe((res:any)=>{
//  this.blogRes = res || {};
//   console.log(this.blogRes);

//    if (this.blogRes["message"] == "success") {
//      this.router.navigate(['/dashboard/editblog']);
    
//    }else{

//    }
//  })

// }
deleteProjectPost(projectid: any) {
  this.authservice.deleteProject(projectid).subscribe((res:any)=>{
 this.projectRes = res || {};


  console.log(this.projectRes);

  if (this.projectRes["message"] === "success") {
    alert("Deleted successfully");
    this.fetchData();
    }else{
      alert("error deleting post");

   }
 })

}


}
////