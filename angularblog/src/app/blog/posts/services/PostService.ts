import { Injectable } from '@angular/core';
import { PostListItem } from './dataModel/PostListItem';
import { Observable } from 'rxjs';
import { PostResource } from './PostResource';
import { CreatePostDto } from './dataModel/CreatePostDto';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { EditPostDto } from './dataModel/EditPostDto';

@Injectable({providedIn: 'root'})
export class PostService {
    constructor(private postResource: PostResource) { 

    }
    /* função publica que lista todos posts*/
    public getAllPostItems(): Observable<PostListItem[]> {
        return this.postResource.findAll()
        .pipe(
            /*ordernar os pots*/
            map((posts) => _.orderBy(posts, ['id'], ['desc']))
        );
    }
    /* função publica que cria os pots */
    public createPost(createPostDto: CreatePostDto): Observable<CreatePostDto>{
        return this.postResource.create(createPostDto);
    }
    public editPost(editPostDto: EditPostDto): Observable<CreatePostDto>{
        return this.postResource.edit(editPostDto);
    }
    public deletePost(postId: number): Observable<void>{
        return this.postResource.delete(postId);
    }


}