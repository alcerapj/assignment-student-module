import { IsOptional, IsEmail } from 'class-validator';

export class UpdateStudentDto {
    @IsOptional()
    firstName?: string;

    @IsOptional()
    lastName?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    enrollmentDate?: Date;

}