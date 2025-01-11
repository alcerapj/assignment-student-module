import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './create-student.dto';
import { UpdateStudentDto } from './update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // Create a new student
  createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  // Get all students
  async findAllStudents(): Promise<Student[]> {
    const students = await this.studentRepository.find();
    console.log(students);  // Log to check if data is being fetched
    return students;
  }
  findOneStudent(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
}
  // Update an existing student
  async updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    await this.studentRepository.update(id, updateStudentDto);
    return this.studentRepository.findOne({ where: { id } });
  }

  // Delete a student
  deleteStudent(id: number): Promise<void> {
    return this.studentRepository.delete(id).then(() => undefined);
  }
}
