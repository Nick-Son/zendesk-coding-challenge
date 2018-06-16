import React from 'react'

const PageSelector = (props) => (
  <ul className="page-selector">
    { props.pageNumbers &&
      props.pageNumbers.map(page => (
        (
          <li 
            className={page === props.currentPage ? "current-page page-selector__link" : "page-selector__link"}
            key={page} 
            id={page} 
            onClick={() => props.onPageChange(page)}
            >{page + 1}
          </li>
        )
      ))
    }
  </ul>
)

export default PageSelector