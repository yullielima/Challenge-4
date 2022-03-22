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
          <Html5Icon />
        </SkillBox>

        <SkillBox>
          <CSS3Icon />
        </SkillBox>

        <SkillBox>
          <JSIcon />
        </SkillBox>
      </SkillContainer>
    </Container2>
  );
};
