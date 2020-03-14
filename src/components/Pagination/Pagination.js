import React from 'react';

const Pagination = ({ filteredShopList, postsPerPage, currentPage, selectPageHandler, changePageHandler }) => {

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(filteredShopList.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <button className="btn pagination__btn" disabled={currentPage === 1 ? true : false} onClick={() => changePageHandler('back')}>
        <span className="fas fa-chevron-left"></span>
      </button>

      <select
        className="pagination__select" onChange={selectPageHandler}
        value={currentPage}>{pageNumbers.map(number =>
          <option key={number}>{number}</option>)}
      </select>

      <button className="btn pagination__btn" disabled={pageNumbers.length === currentPage || pageNumbers.length === 0 ? true : false} onClick={() => changePageHandler('next')}>
        <span className="fas fa-chevron-right"></span>
      </button>
    </div>
  );
}

export default Pagination;