import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.dto';

@Controller('users')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: User) {
    console.log(body);
  }
}
