import styled from "styled-components";
import { ReactComponent as Img } from "../programming 2.svg";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 597px;
  display: flex;
  justify-content: center;

  background: #ffd66c;

  & > div {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 668px;
  }

  @media (max-width: 376px) {
    width: 100%;
    height: 439px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 533px;

  padding: 224px 0 0 44px;

  font-size: 74px;
  line-height: 87px;

  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 498px;
    padding: 154px 0 0 47px;

    font-size: 65px;
    line-height: 76px;
  }

  @media (max-width: 376px) {
    width: 100%;
    max-width: 268px;
    padding: 132px 0 0 40px;

    font-size: 40px;
    line-height: 47px;
  }
`;

export const Image = styled(Img)`
  position: absolute;
  width: 544.14px;
  height: 395px;
  bottom: -74px;
  right: 47.86px;

  @media (max-width: 768px) {
    width: auto;
    height: 339px;
    bottom: -65px;
    right: 31px;
  }

  @media (max-width: 376px) {
    width: 299px;
    height: 217px;
    bottom: -41px;
    right: 50%;
    transform: translateX(50%);
  }
`;
export const HiddenOnMobile = styled.span`
  @media (max-width: 376px) {
    display: none;
  }
`;
