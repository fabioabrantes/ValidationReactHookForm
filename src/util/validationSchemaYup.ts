import * as yup from "yup";

export const schemaYup = yup.object({
  name: yup.string().required("Informe seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o E-mail"),
  password:yup.string().min(6, 'A senha deve ter ao menos 6 dígitos').required('Informe a Senha'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'),null],'A senha de confirmação não confere')
});