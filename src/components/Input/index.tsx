import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, IconContainer, InputText } from './styles';

export type InputProps = TextInputProps & {
  icon?: 'user' | 'mail' | 'lock';
  value?: string;
}

export function Input({ icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Feather
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? '#DC1637' : '#AEAEB3'}
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        autoCorrect={false}
        autoCapitalize="sentences"
        value={value}
        {...rest}
      />
    </Container>
  );
}