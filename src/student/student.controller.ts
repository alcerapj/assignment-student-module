import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './create-student.dto';
import { UpdateStudentDto } from './update-student.dto';

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

  @Patch(':id')
  updateStudent(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto){
    return this.studentService.updateStudent(id, updateStudentDto);
  }
}
