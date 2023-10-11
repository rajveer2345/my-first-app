import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  formData={ name:'', username:'',email:'', dob:'',gender:'',nationality:'', phone:''};
  username: any; // Replace with the actual username
  userData: any;
  updatedData: any = {}; // Initialize as an empty object

  id: any= '651fdd76971af51f49f7350e';

  constructor(private authservice: AuthService, private router: Router){}
 

  fetchUserData() {
    this.authservice.getUserById(this.id).subscribe(
      (data) => {
        this.userData = data["data"];
        console.log(this.userData["username"]);
        console.log(this.userData["email"]);
        console.log(this.userData["gender"]);
        console.log(this.userData["email"]);
        // Handle successful data retrieval, e.g., update the component's properties
      },
      (error) => {
        console.error("Error fetching user data", error);
        // Handle error, e.g., display an error message to the user
      }
    );
    }
    ngOnInit() {
      // Fetch user data when the component is initialized
      this.fetchUserData();
    }

    onSubmit() {
      this.authservice.edit(this.id, this.updatedData).subscribe(
        (response) => {
          console.log("User updated successfully", response);
          this.userData = { ...this.updatedData };
          this.router.navigate(['/dashboard'])
        },
        (error) => {
          console.error("Error updating user", error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }
