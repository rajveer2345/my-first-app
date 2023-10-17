import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title: string = '';
  blogRes: any;
  updatedData:any={};
  userData:any;
  blogListData:any[] = []
  id: any='651ffbe565d01d087be5854e';
  searchedBlog: any;
  searchTitle: string = '';

  constructor(private http: HttpClient, private authservice: AuthService, private router: Router, private cdr: ChangeDetectorRef){
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
    
    this.blogListData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
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

view(id:any){
  this.router.navigate(['/dashboard/blogdetail'],{
    queryParams:{
      id:id
    }
  })
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
deleteBlogPost(blogid: any) {
  this.authservice.deleteBlog(blogid).subscribe((res:any)=>{
  this.blogRes = res || {};
  console.log(this.blogRes);
  if (this.blogRes["message"] == "success") {
    alert("Deleted successfully");
    this.fetchData();
    }else{
      alert("error deleting post");
    }
 })
}

}

