
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Observable, BehaviorSubject } from 'rxjs';
import { PostListItem } from '../services/dataModel/PostListItem';
import { CreatePostDialogComponent } from '../dialogs/CreatePostDialogComponent';
import {MatDialog} from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { CreatePostDto } from '../services/dataModel/CreatePostDto';
import { ConfirmationDialogComponent } from '../../dialogs/ConfirmationDialogComponete';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
    styleUrls:['postList.scss']
})
export class PostListComponent implements OnInit {
    public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imgUrl','action'];
    public isLoading = false;

    private postListSubject: BehaviorSubject<PostListItem[]> = new BehaviorSubject(null)

    constructor(private postService: PostService,
                private matDialog: MatDialog,
                private _snackBar: MatSnackBar,
                ) {
        
    }
    

    ngOnInit() {
        /* isLoading para barra de carregamento da listagem de posts */
        this.isLoading = true
        /* Listar os posts */
        this.postService.getAllPostItems()
        .pipe(finalize(()=> this.isLoading = false))
        .subscribe((postListItems) => this.postListSubject.next(postListItems));
    }


    public deletePost(postDto: PostListItem){
        const ref = this.matDialog.open(ConfirmationDialogComponent);
        ref.afterClosed().subscribe((canContinue)=> {
            if (canContinue){
                this.isLoading = true;
                this.postService.deletePost(postDto.id)
                .pipe(finalize(()=> this.isLoading = false))
                .subscribe(()=> {
                    const list = this.postListSubject.getValue()
                    _.remove(list, post => post.id === postDto.id);
                    this.postListSubject.next(_.cloneDeep(list));
                    const message = 'O post '+(postDto.title)+' foi removido'
                    this._snackBar.open(message, null, {
                        duration: 2500});
                })

            }
        })
    }
    
    public getPostList(): Observable<PostListItem[]>{
        return this.postListSubject.asObservable();
    }


    public editPost(editPost: CreatePostDto){
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
            data: {editPostDto: editPost}
        })
        ref.afterClosed().subscribe((editedPost: PostListItem)=>{
            if (editedPost){
                const list = this.postListSubject.getValue()
                const postIndex = _.findIndex(list, post => post.id === editedPost.id);
                list[postIndex] = editedPost;
                this.postListSubject.next(_.cloneDeep(list));
                const message = 'O post '+(editPost.title)+' foi atualizado'
                this._snackBar.open(message, null, {
                    duration: 2500});

            }
        })
       
    }




    public createPost(){
       const ref = this.matDialog.open(CreatePostDialogComponent,{
            width: '600px',
        });
        /* Atualização das informações da lista de post*/
        ref.afterClosed().subscribe((newPost: PostListItem)=>{
            if (newPost){
                const list = this.postListSubject.getValue()
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list));
                const message = 'O post '+(newPost.title)+' foi adicionado'
                    this._snackBar.open(message, null, {
                        duration: 2500});

            }
        })
    }
}
