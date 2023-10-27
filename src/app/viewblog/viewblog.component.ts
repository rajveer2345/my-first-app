import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent {
//   blogRes: any;
//   updatedData:any={};
//   userData:any;
//   blogListData:any[] = []
//   id: any='651ffbe565d01d087be5854e';
// title:any;
viewblog:any;

  constructor(private authService: AuthService, private router: Router,private route:ActivatedRoute){

  }
  
ngOnInit() {
  const userId = this.route.snapshot.queryParamMap.get('id');
  //this.router.queryParamMap.subscribe((params)=>
  {
//const userId=params['id'];

this.authService.singleBlog(userId).subscribe(
  (data) => {
    this.viewblog = data?.data;
    console.log(this.viewblog);
  },
  (error) => {
    console.log('error fetching user data', error);
  }
);
}

}
}
