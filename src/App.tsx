import styled from 'styled-components'
import Carousel from './components/carousel'

const ItemOne = styled.div`
  background-image: url('image/slides/slide1.png');
  background-size: cover;
  background-repeat: repeat-x;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 100%;
  width: 100%;
`

const ItemTwo = styled.div`
  background-image: url('image/slides/slide2.png');
  background-size: cover;
  background-repeat: repeat-x;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 100%;
  width: 100%;
`

const ItemThree = styled.div`
  background-image: url('image/slides/slide3.png');
  background-size: cover;
  background-repeat: repeat-x;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <div>
      <Carousel>
        <ItemOne>1</ItemOne>
        <ItemTwo>2</ItemTwo>
        <ItemThree>3</ItemThree>
      </Carousel>
    </div>
  )
}

export default App
