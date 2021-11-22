import React, {Component} from 'react'
import styled from 'styled-components'

/*global kakao*/

class KakaoLoginBtn extends Component {
  componentDidMount() {

    const apiKey = 'f9b256f27ac94c60b3b60548d768b661';
    const kakaoScript = document.createElement("script");
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      window.Kakao.init(apiKey);
      window.Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: (auth)=> {
          console.log('Kakao 로그인 완료', auth);
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: (res) => {
              console.log('Kakao 사용자 정보', res);
            },
            fail: (err) => {
              console.log(err);
            },
          });
        },
        fail: (err) => {
          console.log(err);
        },
      });
    };
  }

  render() {
    return <LoginBtn type='button' id='kakao-login-btn' />
  }
}

const LoginBtn = styled.div`
  width: 300px;
  margin-top: 100px;
`

export default KakaoLoginBtn;
