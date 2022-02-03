import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NoMatchPage from './noMatchPage'
import AxiosPage from '../axios'
import KakaoPage from '../kakao'
import {NavBar} from './nav'
import {Home} from '../home'


const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* 기본 루트페이지 */}
        <Route path='/' element={<Home />}/>
        <Route path='/kakaoPage' element={<KakaoPage />}/>
        <Route path='/axiosPage' element={<AxiosPage/>} />
        {/* 추가되는 페이지 */}

        {/* 경로가 유효하지 않을 때 */}
        <Route path='*' component={NoMatchPage} key="noMatch" />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;
