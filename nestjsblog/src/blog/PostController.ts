import { Controller, Get, Post, Body, Put, Delete, Param} from "@nestjs/common";
import { PostService } from "./services/Post.service";
import { CreatePostDto } from "./dtos/CreatePostDtos";
import { EditPostDto } from "./dtos/EditPostDtos";



@Controller('posts')
export class PostController{

    constructor(private PostService: PostService){

    }

    @Get()
    findAll(){
        return this.PostService.findAll();
    }
    @Post()
    create(@Body() createPostDto: CreatePostDto): Promise<CreatePostDto>{
       return this.PostService.create(createPostDto);
    }
    @Put()
    edit(@Body() EditPostDto: EditPostDto): Promise<CreatePostDto>{
       return this.PostService.edit(EditPostDto);
    }
    @Delete(':id')
    delete(@Param() postID: number){
       this.PostService.delete(postID);
    }



}