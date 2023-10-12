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
  username: any; 
  userData: any;
  updatedData: any = {};
  loggeduser= JSON.parse(localStorage.getItem('user'));

  id: any=  this.loggeduser?._id;

  constructor(private authservice: AuthService, private router: Router){ }
  fetchUserData() {
    this.authservice.getUserById(this.id).subscribe(
      (data) => {
        this.userData = data["data"];
        this.formData={...this.userData};
        },
      (error) => {
        console.error("Error fetching user data", error);
        
      }
    );
    }
    ngOnInit() {
      // Fetch user data when the component is initialized
      this.fetchUserData();
    }

    onSubmit() {
      this.updatedData.name = this.formData.name;
      this.updatedData.username = this.formData.username;
      this.updatedData.dob = this.formData.dob;
      this.updatedData.gender = this.formData.gender;
      this.updatedData.nationality = this.formData.nationality;
      this.updatedData.phone = this.formData.phone;
      this.authservice.edit(this.id, this.updatedData).subscribe(
        (response : any) => {
          if (response.message === 'updated successfully') {
          //console.log(response);
          let respback=response;
          alert('Updated Successfully');
          this.userData = { ...this.updatedData };
          localStorage.setItem('user',JSON.stringify(respback?.data));
         this.router.navigate(['/dashboard']);

          }
          else{
            alert('Error in updation');
          }
        },
        (error) => {
          console.error("Error updating user", error);
          
        }
      );
    }
  }
