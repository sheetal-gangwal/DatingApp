import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  //loggedIn:boolean | undefined;
 // loggedIn:boolean;
 // currentUsers$:Observable<User>;

  constructor(public accountService:AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  // this.currentUsers$=this.accountService.currentUser$;
   //this.getCurrentUser();
    
  }
  login(){
    this.accountService.login(this.model).subscribe(response=>{
      this.router.navigateByUrl('/members');
      //console.log(response);
      //this.loggedIn = true;
    })
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn=false;
    
  }
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user  =>{
  //     this.loggedIn =!!user;

  //   },error =>{
  //     console.log(error);
  //   })
  // }
  

}
