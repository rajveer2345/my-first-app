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
import { SearchPipe } from './search.pipe';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectformComponent } from './projectform/projectform.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquirydetailComponent } from './enquirydetail/enquirydetail.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';

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
    SearchPipe,
    ProjectsComponent,
    ProjectformComponent,
    EditprojectComponent,
    ContactComponent,
    EnquiryComponent,
    EnquirydetailComponent,
    BlogdetailComponent,
   
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
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
          path:'userform', component: UserformComponent
        },
        {
          path:'editform', component: EditformComponent
        },
        {
          path:'greeting', component: GreetingComponent
        },
        {
          path:'editblog', component: EditblogComponent
        },
        {
          path:'projects', component: ProjectsComponent,
        },
        {
          path:'projectform', component: ProjectformComponent,
        },
        {
          path:'editproject', component: EditprojectComponent,
        },
        {
          path:'enquiry', component: EnquiryComponent,
        },
        {
          path:'blogdetail', component: BlogdetailComponent,
        },
        {
          path:'enquirydetail', component: EnquirydetailComponent,
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
