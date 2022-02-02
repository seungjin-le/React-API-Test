import {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const AxiosGet = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://dapi.kakao.com/v3/search/book?target=title",{
      data:{query:'미움받을 용기'},
      headers:{Authorization: 'KakaoAK f9b256f27ac94c60b3b60548d768b661'}
    })
      .then(res => console.log(res))
  }, []);

  return (
    <div>

    </div>
  )
}

export default AxiosGet;
