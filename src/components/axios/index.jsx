import AxiosGet from './axiosGet'
import {useEffect, useState} from 'react'
import axios from 'axios'


const AxiosPage = () => {
  const [data, setData] = useState([]);

  const getClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
    console.log(data)
  }
  const postClick = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      userId :11,
      id:101,
      body:'test body',
      title:'test title'
    })
      .then(res => console.log(res.data))
  }
  return (
    <div>
      <h2>API 연습</h2>
      <div>
        <button onClick={getClick}>Get</button>
        <button onClick={postClick}>Post</button>
      </div>
      {data.map((v,i) => {
        return (
          <div key={i}>
            <h3>{v.title}</h3>
            <div>userId = {v.userId}, id = {v.id}</div>
            <div>{v.body}</div>
          </div>
        )
      })}
    </div>
  )
}
//<AxiosGet />
export default AxiosPage;
