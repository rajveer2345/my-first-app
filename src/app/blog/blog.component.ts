import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogListData:any[] = []
  constructor(private http: HttpClient){}
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
ngOnInit() {
  this.fetchData(); // Call the fetchData() function when the component is initialized
}

}
