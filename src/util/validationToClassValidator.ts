// tive que criar esse arquivo contendo este método para fazer um decorator
// para validar o confirmPassword. Ele pega o valor do atributo password e verifica
// se é igual ao artibuto confirmPassword
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function confirmPassword(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'confirmPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value === relatedValue;
        },
      },
    });
  };
}