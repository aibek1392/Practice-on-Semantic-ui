import React from 'react'

const PostDetail = ({ props, content, title, date }) => {

    return (
        <div>
        <div className='ui yellow message' style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='content'>
                <a href='/' className='author'>
                    {content}
                </a>
                <div className='text'>{title}</div>
            </div>
        </div>
        <div className='meta'>
            <span className='date'>{date}</span>
        </div>
        </div>
        
    )
}

export default PostDetail;