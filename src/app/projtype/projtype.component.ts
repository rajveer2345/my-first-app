import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projtype',
  templateUrl: './projtype.component.html',
  styleUrls: ['./projtype.component.css']
})
export class ProjtypeComponent {
  constructor(private http: HttpClient ,private authService: AuthService, private router: Router) {
    this.fetchData();
  }
  

  projTypeData:any[] = []
  typeRes: any;
  id:any;

  deleteType(typeid: any) {
    this.authService.deleteType(typeid).subscribe((res:any)=>{
   this.typeRes = res || {};
  
  
    console.log(this.typeRes);
  
    if (this.typeRes["message"] == "success") {
      alert("Deleted successfully");
      this.fetchData();
      }else{
        alert("error deleting post");
  
     }
   })
  
  }

  editType(id:any){
    this.router.navigate(['/dashboard/edittype'],{
      queryParams:{
        id:id
      }
    })}
  

  
 fetchData() {

  console.log("running fetch data")
  this.http.get('http://localhost:4000/type/getall').subscribe(
    (data) => {
  
      console.log('API Response:', data);
      
      this.projTypeData = data as any[];
    },
    (error) => {
     
      console.error('API Error:', error);
    }
  );
  }


}
