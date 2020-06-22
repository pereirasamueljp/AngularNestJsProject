import { NgModule } from '@angular/core';
import { PostListComponent } from './PostListComponent';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from 'src/app/common/material/CommonMaterialModule';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        
    ],
    exports: [ 
        PostListComponent
    ],
    declarations: [
       
        PostListComponent
    ],
    providers: [
    ],
})
export class PostListModule{ }
