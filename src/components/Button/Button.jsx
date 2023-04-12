import React from 'react'
import css from './Button.module.css';

const Button = ({addPage}) => {
  return (
    <button className={css.Button} onClick={addPage}>Load more</button>
  )
}

export default Button
