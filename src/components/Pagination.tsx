interface Page{
    total: number,
    currentPage: number,
    handlePrev: () => void,
    handleNext: () => void,
    handlePageChange: (n : number) => void
}

const Pagination : React.FC <Page> = (props) => {
    const {total, currentPage, handleNext, handlePrev, handlePageChange} = props;
  return (
        <div className="pagination">
            <button disabled = {currentPage === 0} onClick={() => handlePrev()}>{"<"}</button>
            <button
                disabled = {currentPage === 0} 
                onClick={() => {handlePageChange(currentPage - 1)}}
            >{currentPage}</button>
            <button
                className = "active"
                onClick={() => {handlePageChange(currentPage)}}
            >{currentPage + 1}</button>
            <button
                disabled = {currentPage === total - 1}
                onClick={() => {handlePageChange(currentPage + 1)}}
            >{(currentPage + 1) + 1}</button>
            <button disabled = {currentPage === total - 1} onClick={() => handleNext()}>{">"}</button>
        </div>
  )
}

export default Pagination