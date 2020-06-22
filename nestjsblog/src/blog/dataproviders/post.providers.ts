
import { Connection, Repository } from 'typeorm';
import { PostEntity} from '../entities/Post.entity';

export const PostProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(PostEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];