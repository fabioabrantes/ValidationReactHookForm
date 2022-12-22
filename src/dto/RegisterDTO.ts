import {Length, IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

import {confirmPassword} from '../util/validationToClassValidator';

export class RegisterDTO{

  @IsString()
  @Length(3, 100)
  @IsNotEmpty({message:'Informe seu nome'})
  name:string;

  @IsString()
  @IsEmail(undefined,{message:'E-mail inválido'})
  @IsNotEmpty({message:'Informe seu email'})
  email:string;

  @MinLength(6,{message:'A senha deve ter ao menos 6 dígitos'})
  @IsNotEmpty({message:'Informe sua senha'})
  password:string;

  @confirmPassword('password',{message:'A senha de confirmação não confere'})
  passwordConfirm:string;
}