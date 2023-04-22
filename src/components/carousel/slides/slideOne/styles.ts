import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
  position: absolute;
  width: 1024px;
  height: 768px;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 90px;
  top: 200px;
  width: 850px;
  height: 400px;
  z-index: 3;
`

export const Title = styled.p`
  font-size: 1.7rem;
  text-transform: uppercase;
`

export const Text = styled.p`
  font-size: 5.9rem;
  text-transform: uppercase;
  margin-right: 30px;
`

export const BoldText = styled(Text)`
  font-weight: bold;
`

export const ThinText = styled(Text)`
  font-weight: thin;
`

export const TextImage = styled.img`
  width: 251px;
  height: 70px;
  margin-left: 70px;
  vertical-align: baseline;
`

const moveAndSpinProp3 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(50px, 10px) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
const moveProp5 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(0, -70px) rotate(25deg) scale(1.2);
  }
  50% {
    transform: translate(50px, -50px) rotate(60deg) scale(1.5);
  }
  75% {
    transform: translate(80px, 0) rotate(25deg) scale(1.2);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
`
const moveAndSpinProp5 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(10px, -50px) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
const moveAndSpinAndScaleProp9 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  
  50% {
    transform: translate(10px, -50px) rotate(25deg) scale(1.15);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
`

export const PropImage1 = styled.img`
  width: 270px;
  height: 142px;
  position: absolute;
  top: 85px;
  right: 880px;
  z-index: 2;
`

export const PropImage2 = styled.img`
  width: 75px;
  height: 72px;
  position: absolute;
  top: 50px;
  right: 30px;
  z-index: 2;
`

export const PropImage3 = styled.img`
  width: 65px;
  height: 59px;
  position: absolute;
  top: 90px;
  right: 250px;
  z-index: 2;
  animation: ${moveAndSpinProp3} 9s infinite;
`
export const PropImage4 = styled.img`
  width: 500px;
  height: 78px;
  position: absolute;
  z-index: 5;
  top: 185px;
  right: 115px;
`

export const PropImage5 = styled.img`
  width: 95px;
  height: 97px;
  position: absolute;
  z-index: 6;
  top: 185px;
  right: 115px;
  animation: ${moveProp5} 10s linear infinite;
`
export const PropImage6 = styled.img`
  width: 88px;
  height: 86px;
  position: absolute;
  z-index: 2;
  top: 500px;
  right: 890px;
  animation: ${moveAndSpinProp5} 9s infinite;
`
export const PropImage7 = styled.img`
  width: 445px;
  height: 197px;
  position: absolute;
  z-index: 2;
  top: 550px;
  right: 750px;
`
export const PropImage8 = styled.img`
  width: 95px;
  height: 87px;
  position: absolute;
  z-index: 2;
  top: 550px;
  right: 450px;
`
export const PropImage9 = styled.img`
  width: 200px;
  height: 197px;
  position: absolute;
  z-index: 2;
  top: 670px;
  right: 250px;
  animation: ${moveAndSpinAndScaleProp9} 9s infinite;
`
