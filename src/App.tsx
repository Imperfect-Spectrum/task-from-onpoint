import { useState } from 'react'
import CarouselContainer from './components/carousel-container'

function App() {
  const [currentOffset, setCurrentOffset] = useState(0)
  return (
    <div style={{ width: '1024px', height: '100%', display: 'flex' }}>
      <CarouselContainer currentOffset={currentOffset} setCurrentOffset={setCurrentOffset} />
    </div>
  )
}

export default App
