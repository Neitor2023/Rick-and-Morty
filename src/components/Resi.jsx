import React from 'react'

const Pagination = ({ totalPosts, postsPerPage }) => {
    let pages = []
    for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)

    }

    return (
        <div>
            {pages.map((page, index) => {
                    return <button className='btn_page' key={index}>{page}</button>;
                })}
        </div>
    )
}

export default Pagination
