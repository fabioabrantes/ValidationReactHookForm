import { TouchableOpacityProps } from 'react-native';
import { ContainerButton, TitleButton } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ContainerButton {...rest}>
      <TitleButton>
        {title}
      </TitleButton>
    </ContainerButton>
  );
}