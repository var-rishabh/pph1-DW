import React from 'react';
import './HeaderMobileMenu.css';

const HeaderMobileMenu = () => {
    const currentKey = window.location.pathname.split('/')[1];
    return (
        <div className='header-mobile-menu'>
            <a href="/">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33571 1.16276L0.509623 7.54512C0.297809 7.71786 0.17392 7.98346 0.17392 8.26482V18.2942C0.17392 19.8049 1.34187 21.0295 2.78262 21.0295H6.26084H11.4782H14.9565C16.3973 21.0295 17.5652 19.8049 17.5652 18.2942V8.26482C17.5652 7.98346 17.4413 7.71786 17.2295 7.54512L9.40343 1.16276C9.08942 0.906683 8.64972 0.906683 8.33571 1.16276ZM12.3478 19.2061H14.9565C15.4367 19.2061 15.8261 18.7979 15.8261 18.2943V8.71078L8.86953 3.03686L1.91301 8.70987V18.2943C1.91301 18.7619 2.2487 19.1473 2.68117 19.2L2.78258 19.2061H5.39127V11.0001C5.39127 10.5325 5.72696 10.1472 6.15943 10.0945L6.26084 10.0883H11.4782C11.9242 10.0883 12.2917 10.4403 12.3419 10.8938L12.3478 11.0001V19.2061ZM7.1304 19.2061V11.9119H10.6087V19.2061H7.1304Z" fill={(currentKey==="" )?("#CA2B1F"):("#352429")} />
                </svg>
            </a>

            <a href="/product">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.73044 0.88208H18.9218C19.294 0.88208 19.6445 1.00491 19.8679 1.21363L23.4157 4.52914C23.5692 4.67261 23.6522 4.84712 23.6522 5.02647V16.6307C23.6522 18.0041 22.0638 19.1174 20.1044 19.1174H3.54783C1.58842 19.1174 0 18.0041 0 16.6307V5.02647C0 4.84712 0.0829931 4.67261 0.236522 4.52914L3.78436 1.21363C4.0077 1.00491 4.35821 0.88208 4.73044 0.88208ZM21.2871 5.30264L18.3306 2.53999H5.32189L2.36536 5.30264V16.6309C2.36536 17.056 2.82189 17.4063 3.41005 17.4542L3.54797 17.4598H20.1045C20.7577 17.4598 21.2871 17.0887 21.2871 16.6309V5.30264Z" fill={(currentKey==="product" )?("#CA2B1F"):("#352429")} />
                    <path d="M22.4696 4.19775C23.1227 4.19775 23.6522 4.56885 23.6522 5.02663C23.6522 5.45171 23.1957 5.80205 22.6075 5.84993L22.4696 5.85551H1.18261C0.529473 5.85551 0 5.48441 0 5.02663C0 4.60155 0.456535 4.25121 1.04469 4.20333L1.18261 4.19775H22.4696Z" fill={(currentKey==="product" )?("#CA2B1F"):("#352429")} />
                    <path d="M16.5566 7.51318C17.2098 7.51318 17.7393 7.88428 17.7393 8.34206C17.7393 10.6309 15.0919 12.4864 11.8262 12.4864C8.56051 12.4864 5.91315 10.6309 5.91315 8.34206C5.91315 7.88428 6.44262 7.51318 7.09576 7.51318C7.7489 7.51318 8.27837 7.88428 8.27837 8.34206C8.27837 9.71539 9.86679 10.8287 11.8262 10.8287C13.7156 10.8287 15.2601 9.79349 15.368 8.48817L15.374 8.34206C15.374 7.88428 15.9035 7.51318 16.5566 7.51318Z" fill={(currentKey==="product" )?("#CA2B1F"):("#352429")} />
                </svg>

            </a>
            <a href="/checkout">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.91671 0.868652C1.38744 0.868652 0.958374 1.27383 0.958374 1.77363C0.958374 2.27344 1.38744 2.67861 1.91671 2.67861H2.36943C2.80159 2.67861 3.18029 2.95175 3.294 3.34548L3.6929 4.72669L5.75004 11.8496V13.5384C5.75004 14.166 5.97557 14.7439 6.35425 15.2037C5.97835 15.6032 5.75004 16.1293 5.75004 16.7058C5.75004 17.9553 6.82269 18.9683 8.14587 18.9683C9.46905 18.9683 10.5417 17.9553 10.5417 16.7058C10.5417 16.5509 10.5252 16.3996 10.4938 16.2533H13.4646C13.4332 16.3996 13.4167 16.5509 13.4167 16.7058C13.4167 17.9553 14.4894 18.9683 15.8125 18.9683C17.1357 18.9683 18.2084 17.9553 18.2084 16.7058C18.2084 16.4085 18.1476 16.1246 18.0373 15.8645C18.1451 15.7181 18.2084 15.5402 18.2084 15.3483C18.2084 14.8485 17.7793 14.4434 17.25 14.4434H15.8125H8.62504C8.09577 14.4434 7.66671 14.0382 7.66671 13.5384V12.6334H17.4762C18.3407 12.6334 19.0982 12.087 19.3255 11.2993L20.8924 5.86942C21.2245 4.71811 20.3067 3.58359 19.0431 3.58359H5.34944L5.14313 2.86925C4.802 1.68809 3.66591 0.868652 2.36943 0.868652H1.91671ZM15.8125 16.2533C15.5479 16.2533 15.3334 16.4559 15.3334 16.7058C15.3334 16.9557 15.5479 17.1583 15.8125 17.1583C16.0771 17.1583 16.2917 16.9557 16.2917 16.7058C16.2917 16.4559 16.0771 16.2533 15.8125 16.2533ZM17.4762 10.8234H7.44035L5.87216 5.39356H19.0431L17.4762 10.8234ZM8.14587 16.2533C7.88124 16.2533 7.66671 16.4559 7.66671 16.7058C7.66671 16.9557 7.88124 17.1583 8.14587 17.1583C8.41051 17.1583 8.62504 16.9557 8.62504 16.7058C8.62504 16.4559 8.41051 16.2533 8.14587 16.2533Z" fill={(currentKey==="checkout" )?("#CA2B1F"):("#352429")} />
                </svg>

            </a>
            <a href="/profile">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.82615 0.0585938C11.4651 0.0585938 13.6088 2.27852 13.6088 5.02265C13.6088 7.76677 11.4651 9.9867 8.82615 9.9867C6.18719 9.9867 4.04354 7.76677 4.04354 5.02265C4.04354 2.27852 6.18719 0.0585938 8.82615 0.0585938ZM17.5042 16.7635C17.29 14.1956 15.2288 12.2155 12.7391 12.2155H4.91304L4.70898 12.2201L4.51287 12.2336C2.04309 12.455 0.130432 14.5904 0.130432 17.1795V19.2057L0.136282 19.312C0.186513 19.7654 0.554053 20.1174 0.999997 20.1174H16.6522L16.7536 20.1113C17.186 20.0586 17.5217 19.6732 17.5217 19.2057V17.1795L17.5172 16.9674L17.5042 16.7635ZM4.93296 14.0387L12.7392 14.0389L12.9067 14.0436C14.4597 14.1307 15.7073 15.4206 15.7794 17.0314L15.7829 17.2008L15.7827 18.2938H1.86963V17.1795L1.87415 17.0071C1.95818 15.409 3.20363 14.1175 4.76866 14.0424L4.93296 14.0387ZM5.78267 5.02265C5.78267 3.29074 7.14288 1.88212 8.82615 1.88212C10.5094 1.88212 11.8696 3.29074 11.8696 5.02265C11.8696 6.75456 10.5094 8.16317 8.82615 8.16317C7.14288 8.16317 5.78267 6.75456 5.78267 5.02265Z" fill={(currentKey==="profile" )?("#CA2B1F"):("#352429")} />
                </svg>
            </a>
        </div>
    )
}

export default HeaderMobileMenu;
