import { Container} from "./style";

export function Select({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}

      {title}
    </Container>
  );
}
