import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent {
  updatedData = { image: '', category: '', title:'', desc:'' };
 editData : any
 blogid:any
  blogRes:any;

  constructor(private authService: AuthService, private router: Router, private routing: ActivatedRoute) {
    // console.log("vvvvv",this.routing.queryParams.get('id'))
    // let data = this.authService.singleBlog(this.routing.queryParams).subscribe((res:any)=>{ 
    //   console.log("vvvvv",res)
    // })
  }
ngOnInit(){
  this.routing.queryParams.subscribe(params => {
    this.blogid = params['id']
    this.authService.singleBlog(params['id']).subscribe((res:any)=>{ 
      this.updatedData.title = res?.data?.title
      this.updatedData.category = res?.data?.category
      this.updatedData.desc = res?.data?.desc
      this.updatedData.image = res?.data?.image
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
 editBlogPost() {
  this.authService.editBlog(this.blogid,this.updatedData).subscribe((res:any)=>{
 this.blogRes = res || {};
   if (this.blogRes["message"]) {
    alert(this.blogRes["message"])
     this.router.navigate(['/dashboard/blog']);
   }else{

   }
 })

}
}
