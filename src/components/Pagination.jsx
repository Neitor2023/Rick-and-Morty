import React from 'react'

const Pagination = ({ totalPosts, postsPerPage }) => {
    let pages = []
    for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)

    }
    console.log("totalPosts ", totalPosts)
    console.log("postsPerPage ", postsPerPage)
    return (
        <div>
            {pages.map((page, index) => {
                    return <button className='Btn__page' key={index}>{page}</button>;
                })}
        </div>
    )
}

export default Pagination
