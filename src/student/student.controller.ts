import { Controller, Post, Body, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './create-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Get()
  findAllStudents() {
    return this.studentService,this.findAllStudents();
  }
}
