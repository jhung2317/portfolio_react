import React from 'react'

function ProjectItem(props) {
  return (
    <>
      <li className='projects__item'>
        <div className='projects__item__link' to={props.path}>
          <figure className='projects__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Image' className='projects__item__img'/>
          </figure>
          <div className='projects__item__info'>
            <h5 className="projects__item__title"> {props.text}</h5> 
            <p className="projects__item__description"> {props.description} </p>
          </div>
        </div>

      </li>

    </>
  )
}

export default ProjectItem