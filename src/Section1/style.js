
import styled from 'styled-components';
import { ReactComponent as Img } from '../programming 2.svg';



export const Container = styled.section`
position:relative;
width: 100%;
height: 597px;
background: #FFD66C;

@media (max-width: 768px) {
    width:100%;
    height: 603px;

}

@media (max-width: 376px){
width: 100%;
height: 439px;
}
`;

export const Title = styled.h1`

width: 515px;
height: 167px;

padding-bottom: 302px;
padding-left: 44px;
padding-top:128px;


font-style: normal;
font-weight: bold;
font-size: 74px;
line-height: 87px;

color: #FFFFFF;

@media (max-width: 768px) {
width: 498px;
height: 141px;

padding-bottom: 308px;
padding-left:47px;
padding-top: 154px;


font-style: normal;
font-weight: 700;
font-size: 65px;
line-height: 76px;
}

@media (max-width: 376px){
width: 268px;
height: 109px;

padding-bottom: 198px;
padding-left:40px;
padding-top: 132px;

font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 47px;

}
`;

export const Image = styled(Img)`
position: absolute;
width: 544.14px;
height: 395px;
right:47.86px;
bottom: -74px;


@media (max-width: 768px){
    position: absolute;
    width: 467px;
    height: 339px;
    right: 31px;
    bottom: -65px;
}

@media (max-width: 376px){
    position: absolute;
    width: 299px;
    height: 217px;
    right: 39px;
    bottom: -41px;
}

`;
export const HiddenOnMobile = styled.span`
@media (max-width: 376px){
    display: none;
} 
`





// export default style;