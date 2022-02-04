
import AxiosPost from './axiosPost'
import Pagination from 'react-js-pagination'
import {useState} from 'react'



const AxiosPage = () => {
  const handlePageChange = () => {

  };
  return (
    <>
      <Pagination
        activePage={3}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
      <AxiosPost />
    </>
  )
}
//<AxiosGet />
export default AxiosPage;
