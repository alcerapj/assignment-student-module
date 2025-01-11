import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
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
    return this.studentService.findAllStudents(); 
  }

  @Get(':id')
  findOneStudent(@Param('id') id: string) {
    const studentId = parseInt(id, 10); 
    return this.studentService.findOneStudent(studentId);  
  }

  @Patch(':id')
  updateStudent(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
