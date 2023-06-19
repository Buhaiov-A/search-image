import React from 'react';
import css from './Serchbar.module.css';
import { FaBeer } from 'react-icons/fa';

export default function Serchbar() {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <FaBeer />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
