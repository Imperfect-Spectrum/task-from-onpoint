import styled from 'styled-components'

const MainWrapper = styled.div`
  position: absolute;
  width: 1024px;
  height: 768px;
`
const Wrapper = styled.div`
  position: absolute;
  left: 1114px;
  top: 100px;
  width: 850px;
  height: 570px;
  z-index: 3;
`
const Title = styled.p`
  font-size: 1.7rem;
  text-transform: uppercase;
  margin-bottom: 50px;
`

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  color: black;
`

const Scrollbar = styled.div`
  height: 400px;
  margin: 20px;
  margin-left: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  unicode-bidi: bidi-override;
  direction: rtl;
  padding-left: 40px;

  &::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0);
    border: 10px solid transparent;
    background-clip: content-box;
    border-radius: 100vw;
  }

  &::-webkit-scrollbar {
    width: 1.6rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(204, 102, 153);
    border-radius: 30px;
  }
  ъ &::-webkit-scrollbar-thumb:active {
    background-color: rgb(0, 0, 0);
  }
`

const Overflow = styled.div`
  font-size: 25px;
  margin: 20px;
  text-align: left;
`

const PropBackground = styled.div`
  position: absolute;
  width: 740px;
  height: 420px;
  top: 225px;
  right: -904px;
  z-index: 2;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.55);
`
interface PropImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  animateProp?: number
}

const PropImage1 = styled.img<PropImageProps>`
  width: 845px;
  height: 394px;
  position: absolute;
  top: 175px;
  right: -1419px;
  z-index: 2;
  opacity: 0;
  animation: ${(props) => (props.animateProp === 1024 ? 'moveProp 2s ease-in-out forwards' : 'none')};

  @keyframes moveProp {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-49px, -39px);
      opacity: 1;
    }
  }
`
const PropImage2 = styled.img<PropImageProps>`
  width: 820px;
  height: 540px;
  position: absolute;
  top: 140px;
  right: -1501px;
  z-index: 2;
  opacity: 0;
  animation: ${(props) => (props.animateProp === 1024 ? 'moveProp2 3s ease-in-out forwards' : 'none')};

  @keyframes moveProp2 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-49px, -39px);
      opacity: 1;
    }
  }
`
const PropImage3 = styled.img<PropImageProps>`
  width: 560px;
  height: 668px;
  position: absolute;
  top: 140px;
  right: -1361px;
  z-index: 2;
  opacity: 0;
  animation: ${(props) => (props.animateProp === 1024 ? 'moveProp2 3s ease-in-out forwards' : 'none')};

  @keyframes moveProp2 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-49px, -39px);
      opacity: 1;
    }
  }
`

export default function SlideTwo({ currentOffset }: { currentOffset: number }) {
  return (
    <>
      <MainWrapper>
        <PropImage1 src="image/slides/slideTwo/prop1.png" alt="prop 1 img" animateProp={currentOffset} />
        <PropImage2 src="image/slides/slideTwo/prop2.png" alt="prop 2 img" animateProp={currentOffset} />
        <PropImage3 src="image/slides/slideTwo/prop3.png" alt="prop 3 img" animateProp={currentOffset} />
        <PropBackground />
      </MainWrapper>
      <Wrapper>
        <Title>
          Текст
          <br />
          Сообщения
        </Title>
        <AppContainer>
          <Scrollbar>
            <Overflow>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken
              idea of denouncing pleasure and praising pain was born and I will give you a complete account of the
              system, and expound the actual teachings of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those
              who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor
              again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To
              take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some
              advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </Overflow>
          </Scrollbar>
        </AppContainer>
      </Wrapper>
    </>
  )
}
