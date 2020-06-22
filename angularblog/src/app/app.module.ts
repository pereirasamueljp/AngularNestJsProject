import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModule';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CommonMaterialModules } from './common/material/CommonMaterialModule';
import { LoginModule } from './login/LoginModule';
import { AuthModule } from './common/auth/AuthModule';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonMaterialModules,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BlogModule,
    LoginModule,
    AuthModule,
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
