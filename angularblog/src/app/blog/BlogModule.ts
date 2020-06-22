import { NgModule } from '@angular/core';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/PostsModule';
import { ConfirmationDialogComponent } from './dialogs/ConfirmationDialogComponete';
import { CommonMaterialModules } from '../common/material/CommonMaterialModule';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './BlogRouting';
import { BlogGuard } from './guards/BlogGuards';

@NgModule({
    imports: [
        PostsModule,
        HttpClientModule,
        RouterModule.forChild(BlogRouting),
        CommonMaterialModules,
        
    ],
    providers: [
        BlogGuard,
    ],
    exports: [
        PostsModule,
        CommonMaterialModules,
    ],
    declarations: [
        ConfirmationDialogComponent,
    ],
    entryComponents:[
        ConfirmationDialogComponent,
    ]
})
export class BlogModule { }
