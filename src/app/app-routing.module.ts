import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { LevelSGuard } from './Auth/level-s.guard';
import { LevelTSGuard } from './Auth/level-ts.guard';
import { ChoiceComponent } from './choice/choice.component';
import { ContractComponent } from './home/contract/contract.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './home/job/job.component';
import { ManageHumanComponent } from './home/manage-human/manage-human.component';
import { ManageJobComponent } from './home/manage-job/manage-job.component';
import { ManageProjectComponent } from './home/manage-project/manage-project.component';
import { ManageReportComponent } from './home/manage-report/manage-report.component';
import { PartnerComponent } from './home/partner/partner.component';
import { ProjectComponent } from './home/project/project.component';
import { ReportComponent } from './home/report/report.component';
import { UserComponent } from './home/user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '',component : LoginComponent},
  {path : 'choice',component : ChoiceComponent , canActivate:[AuthGuard]},
  {path : 'home',component : HomeComponent,canActivate:[AuthGuard]},
  {
    path : 'home-user',component : HomeComponent,
    children : [{path: '',component : UserComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-job',component : HomeComponent,
    children : [{path: '',component : JobComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-manage-job',component : HomeComponent,
    children : [{path: '',component : ManageJobComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-project',component : HomeComponent,
    children : [{path: '',component : ProjectComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-manage-project',component : HomeComponent,
    children : [{path: '',component : ManageProjectComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-manage-human',component : HomeComponent,
    children : [{path: '',component : ManageHumanComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-partner',component : HomeComponent,
    children : [{path: '',component : PartnerComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-contract',component : HomeComponent,
    children : [{path: '',component : ContractComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-report',component : HomeComponent,
    children : [{path: '',component : ReportComponent,canActivate:[AuthGuard]}] 
  },
  {
    path : 'home-manage-report',component : HomeComponent,
    children : [{path: '',component : ManageReportComponent,canActivate:[AuthGuard]}] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
