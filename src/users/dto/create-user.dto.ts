import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'email@mail.com', description: 'Email'})
  @IsString({message: 'Should be a string'})
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;
  @ApiProperty({example: '12345', description: 'Password'})
  @IsString({message: 'Should be a string'})
  @Length(4, 16, {message: 'From 4 to 16 symbols'})
  readonly password: string;
}
