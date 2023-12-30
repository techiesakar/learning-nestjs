import { Controller, Get, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hello World"
  }
}

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    ThrottlerModule.forRoot([{
      name: 'short',
      ttl: 1000,
      limit: 1,
    }, {
      name: 'long',
      ttl: 60000,
      limit: 100,
    }]),
    MyLoggerModule
  ],

  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
  exports: []
})


export class AppModule { }
