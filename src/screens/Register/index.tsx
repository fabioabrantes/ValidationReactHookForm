import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/ControlledInput';
import { Header } from '../../components/Header';

import {schema} from '../../util/validation';

import { Container,Form } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export function Register() {

  const {control,handleSubmit,formState:{errors}} = useForm<FormData>({
    resolver:yupResolver(schema)// aqui os dados são validados
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
              name="name"
              control={control}
              icon="user"
              placeholder="Nome"
              error={errors.name}     
            />
            <ControlledInput
              name="email"
              control={control}
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize='none'
              error={errors.email}
            />
            <ControlledInput
              name="password"
              control={control}
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              error={errors.password}
            />
            <ControlledInput
              name="passwordConfirm"
              control={control}
              icon="lock"
              placeholder="Confirme a senha"
              secureTextEntry
              error={errors.passwordConfirm}
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