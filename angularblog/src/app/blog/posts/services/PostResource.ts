/* Api com NestJS  - Conexão real com o banco de dados*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModel/PostListItem';
import { CreatePostDto } from './dataModel/CreatePostDto';
import { EditPostDto } from './dataModel/EditPostDto';
import { ApiConfig } from 'src/app/common/ApiConfig';

@Injectable({providedIn: 'root'})
export class PostResource {
    private readonly URL= ApiConfig.url + '/posts';

    constructor (private httpCliente: HttpClient) {

     }

    public findAll(): Observable<PostListItem[]> {
        return this.httpCliente.get(this.URL) as Observable<PostListItem[]>;
    }
    public create(createPostDto: CreatePostDto): Observable<CreatePostDto>{
        return this.httpCliente.post(this.URL, createPostDto) as Observable<CreatePostDto>;
    };

    public edit(editPostDto: EditPostDto): Observable<EditPostDto>{
        return this.httpCliente.put(this.URL, editPostDto) as Observable<EditPostDto>;

    };

    public delete(postId: number): Observable<any>{
        return this.httpCliente.delete(this.URL + '/' + postId);
    }



    
}