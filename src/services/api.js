class ApiService {
  #API_KEY = '25742027-db9032bdd57145384de423739';
  #BASE_URL = 'https://pixabay.com/api/';
  #page = 1;

  constructor() {
    this.userRequest = '';
  }

  findImages() {
    const queryParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.userRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: this.#page,
    });

    return fetch(`${this.#BASE_URL}?${queryParams}`).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Not Found'));
    });
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  get query() {
    return this.userRequest;
  }

  set query(newQuery) {
    this.userRequest = newQuery;
  }
}

export default ApiService;
