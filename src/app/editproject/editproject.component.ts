import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent {
 updatedData = { image: '', type: '', title:'', desc:'' ,url:'' };
 projectData = { image: '', type: '', title:'', desc:'' ,url:'' ,userId:''};
 editData : any
 projectid:any
  projectRes:any;
  typeData:any;

  constructor(private authService: AuthService, private router: Router, private routing: ActivatedRoute) {
   this.getMyType();
  }
ngOnInit(){
  this.routing.queryParams.subscribe(params => {
    this.projectid = params['id']
    this.authService.singleProject(params['id']).subscribe((res:any)=>{ 
    
      this.projectData.type = res?.data?.type
    })
  });
}
  // Define a function to add a new blog
  // addNewBlog() {
  //   this.authService.createBlog(this.blogData).subscribe(
  //     (response) => {
  //       // Handle a successful API response here.
  //       console.log('Blog added successfully:', response);
  //     },
  //     (error) => {
  //       // Handle API error here.
  //       console.error('Error adding blog:', error);
  //     }
  //   );
  // }
//   onSubmit() {
//     //console.log(this.formData.password);
//     this.authService.createBlog(this.blogData).subscribe((res:any)=>{
//      this.userData = res || [];
//      console.log(this.userData["message"]);
//      console.log(this.userData["data"]);
//      this.router.navigate(['/dashboard/blog'])

//    })
 
//  }
 editProject() {
  this.authService.editProject(this.projectid,this.updatedData).subscribe((res:any)=>{
 this.projectRes = res || {};
   if (this.projectRes["message"]) {
    alert(this.projectRes["message"])
     this.router.navigate(['/dashboard/project']);
   }else{

   }
 })

}
getMyType()
{
  this.authService.getAllProjType().subscribe((res:any)=>{
    this.typeData = res || [];
    console.log("gjh hhhh",this.typeData);
  
  })
}

}
