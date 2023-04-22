import { useRef } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Container, SlidesWrapper, HomeIconWrapper, ProjectTitleWrapper, Separator, Text } from './styles'
import SlideOne from '../carousel/slides/slideOne'
import SlideTwo from '../carousel/slides/slideTwo'
import SlideThree from '../carousel/slides/slideThree'

export default function CarouselContainer({
  currentOffset,
  setCurrentOffset,
}: {
  currentOffset: number
  setCurrentOffset: React.Dispatch<React.SetStateAction<number>>
}) {
  const swipeRef = useRef<HTMLDivElement>(null)

  const handleLeftArrowClick = () => {
    if (currentOffset > 0) {
      setCurrentOffset(currentOffset - 1024)
    } else {
      setCurrentOffset(0)
    }
  }

  const handleRightArrowClick = () => {
    if (currentOffset < 2048) {
      setCurrentOffset(currentOffset + 1024)
    } else {
      setCurrentOffset(2048)
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    swipeRef.current?.setAttribute('data-x', String(touch.clientX))
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const x = touch.clientX - parseInt(swipeRef.current!.getAttribute('data-x')!, 10)
    if (x > 48) {
      handleLeftArrowClick()
    } else if (x < -64) {
      handleRightArrowClick()
    }
  }

  return (
    <Container ref={swipeRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <SlidesWrapper currentOffset={currentOffset}>
        <SlideOne setCurrentOffset={setCurrentOffset} />
        <SlideTwo currentOffset={currentOffset} />
        <SlideThree currentOffset={currentOffset} />
        <img
          src="image/slides/slide.png"
          alt="slide img"
          style={{
            width: '6159px',
            height: '768px',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-x',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </SlidesWrapper>
      <div
        style={{
          position: 'absolute',
          top: '50px',
          left: '90px',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HomeIconWrapper>
          <AiOutlineHome
            style={{ width: '100%', height: '100%', fill: 'currentColor', stroke: 'currentColor' }}
            onClick={() => setCurrentOffset(0)}
          />
        </HomeIconWrapper>

        <ProjectTitleWrapper>
          <Separator />
          <Text>PROJECT</Text>
        </ProjectTitleWrapper>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '718px',
          left: '90px',
          transform: 'translateY(-50%)',
          display: 'flex',
        }}
      >
        <img src="image/slides/textProp.png" alt="text prop" />
      </div>
    </Container>
  )
}
