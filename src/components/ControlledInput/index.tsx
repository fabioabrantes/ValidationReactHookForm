import {Control, Controller,FieldError} from 'react-hook-form'

import {Input, InputProps} from '../Input'

import { Error } from './styles';

type Props = InputProps & {
  control:Control<any>;
  name:string;
  error?:FieldError;
}

export const ControlledInput: React.FC<Props> = ({control,name,error,...rest}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field:{onChange,value}})=>(
          <Input onChangeText={onChange} value={value} {...rest}/>
        )}
      />
      {
        error && <Error>{error.message}</Error>
      }
    </>
    );
}

