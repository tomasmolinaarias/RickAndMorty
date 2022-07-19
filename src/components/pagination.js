import React from 'react'

function Pagination({prev,next,onPrevi,onNext}) {
    const handlePrevious = () => {onPrevi()};
    const handlenext = () => {onNext()};
  return (
    <nav>
        <ul className="pagination justify-content-center">
            {
                prev ?
                <li className="page-item"><button className="page-link" onClick={handlePrevious}>Previous</button></li>
                : null
            }
            {
                next ?
                <li className="page-item"><button className="page-link" onClick={handlenext}>next</button></li>
                :null
            }
            
           
        </ul>
    </nav>
  )
}

export default Pagination