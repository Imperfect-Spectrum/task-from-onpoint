import styled from 'styled-components'
import { HiXMark } from 'react-icons/hi2'
import Carousel from '../../..'

const MainContainer = styled.div`
  background-color: #ffffff;
  height: 300px;
  width: 560px;
`
const ItemOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  width: 560px;
`

const ItemTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  width: 560px;
`
export default function MyModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div
      style={{
        position: 'fixed',
        left: '2048px',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(91, 103, 120, 0.795)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 19,
      }}
    >
      <div
        style={{
          left: '2291px',
          top: '196px',
          width: '820px',
          height: '530px',
          marginLeft: '150px',
          marginTop: '48px',
          paddingLeft: '140px',
          paddingTop: '30px',
          backgroundColor: 'white',
          borderRadius: '20px',
          zIndex: 58,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '2.3rem', textTransform: 'uppercase', marginLeft: '8px' }}>Преимущества</p>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
              <p style={{ fontSize: '7.3rem', textTransform: 'uppercase' }}>Brend</p>
              <p style={{ fontSize: '7.3rem', textTransform: 'uppercase', fontWeight: '600' }}>XY</p>
            </div>
          </div>
          <HiXMark
            style={{
              width: '55px',
              height: '55px',
              fill: 'currentColor',
              stroke: 'currentColor',
              marginRight: '20px',
            }}
            onClick={() => setShowModal(!showModal)}
          />
        </div>
        <MainContainer>
          <Carousel>
            <ItemOne>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '1.5rem', color: '#00eeff' }}>01</p>
                <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '1.5rem', color: '#00eeff' }}>02</p>
                <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '1.5rem', color: '#00eeff' }}>03</p>
                <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
            </ItemOne>
            <ItemTwo>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '1.5rem', color: '#00eeff' }}>04</p>
                <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '1.5rem', color: '#00eeff' }}>05</p>
                <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '1.5rem', color: '#00eeff' }}>06</p>
                <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
            </ItemTwo>
          </Carousel>
        </MainContainer>
      </div>
    </div>
  )
}
