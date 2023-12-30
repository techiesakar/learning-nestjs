import { Controller, Get, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hello World"
  }
}

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [],
  exports: []
})


export class AppModule { }
