import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  projectRes: any;
  updatedData:any={};
  userData:any;
  projectListData:any[] = []
  id: any='651ffbe565d01d087be5854e';
  title: any;
projectData: any;
  constructor(private http: HttpClient, private authservice: AuthService, private router: Router){
    this.fetchData();
  }

ngOnInit() {
  this.fetchData();
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
  this.router.navigate(['/dashboard/editproj'],{
    queryParams:{
      id:id
    }
  })}



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
deleteProject(projectid: any) {
  this.authservice.deleteproject(projectid).subscribe((res:any)=>{
 this.projectRes = res || {};


  console.log(this.projectRes);

  if (this.projectRes["message"] == "success") {
    alert("Deleted successfully");
    this.fetchData();
    }else{
      alert("error deleting post");

   }
 })
 

}


}
