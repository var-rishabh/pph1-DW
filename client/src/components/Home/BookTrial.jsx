import React from 'react';
import './BookTrail.css';

const BookTrail = () => {
    return (
        <div className="book-trial">
            <div className="book-trial__title">
                Curious to try our locally sourced<br/>
                FRESH MILK?
            </div>
            <div className="book-trial__button">
                <a href="/trail">Book Trial</a>
            </div>
        </div>
    )
}

export default BookTrail;