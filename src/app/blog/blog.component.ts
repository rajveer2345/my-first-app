import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  blogRes: any;
  updatedData:any={};
  userData:any;
  blogListData:any[] = []
  id: any='651ffbe565d01d087be5854e';
  constructor(private http: HttpClient, private authservice: AuthService, private router: Router){
    this.fetchData();
  }

ngOnInit() {
  this.fetchData();
}

fetchData() {

this.http.get('http://localhost:4000/blog/getall').subscribe(
  (data) => {

    console.log('API Response:', data);
    
    this.blogListData = data as any[];
  },
  (error) => {
   
    console.error('API Error:', error);
  }
);
}
edit(id:any){
  this.router.navigate(['/dashboard/editform'],{
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
deleteBlogPost(blogid: any) {
  this.authservice.deleteBlog(blogid).subscribe((res:any)=>{
 this.blogRes = res || {};
 this.fetchData();

  console.log(this.blogRes);

  //  if (this.blogRes["message"] == "success") {
  //    this.router.navigate(['/dashboard']);
    
  //  }else{

  //  }
 })

}


}
