import React, { useState } from 'react'
import { SearchArray } from './SearchArray/SearchArray';
import { Card } from './Card';


export const Pagination = () => {
    const [pageNumber,changePageNumber]=useState(1);
    const [perPage, setPerPage] = useState(10);
    const [pageCards, setPageCards] = useState(SearchArray.slice(0, perPage))

    const handleNextPage = () => {
        const shownCards = perPage*pageNumber
        if(shownCards <= SearchArray.length-1) {
            setPageCards(SearchArray.slice(shownCards, Math.min(SearchArray.length, perPage+shownCards)))
            changePageNumber(pageNumber+1)
        }
    }
    const handlePrevPage = () => {
        if(pageNumber === 1) {
            return;
        }
        const shownCards = perPage*(pageNumber-2)
        if(shownCards <= SearchArray.length-1) {
            setPageCards(SearchArray.slice(shownCards, Math.min(SearchArray.length, perPage+shownCards)))
        }
        changePageNumber(pageNumber-1)
    }

    const handlePerPageChange = (val: string) => {
        const inputVal = Number(val)
        setPerPage(inputVal)
        changePageNumber(1)

        const shownCards = 0
        setPageCards(SearchArray.slice(shownCards, Math.min(SearchArray.length, inputVal)))
    }

  return (
    <div className='cardDiv'>
    {
    pageCards.map((element, index)=>
            <Card
            key={index}
            id={element.id}
            // name={element.name} 
            // adress={element.adress}
             />  
    )
    }
    <input value={perPage} type="number" onChange={(e) => {
        handlePerPageChange(e.target.value)
    }}/>
    
    <button className='displayPageNumber'>{pageNumber}</button>
    <button className='previous-button' onClick={handlePrevPage}>{"previous-button"}</button>
    <button className='next-button' onClick={handleNextPage}>{"next-button"}</button>
    </div>
  )
}


