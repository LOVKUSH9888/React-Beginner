import React from 'react'

const video = (props) => {
    console.log(props);
  return (
    <>
    <h1>Lorem, ipsum dolor. {props.title}</h1>
    <img src="https://pixabay.com/images/id-306274/" alt="image" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
    Provident omnis repellat ad libero odio quos similique harum voluptatum <br />
    exercitationem aperiam.</p>
      
    </>
  )
}

export default video;
 