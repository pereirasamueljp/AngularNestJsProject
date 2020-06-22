import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { LoginComponent } from './LoginComponent';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from '../common/material/CommonMaterialModule';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './LoginRoutes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [ 
        CommonModule,
        CommonMaterialModules,
        RouterModule.forChild(LoginRoutes),
        MatFormFieldModule,
        FormsModule,

       
        
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers:[ ],
})
export class LoginModule {

}