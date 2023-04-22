import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
  position: absolute;
  width: 1024px;
  height: 768px;
`
export const Wrapper = styled.div`
  position: absolute;
  left: 2291px;
  top: 138px;
  width: 750px;
  height: 490px;
  z-index: 3;
  text-align: left;
`
export const Wrapper2 = styled.div`
  padding-left: 60px;
  padding-bottom: 40px;
`

export const Title = styled.p`
  font-size: 2.3rem;
  text-transform: uppercase;
  margin-left: 8px;
`

export const Brand = styled.p`
  font-size: 7.3rem;
  text-transform: uppercase;
`

export const Strong = styled.p`
  font-size: 7.3rem;
  text-transform: uppercase;
  font-weight: 600;
`

export const FlexWrapper1 = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

export const FlexWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 300px;
  height: 100%;
  margin-top: 67px;
`

export const PropImage1 = styled.img`
  width: 250px;
  height: 739px;
  position: absolute;
  top: 100px;
  right: -1331px;
  z-index: 60;
`
const moveAndSpinProp2 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(10px, -20px) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
export const PropImage2 = styled.img`
  width: 46px;
  height: 47px;
  position: absolute;
  top: 95px;
  right: -1275px;
  z-index: 20;
  animation: ${moveAndSpinProp2} 7s infinite;
`
const moveAndSpinProp3 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(-20px, 40px) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
export const PropImage3 = styled.img`
  width: 71px;
  height: 72px;
  position: absolute;
  top: 177px;
  right: -1299px;
  z-index: 61;
  animation: ${moveAndSpinProp3} 9s infinite;
`
const moveAndSpinProp4 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(30px, 0) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
export const PropImage4 = styled.img`
  width: 37px;
  height: 37px;
  position: absolute;
  top: 235px;
  right: -1168px;
  z-index: 20;
  animation: ${moveAndSpinProp4} 9s infinite;
`
const moveAndSpinProp5 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(-30px, 0) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`

export const PropImage5 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 365px;
  right: -1342px;
  z-index: 20;
  animation: ${moveAndSpinProp5} 8s infinite;
`
const moveAndSpinProp6 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(10px, -20px) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
export const PropImage6 = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 488px;
  right: -1095px;
  z-index: 20;
  animation: ${moveAndSpinProp6} 8s infinite;
`
const moveAndSpinProp7 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  
  50% {
    transform: translate(-20px, 40px) rotate(50deg);
  }
  
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
export const PropImage7 = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 559px;
  right: -1148px;
  z-index: 61;
  animation: ${moveAndSpinProp7} 8s infinite;
`
export const PropImage8 = styled.img`
  position: absolute;
  top: 694px;
  right: -1377px;
  z-index: 61;
`

export const TextProp1 = styled.img`
  width: 80px;
  height: 75px;
  position: absolute;
  top: 314px;
  right: -1818px;
  z-index: 18;
`
export const TextProp2 = styled.img`
  width: 80px;
  height: 75px;
  position: absolute;
  top: 314px;
  right: -1418px;
  z-index: 18;
`

export const PropBackground1 = styled.div`
  width: 450px;
  height: 100%;
  z-index: 1;
  background-color: #ffffff;
  padding-left: 70px;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.55);
`
export const PropBackground2 = styled.div`
  width: 300px;
  height: 140px;
  z-index: 1;
  background-color: #ffffff;
  margin-left: 30px;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.55);
`
