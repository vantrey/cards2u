import React from 'react'
import styles from './Pagination.module.css'

type PaginationType = {
  onPageChanged: (pageNumber: number) => void
  totalCount: number
  pageSize: number
  currentPage: number
}

const Pagination: React.FC<PaginationType> = (props) => {
  const pagesNumbersEls = Array.from({
    length: Math.ceil(props.totalCount / props.pageSize)
  }).map((el, i) => {
    let pageNumber = i + 1
    return <span
      onClick={() => {
        props.onPageChanged(pageNumber)
      }}
      key={i}
      className={`${styles.pagesNumbers} ${(props.currentPage === pageNumber && styles.selected)
      || ''}`}>
     {pageNumber} -
    </span>
  })
  return (
    <div>
      {pagesNumbersEls}
    </div>
  )
}

export default Pagination