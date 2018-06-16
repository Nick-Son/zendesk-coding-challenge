import React from 'react'

const PageSelector = (props) => (
  <div className="page-selector">
    <ul className="page-selector__list">
      { props.pageNumbers &&
        props.pageNumbers.map(page => (
          (
            <li 
              className="page-selector__link"
              key={page} 
              id={page} 
              onClick={() => props.onPageChange(page)}
              >{page + 1}
            </li>
          )
        ))
      }
    </ul>
  </div>
)

export default PageSelector