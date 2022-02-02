import KakaoMap from './components/kakao/kakaoMap'
import KakaoLoginBtn from './components/kakao/kakaoLoginBtn'
import styled from 'styled-components'
import AxiosGet from './components/axios/axiosGet'


function App() {

  return (
    <div className="App">
      <MapBox>
        <KakaoMap />
      </MapBox>
      <KakaoLoginBtn />
      <h2>API 연습</h2>
      <AxiosGet />
    </div>
  );
}


export default App;

const MapBox = styled.div`
  width: 400px;
  height: 400px;
`
