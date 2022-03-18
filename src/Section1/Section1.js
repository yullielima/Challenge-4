import { Container, Title, Image, HiddenOnMobile } from "./style";

export const Section1 = () => {
  return (
    <Container>
      <Title>
        Learning <HiddenOnMobile>how</HiddenOnMobile> to code
      </Title>
      <Image aria-hidden='true' />
    </Container>
  );
};
