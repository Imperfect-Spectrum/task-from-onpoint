import { useState, useEffect, Children, ReactElement, cloneElement, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 300px;
  width: 560px;
  display: flex;
  align-items: center;
`

const Window = styled.div`
  height: 300px;
  width: 560px;
  overflow: hidden;
`

const AllPagesContainer = styled.div`
  height: 560px;
  display: flex;
  transition: translate;
  transition-property: transform;
  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
`

export default function Carousel({ children }: { children: React.ReactNode }) {
  const PAGE_WIDTH = 560
  const [pages, setPages] = useState<ReactElement[]>([])
  const [offset, setOffset] = useState<number>(0)
  const swipeRef = useRef<HTMLDivElement>(null)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    const page = Children.map(children as React.ReactElement, (child: ReactElement<any>) =>
      cloneElement(child, {
        style: {
          minWidth: `${PAGE_WIDTH}px`,
          maxWidth: `${PAGE_WIDTH}px`,
          height: '100%',
        },
      })
    )

    setPages(page)
  }, [children])

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    swipeRef.current!.setAttribute('data-x', String(touch.clientX))
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const x = touch.clientX - parseInt(swipeRef.current!.getAttribute('data-x')!, 10)
    if (x > 0) {
      handleLeftArrowClick()
    } else if (x < 0) {
      handleRightArrowClick()
    }
  }

  return (
    <MainContainer>
      <FaChevronLeft style={{ cursor: 'pointer', width: '30px', height: '30px' }} onClick={handleLeftArrowClick} />
      <Window ref={swipeRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <AllPagesContainer
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </AllPagesContainer>
      </Window>
      <FaChevronRight style={{ cursor: 'pointer', width: '30px', height: '30px' }} onClick={handleRightArrowClick} />
    </MainContainer>
  )
}
