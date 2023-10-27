import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent {

  viewenquiry:any={};
  activatedRoute: any;

  constructor(private authService: AuthService, private router: Router,private route:ActivatedRoute){

  }

ngOnInit() {
  this.route.queryParams.subscribe((params: any) => {
    console.log("data565", params);
    const userId: String = params['id'];
    if (userId) {
      this.authService.singleEnquiry(userId).subscribe(
        (data) => {
          this.viewenquiry = data?.data;
          console.log(this.viewenquiry);
        },
        (error) => {
          console.error('Error fetching enquiry ', error);
        }
      );
    }
  });
}
}


