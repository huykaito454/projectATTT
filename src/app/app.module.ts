import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ChoiceComponent } from './choice/choice.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './home/user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './home/job/job.component';
import { ManageJobComponent } from './home/manage-job/manage-job.component';
import { ProjectComponent } from './home/project/project.component';
import { ManageProjectComponent } from './home/manage-project/manage-project.component';
import { ManageHumanComponent } from './home/manage-human/manage-human.component';
import { PartnerComponent } from './home/partner/partner.component';
import { ContractComponent } from './home/contract/contract.component';
import { ReportComponent } from './home/report/report.component';
import { ManageReportComponent } from './home/manage-report/manage-report.component';
import { Interceptor } from './Auth/Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChoiceComponent,
    HomeComponent,
    UserComponent,
    JobComponent,
    ManageJobComponent,
    ProjectComponent,
    ManageProjectComponent,
    ManageHumanComponent,
    PartnerComponent,
    ContractComponent,
    ReportComponent,
    ManageReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:Interceptor,multi:true  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
