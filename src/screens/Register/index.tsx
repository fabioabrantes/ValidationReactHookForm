import {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/ControlledInput';
import { Header } from '../../components/Header';

import {schemaYup} from '../../util/validationSchemaYup';
import {RegisterDTO} from '../../dto/RegisterDTO';

import { Container,Form } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export function Register() {
  const {control,handleSubmit,formState} = useForm<FormData>({
    /* resolver:classValidatorResolver(RegisterDTO) */
    resolver:yupResolver(schemaYup)
  });
 
  function handleUserRegister(data:FormData) {
    console.log(data);
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header />

          <Form>
            <ControlledInput
              icon="user"
              placeholder="Nome"
              control={control}
              name="name"
              error={formState.errors.name}

            />
            <ControlledInput
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize='none'
              control={control}
              name="email"
              error={formState.errors.email}
            />
            <ControlledInput
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              control={control}
              name="password"
              error={formState.errors.password}
            />
            <ControlledInput
              icon="lock"
              placeholder="Confirme a senha"
              secureTextEntry
              control={control}
              name="passwordConfirm"
              error={formState.errors.passwordConfirm}
            />

            <Button
              title="Cadastrar"
              onPress={handleSubmit(handleUserRegister)}
            />
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}