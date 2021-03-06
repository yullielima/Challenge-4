import styled from "styled-components";
import { ReactComponent as HTML5 } from "../assets/HTML5.svg";
import { ReactComponent as CSS3 } from "../assets/CSS3.svg";
import { ReactComponent as JS } from "../assets/JavaScript.svg";

export const Container2 = styled.section`
  width: 100%;
  height: 427px;

  @media (max-width: 768px) {
    height: 517px;
  }
  @media (max-width: 376px) {
    height: 624px;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  padding-top: 117px;
  font-size: 50px;
  color: #3f3d56;
  padding-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 45px;
    padding-bottom: 32px;
  }

  @media (max-width: 376px) {
    font-size: 30px;
    padding-bottom: 35px;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-align: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
`;

export const SkillBox = styled.div`
  width: 215px;
  height: 154px;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  background: rgba(255, 214, 108, 0.12);
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 191.27px;
    height: 137px;
  }

  @media (max-width: 376px) {
    width: 191.27px;
    height: 137px;
  }
`;

export const Html5Icon = styled(HTML5)`
  width: 92px;
  height: 92px;
  margin: auto;
`;

export const CSS3Icon = styled(CSS3)`
  width: 92px;
  height: 92px;
  margin: auto;
`;

export const JSIcon = styled(JS)`
  width: 92px;
  height: 92px;
  margin: auto;
`;

export const HiddenOnMobile = styled.span`
  display: none;
`;
