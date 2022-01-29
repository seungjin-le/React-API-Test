import KakaoMap from './components/kakao/kakaoMap'
import KakaoLoginBtn from './components/kakao/kakaoLoginBtn'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <MapBox>
        <KakaoMap />
      </MapBox>
    </div>
  );
}

export default App;

const MapBox = styled.div`
  width: 400px;
  height: 400px;
`
//<KakaoLoginBtn />
