import { Link } from "react-router-dom";
import styled from 'styled-components'

export const NavBar = () => {
  return (
    <div>
      <Links to="/"> Home </Links>
      <Links to="/kakaoPage"> kakao </Links>
      <Links to="/axiosPage"> axios </Links>
    </div>
  );
}


const Links = styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  margin-left: 30px;
`
