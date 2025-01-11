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
    ){}

    createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
        const student = this.studentRepository.create(createStudentDto);
        return this.studentRepository.save(student);
    }

    findAllStudents(): Promise<Student[]>{
        return this.studentRepository.find();
    }

    async updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>{
        await this.studentRepository.update(id, updateStudentDto);
        return this.studentRepository.findOne({where: { id }});
    }
}
