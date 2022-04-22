import React, { Component } from 'react';

import s from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

class Searchbar extends Component {
  state = { query: '' };

  handleInput = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <AiOutlineSearch />
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
