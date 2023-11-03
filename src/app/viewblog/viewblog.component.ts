import { Component } from '@angular/core';
import { ActivatedRoute , RouterModule,RouterLink,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent {
  viewBlog: any;

  constructor(private authService: AuthService, private route: ActivatedRoute,private router:Router) {}
  
  ngOnInit() {
    // Get the user ID from the query parameters
    this.route.queryParams.subscribe((params) => {
      const userId = params['id'];
      console.log(userId)

      // Fetch user data based on the ID
      this.authService.singleBlog(userId).subscribe(
        (data) => {
          this.viewBlog = data?.data;
          console.log(this.viewBlog)
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    });
  }
  back(){
    this.router.navigate(["dashboard/blog"])
  }
}
