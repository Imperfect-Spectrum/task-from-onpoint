import {
  MainWrapper,
  Wrapper,
  Title,
  Text,
  BoldText,
  ThinText,
  TextImage,
  PropImage1,
  PropImage2,
  PropImage3,
  PropImage4,
  PropImage5,
  PropImage6,
  PropImage7,
  PropImage8,
  PropImage9,
} from './styles'

export default function SlideOne({
  setCurrentOffset,
}: {
  setCurrentOffset: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <>
      <MainWrapper>
        <PropImage1 src="image/slides/slideOne/prop1.png" alt="prop 1 img" />
        <PropImage2 src="image/slides/slideOne/prop2.png" alt="prop 2 img" />
        <PropImage3 src="image/slides/slideOne/prop3.png" alt="prop 3 img" />
        <PropImage4 src="image/slides/slideOne/prop4.png" alt="prop 4 img" />
        <PropImage5 src="image/slides/slideOne/prop5.png" alt="prop 5 img" />
        <PropImage6 src="image/slides/slideOne/prop6.png" alt="prop 6 img" />
        <PropImage7 src="image/slides/slideOne/prop7.png" alt="prop 7 img" />
        <PropImage8 src="image/slides/slideOne/prop8.png" alt="prop 8 img" />
        <PropImage9 src="image/slides/slideOne/prop9.png" alt="prop 9 img" />
      </MainWrapper>
      <Wrapper>
        <Title>Привет,</Title>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ThinText>Это</ThinText>
          <BoldText>не</BoldText>
          <Text>коммерческое</Text>
          <Text>
            задание
            <TextImage onClick={() => setCurrentOffset(1024)} src="image/slides/slideOne/next.png" alt="next img" />
          </Text>
        </div>
      </Wrapper>
    </>
  )
}
