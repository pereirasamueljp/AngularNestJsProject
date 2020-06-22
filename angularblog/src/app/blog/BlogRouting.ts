import { Route } from '@angular/router';
import { PostListComponent } from './posts/list/PostListComponent';
import { BlogGuard } from './guards/BlogGuards';

export const BlogRouting: Route[] = [
    {
       path: 'blog', children:[
           {path: 'list', component: PostListComponent, canActivate: [BlogGuard]}
       ]
    }
]
