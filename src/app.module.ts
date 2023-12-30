import { Controller, Get, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hello World"
  }
}

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [],
  exports: []
})


export class AppModule { }
