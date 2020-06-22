import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../common/auth/user/dataModel/UserLogin';
import { NgForm } from '@angular/forms';
import { AuthService } from '../common/auth/services/AuthService';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html',
})
export class LoginComponent implements OnInit {
    public user = {} as UserLogin;
    public isLoading = false;
    constructor(private readonly authService: AuthService, private readonly router: Router) { 
    }y

    ngOnInit() { 
    }

    public onSubmit(form: NgForm){
        if (form.valid){
            this.isLoading = true;
            this.authService.signIn(this.user)
            .pipe(finalize(()=>this.isLoading = false))
            .subscribe((resp)=> this.router.navigate(['blog','list']));
        }
    }

}
