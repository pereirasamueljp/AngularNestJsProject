import { Injectable } from '@angular/core';
import { UserLogin } from '../user/dataModel/UserLogin';
import { Observable } from 'rxjs';
import { AuthResource } from './AuthResource'
import { AuthToken } from '../dtoModel/AuthToken';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class AuthService {

    private readonly AUTH_STORAGE_KEY = 'auth_token';

    constructor(private resource: AuthResource,
                private readonly router: Router) {
        

    }

    public signIn(user: UserLogin): Observable<void>{
        return this.resource.signInUser(user)
        .pipe(
            map(authToken => {
                this.storeToken(authToken)
            })
        
        );
    }

    public isAuthorized(): boolean{
        return !_.isEmpty(this.loadToken());
    }

    public logout(){
        this.cleanToken();
        this.router.navigate(['login']);
    }

    private cleanToken(){
        localStorage.removeItem(this.AUTH_STORAGE_KEY);
    }
    
    private storeToken(authToken: AuthToken){
        localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(authToken))
    }

    private loadToken(): AuthToken{
        try{
            return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
        } catch{
            console.error('bad Json format for token Item')
        }
    }


}