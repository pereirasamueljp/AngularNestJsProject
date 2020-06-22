
import { Injectable, Inject } from '@nestjs/common';
import { Repository} from 'typeorm';
import { PostEntity } from '../entities/Post.entity';
import { CreatePostDto } from '../dtos/CreatePostDtos';
import { EditPostDto } from '../dtos/EditPostDtos';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private PostRepository: Repository<PostEntity>,
  ){};

  public findAll(){
    return (this.PostRepository.find());
  };
  public create(createPostDto: CreatePostDto): Promise<CreatePostDto>{
    return this.PostRepository.save(createPostDto);
  }
  public edit(editPostDto: EditPostDto): Promise<CreatePostDto>{
    return this.PostRepository.save(editPostDto);
  }
  public delete(postId:number): void{
    this.PostRepository.delete(postId);
  }
      
}