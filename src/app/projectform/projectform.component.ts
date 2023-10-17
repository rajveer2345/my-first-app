import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent {
  updatedData = { image: '', type: '', title:'', desc:'' ,url:''};
  editData : any
  projectid:any
   projectRes:any;
 
   constructor(private authService: AuthService, private router: Router, private routing: ActivatedRoute) {
     // console.log("vvvvv",this.routing.queryParams.get('id'))
     // let data = this.authService.singleBlog(this.routing.queryParams).subscribe((res:any)=>{ 
     //   console.log("vvvvv",res)
     // })
   }
 ngOnInit(){
   this.routing.queryParams.subscribe(params => {
     this.projectid = params['id']
     this.authService.singleProject(params['id']).subscribe((res:any)=>{ 
       this.updatedData.title = res?.data?.title
       this.updatedData.type = res?.data?.type
       this.updatedData.desc = res?.data?.desc
       this.updatedData.image = res?.data?.image
       this.updatedData.url = res?.data?.url
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
  editProjectPost() {
   this.authService.editProject(this.projectid,this.updatedData).subscribe((res:any)=>{
  this.projectRes = res || {};
    if (this.projectRes["message"]) {
     alert(this.projectRes["message"])
      this.router.navigate(['/dashboard/projects']);
    }else{
 
    }
  })
 
 }
}
