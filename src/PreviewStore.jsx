import React from 'react'

const PreviewStore = () => {
    return (
        <div className='store-box'>
            <button>left</button>
                <div className='store-info'>
                    <h3>Main Content</h3>
                        <p>info</p>
                    <button>store page</button>
                </div>
                <img  alt="store img" className='store-img' />
            <button>right</button>
        </div>
    )
}

export default PreviewStore
