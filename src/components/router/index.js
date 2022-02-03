import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NoMatchPage from './noMatchPage'
import AxiosPage from '../axios'
import KakaoPage from '../kakao'
import App from '../../App'


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 루트페이지 */}
        <Route exact path='/' element={<App />}/>
        <Route exact path='/kakaoPage' element={<KakaoPage />}/>
        <Route exact path='/axiosPage' element={<AxiosPage/>} />
        {/* 추가되는 페이지 */}

        {/* 경로가 유효하지 않을 때 */}
        <Route path='*' component={NoMatchPage} key="noMatch" />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;
