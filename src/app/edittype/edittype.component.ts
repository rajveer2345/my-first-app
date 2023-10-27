import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittype',
  templateUrl: './edittype.component.html',
  styleUrls: ['./edittype.component.css']
})
export class EdittypeComponent {
  
  updatedData = { type:'' , id:''};
 editTypeData : any
 typeid:any
  typeRes:any;

  constructor(private authService: AuthService, private router: Router, private routing: ActivatedRoute) {
  }
  ngOnInit(){
    this.routing.queryParams.subscribe(params => {
      this.typeid = params['id']
      this.authService.singleType(params['id']).subscribe((res:any)=> 
        this.updatedData.type = res?.data?.type
       
      )
    });
  }
  
 updateType() {
  this.authService.editType(this.typeid,this.updatedData).subscribe((res:any)=>{
 this.typeRes = res || {};
   if (this.typeRes["message"]) {
    alert(this.typeRes["message"])
     this.router.navigate(['/dashboard/projtype']);
   }else{

   }
 })

}

}
