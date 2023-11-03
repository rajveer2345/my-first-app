import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , RouterModule,RouterLink,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent implements OnInit {
  viewData: any;

  constructor(private authService: AuthService, private route: ActivatedRoute,private router:Router) {}
  
  ngOnInit() {
    // Get the user ID from the query parameters
    this.route.queryParams.subscribe((params) => {
      const userId = params['id'];
      console.log(userId)

      // Fetch user data based on the ID
      this.authService.getById(userId).subscribe(
        (data) => {
          this.viewData = data?.data;
          console.log(this.viewData)
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    });
  }
  back(){
    this.router.navigate(["dashboard/enquiry"])
  }
}
