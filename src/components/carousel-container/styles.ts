import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

interface SlidesWrapperProps {
  currentOffset: number
}

export const SlidesWrapper = styled.div<SlidesWrapperProps>`
  display: flex;
  transform: translateX(-${(props) => props.currentOffset}px);
  transition: transform 0.6s ease-out;
`

export const HomeIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 45px;
`

export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Separator = styled.div`
  height: 44px;
  width: 2px;
  background-color: #000;
  margin-right: 45px;
`

export const Text = styled.p`
  font-size: 1.4em;
  font-weight: bold;
`
