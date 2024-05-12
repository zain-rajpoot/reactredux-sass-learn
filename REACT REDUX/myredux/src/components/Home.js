import React from 'react'

export default function Home(props) {
    // console.log(props);
    return (
        <>
            <h1>Home Components</h1>
            <div className='MainCart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                </svg>
            </div>
            <div className='My_cart'>
                <div className='img_wrap'>
                    <img src='https://source.unsplash.com/1920x1080' />
                </div>
                <div className='Cart_body'>
                    <h3>Unsplash Source</h3>
                    <h3>Price: $100</h3>
                </div>
                <button onClick={() => props.AddToCARTHandler({
                    price: 100,
                    name: 'Unsplash Source',
                })} className='addToCart'>Add to cart</button>
            </div>


        </>
    )
}
