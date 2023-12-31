import { User } from '../../src/user/entities/user.entity';
import { Todo } from '../../src/todo/entities/todo.entity';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { TodoType } from '../../src/todo/entities/todo.type.entity';
import { Contact } from '../../src/contact/entities/contact.entity';

const ormConfig: ConnectionOptions = {
  type: 'mysql',
  database: 'nest-todo',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  entities: [User, Todo, TodoType, Contact],
  logging: true,
};

export default ormConfig;
