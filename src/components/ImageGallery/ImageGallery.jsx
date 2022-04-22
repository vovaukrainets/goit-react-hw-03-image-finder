import { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import ApiService from 'services/api';
import Button from 'components/Button';
import Loader from 'components/Loader';

import s from './ImageGallery.module.css';

const api = new ApiService();

class ImageGallery extends Component {
  state = {
    images: [],
    isHidden: true,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.userQuery !== this.props.userQuery) {
      api.query = this.props.userQuery;
      api.resetPage();
      this.setState({ images: [] });
      this.findImages();
    }
  }

  findImages = async () => {
    try {
      this.setState({ loading: true });
      const data = await api.findImages();
      const images = data.hits;

      this.setState({ loading: false });

      if (images.length === 0) {
        toast.warn('Sorry, no images were found!');
        this.setState({ isHidden: true });
        return;
      }

      this.setState({ isHidden: false });

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));

      api.incrementPage();
    } catch (error) {
      toast.warn('Oops, some problems with server.');
      console.log(error.message);
    }
  };

  render() {
    const { images, loading, isHidden } = this.state;
    return (
      <Fragment>
        <ul className={s.imageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id.toString()}
              image={image}
              onImageClick={this.props.onImageClick}
            />
          ))}
        </ul>
        {loading && <Loader />}
        {!isHidden && !loading && <Button onClick={() => this.findImages} />}
      </Fragment>
    );
  }
}

ImageGallery.propTypes = {
  userQuery: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
