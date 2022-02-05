import {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pagination from 'react-js-pagination'


const AxiosGet = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    axios.get("https://dapi.kakao.com/v3/search/book?target=title", {
      params: {
        query: '미움받을 용기'
        //sort	String	결과 문서 정렬 방식, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy	X
        // page	Integer	결과 페이지 번호, 1~50 사이의 값, 기본 값 1	X
        // size	Integer	한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10	X
        // target	String	검색 필드 제한
        // 사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)	X
      },
      headers: {
        Authorization: 'KakaoAK 916ced9befd4ecf22b601f586949912d'
      },
    })
    .then(res =>
      setData(res.data.documents)
    )
    .catch(err => console.log(err))
  }, []);

  const onchange = (e) => {
    e.target.value && axios.get("https://dapi.kakao.com/v3/search/book?target=title", {
      params: {
        query: e.target.value
      },
      headers: {
        Authorization: 'KakaoAK 916ced9befd4ecf22b601f586949912d'
      },
    })
      .then(res =>
        setData(res.data.documents)
      )
      .catch(err => console.log(err))
  }


  return (
    <div>
      <input type="text" onChange={onchange}/>
      {data.map((v,i) => {
        return(
          <div key={i}>
            <h2>{v.title}</h2>
            <Imgs src={v.thumbnail}/>
            <div>{v.contents}</div>
            <div>{v.price}원 저자 {v.authors.map(v => v)}</div>
            <div>링크 <a href={v.url}>클릭</a></div>
          </div>
        )
      })
      }
    </div>
  )
}
const Imgs = styled.img`
  width: 200px;
  height: 400px;
`

export default AxiosGet;

