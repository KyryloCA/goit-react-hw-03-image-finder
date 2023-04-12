import React from 'react'
import css from './Searchbar.module.css';

const Searchbar = ({onSubmit,searchWord}) => {
  
  return (
    <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={onSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      name='searchWord'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      defaultValue={searchWord}
    />
  </form>
</header>
  )
}

export default Searchbar