import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule,forRoot({
      type: 'mysql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '',
      database: 'student_db',
      autoLoadEntities: true,
      synchronize: true,
    }), StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
function forRoot(arg0: { type: string; host: string; port: string; username: string; password: string; database: string; autoLoadEntities: boolean; synchronize: boolean; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
  throw new Error('Function not implemented.');
}

