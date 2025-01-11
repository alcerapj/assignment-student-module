import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',  // Make sure this is the correct DB type (mysql, postgres, etc.)
      host: 'localhost',  // DB host
      port: 3306,  // DB port
      username: 'root',
      password: '',
      database: 'student_db',  // Name of your databas
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Path to your entities
      synchronize: true,  // Automatically sync entities with the DB (only for dev)
    }),
    StudentModule,  // Import your student module here
  ],
})
export class AppModule {}