import { NgModule } from '@angular/core';
import { PostListModule } from './list/PostListModule';
import { PostResource } from './services/PostResource';
import { PostService } from './services/PostService';
import { CreatePostDialogComponent } from './dialogs/CreatePostDialogComponent';
import { CommonMaterialModules } from 'src/app/common/material/CommonMaterialModule';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PostListModule,
        CommonMaterialModules,
        FormsModule,
        CommonModule,
    ],
    exports: [
        PostListModule
    ],
    declarations: [
        CreatePostDialogComponent,
    ],
    entryComponents: [
        CreatePostDialogComponent,
    ],
    providers: [
        PostService,
        PostResource
    ],
})
export class PostsModule { 

}
