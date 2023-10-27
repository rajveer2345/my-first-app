import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';


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
title:any;
  defaultBlogListData: any[] = [];
 
  formBuilder: any;

  constructor(private http: HttpClient, private authservice: AuthService, private router: Router){
    this.fetchData();
  }

ngOnInit() {
  this.fetchData();

}
searchQuery: string = '';



search() {
  if(!this.searchQuery){
    this.blogListData = this.defaultBlogListData || [];
    return
  }
  this.authservice.getByTitle(this.searchQuery).subscribe((res:any)=>{
    this.userData = res || {};
    console.log(this.userData);
    this.blogListData =  this.userData?.data

      
    })
}

fetchData() {

this.http.get('http://localhost:4000/blog/getall').subscribe(
  (data) => {

    console.log('API Response:', data);
    
    this.blogListData = data as any[];
    this.defaultBlogListData = data as any[];
    console.log(this.blogListData);
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
    this.router.navigate(['/dashboard/viewblog'],{
    queryParams:{
      id:id
    }
  })}


  back(){
    this.router.navigate(['/dashboard/blog'],{
   
  })}



  ///


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
/////


