import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { CanActivate } from '@angular/router';
 import { Injectable } from '@angular/core';

import 'rxjs/add/operator/Map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { 
    
  }
  
   canActivate(): Observable<boolean>  {
     return this.auth.appUser$ 
    .map(appUser => appUser.isAdmin);
   }

}
