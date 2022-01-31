import KakaoMap from './components/kakao/kakaoMap'
import KakaoLoginBtn from './components/kakao/kakaoLoginBtn'
import styled from 'styled-components'


function App() {
  const REST_API_KEY = "f9b256f27ac94c60b3b60548d768b661";

  return (
    <div className="App">
      <MapBox>
        <KakaoMap />
      </MapBox>
      <KakaoLoginBtn />
    </div>
  );
}

export default App;

const MapBox = styled.div`
  width: 400px;
  height: 400px;
`
