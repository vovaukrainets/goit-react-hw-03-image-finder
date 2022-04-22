import React, { Component } from 'react';
import Searchbar from 'components/SearchBar/SearchBar';
import ImageGallery from './ImageGallery';
import Modal from 'components/Modal/Modal';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    query: '',
    image: {},
    showModal: false,
  };

  handleInputSubmit = query => {
    this.setState({ query });
  };

  handleImageOpen = e => {
    const src = e.target.dataset.src;
    const alt = e.target.alt;
    const image = { src, alt };
    this.setState(() => ({ image, showModal: true }));
  };

  closeModal = () => {
    this.setState(() => ({ showModal: false }));
  };

  render() {
    return (
      <section className="app">
        <Searchbar onSubmit={this.handleInputSubmit} />
        <ImageGallery
          userQuery={this.state.query}
          onImageClick={this.handleImageOpen}
        />
        {this.state.showModal && (
          <Modal closeModal={this.closeModal}>
            <img src={this.state.image.src} alt={this.state.image.alt} />
          </Modal>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    );
  }
}

export default App;
