import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment.development';


import { EditformComponent } from './editform/editform.component';
import { UserformComponent } from './userform/userform.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { EditblogComponent } from './editblog/editblog.component';
import { AuthLoginService } from './auth-login.service';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';

import { EditprojectComponent } from './editproject/editproject.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { UsersComponent } from './users/users.component';
import { ProjtypeComponent } from './projtype/projtype.component';
import { AddtypeComponent } from './addtype/addtype.component';
import { EdittypeComponent } from './edittype/edittype.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BlogComponent,
    EditformComponent,
    UserformComponent,
    HomeComponent,
    SignupComponent,
    AddComponent,
    GreetingComponent,
    EditblogComponent,
    ProjectComponent,
    AddprojectComponent,
   
    EditprojectComponent,
    ContactComponent,
    EnquiryComponent,
    ViewblogComponent,
    ProjectdetailComponent,
    UsersComponent,
    ProjtypeComponent,
    AddtypeComponent,
    EdittypeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    CKEditorModule,
    RouterModule.forRoot([
      {path: 'dashboard', redirectTo: '/dashboard/greeting', pathMatch: 'full'},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {      canActivate: [AuthService],
        path: 'dashboard', component: DashboardComponent,
      children: [
        {
          path:'blog', component: BlogComponent,
        },
        {
          path:'project', component: ProjectComponent,
        },
        {
          path:'addproject', component: AddprojectComponent,
        },
        {
          path:'editproject', component: EditprojectComponent
        },
        {
          path:'userform', component: UserformComponent
        },
        {
          path:'editform', component: EditformComponent
        },
        {
          path:'viewblog', component: ViewblogComponent
        },
        {
          path:'users', component: UsersComponent
        },
        {
          path:'projectdetail', component: ProjectdetailComponent
        },
        {
          path:'greeting', component: GreetingComponent
        },
        {
          path:'editblog', component: EditblogComponent
        },
        {
          path:'enquiry', component: EnquiryComponent
        },
        {
          path:'projtype', component: ProjtypeComponent
        },
        {
          path:'addtype', component: AddtypeComponent
        },
        {
          path:'edittype', component: EdittypeComponent
        },
        {
          path:'chat', component: ChatComponent
        }
      ],
    },
      {canActivate:[AuthLoginService],path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'contact', component: ContactComponent},

    ]),
  ],
  providers: [HttpClientModule,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
