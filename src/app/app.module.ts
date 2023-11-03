import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



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
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment.development';
import { SearchPipe } from './search.pipe';
import { ProjectComponent } from './project/project.component';
import { InsertprojComponent } from './insertproj/insertproj.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { UserinfoComponent } from './userinfo/userinfo.component';



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
    ProjectComponent,
    InsertprojComponent,
    ContactComponent,
    EnquiryComponent,
    ViewenquiryComponent,
    ViewblogComponent,
    UserinfoComponent,
  
  
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
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
          path:'enquiry', component: EnquiryComponent,
        },
        {
          path:'userinfo', component: UserinfoComponent,
        },
        {
          path:'insertproj', component: InsertprojComponent,
        },
        {
          path:'project', component: ProjectComponent,
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
        //{
        //  path:'editproj', component: EditprojectComponent
       // },
        {
          path:'viewenquiry', component: ViewenquiryComponent
        },
        {
          path:'viewblog', component: ViewblogComponent
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
