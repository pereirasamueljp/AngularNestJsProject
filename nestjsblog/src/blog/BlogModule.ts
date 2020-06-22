import { Module } from '@nestjs/common';
import { PostService } from './services/Post.service';
import { PostController } from './PostController';
import { DatabaseModule } from './data/database.module';
import { PostProviders } from './dataproviders/post.providers';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    PostController,

  ],
  providers: [
    ...PostProviders,
    PostService,

  ],
})
export class BlogModule {}
