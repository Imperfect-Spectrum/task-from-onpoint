import { useState, useEffect } from 'react'
import MyModal from './myModal'
import {
  MainWrapper,
  Wrapper,
  Wrapper2,
  Title,
  Brand,
  Strong,
  FlexWrapper1,
  FlexWrapper2,
  ModalWrapper,
  PropImage1,
  PropImage2,
  PropImage3,
  PropImage4,
  PropImage5,
  PropImage6,
  PropImage7,
  PropImage8,
  TextProp1,
  TextProp2,
  PropBackground1,
  PropBackground2,
} from './styles'

export default function SlideThree({ currentOffset }: { currentOffset: number }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal === true) {
      setShowModal(!showModal)
    }
  }, [currentOffset])
  return (
    <>
      <MainWrapper>
        <PropImage1 src="image/slides/slideThree/prop1.png" alt="prop 1 img" />
        <PropImage2 src="image/slides/slideThree/prop2.png" alt="prop 2 img" />
        <PropImage3 src="image/slides/slideThree/prop3.png" alt="prop 3 img" />
        <PropImage4 src="image/slides/slideThree/prop4.png" alt="prop 4 img" />
        <PropImage5 src="image/slides/slideThree/prop5.png" alt="prop 5 img" />
        <PropImage6 src="image/slides/slideThree/prop6.png" alt="prop 6 img" />
        <PropImage7 src="image/slides/slideThree/prop7.png" alt="prop 7 img" />
        <PropImage8 src="image/slides/slideThree/prop8.png" alt="prop 8 img" />
        <TextProp1 src="image/slides/slideThree/propText1.png" alt="text prop 1 img" />
        <TextProp2 src="image/slides/slideThree/propText2.png" alt="text prop 2 img" />
      </MainWrapper>
      <Wrapper>
        <Wrapper2>
          <Title>Ключевые сообщения</Title>
          <FlexWrapper1>
            <Brand>Brend</Brand>
            <Strong>XY</Strong>
          </FlexWrapper1>
        </Wrapper2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <PropBackground1>
            <p style={{ fontSize: '2.1rem' }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui. Et harum quidem rerum.
            </p>
          </PropBackground1>
          <FlexWrapper2>
            <PropBackground2>
              <p style={{ fontSize: '2.1rem' }}>On the other hand</p>
            </PropBackground2>
            <div onClick={() => setShowModal(!showModal)}>
              <ModalWrapper>
                <img src="image/slides/slideThree/textProp.png" alt="text prop" />
              </ModalWrapper>
            </div>
          </FlexWrapper2>
        </div>
      </Wrapper>
      {showModal && <MyModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}
