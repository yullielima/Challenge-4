import {
  Container2,
  SubTitle,
  SkillContainer,
  SkillBox,
  Html5Icon,
  CSS3Icon,
  JSIcon,
} from "./style2";

export const Section2 = () => {
  return (
    <Container2>
      <SubTitle>My Skills</SubTitle>

      <SkillContainer>
        <SkillBox>
          <Html5Icon aria-hidden='true' />
        </SkillBox>

        <SkillBox>
          <CSS3Icon aria-hidden='true' />
        </SkillBox>

        <SkillBox>
          <JSIcon aria-hidden='true' />
        </SkillBox>
      </SkillContainer>
    </Container2>
  );
};
