import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateStudentDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    enrollmentDate: Date;
}