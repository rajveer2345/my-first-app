import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent {
  viewBlog: any;
   userId:any;
  constructor(private route: ActivatedRoute, private authService: AuthService , private router: Router  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const userId = params['id'];
      console.log(userId);

      this.authService.singleBlog(userId).subscribe(
        (data) => {
          this.viewBlog = data?.data;
          console.log(this.viewBlog);
        },
        (error) => {
          console.error('Error fetching user ', error);
        }
      );
    });
  }

back(){
  this.router.navigate(["dashboard/blog"])
}
}