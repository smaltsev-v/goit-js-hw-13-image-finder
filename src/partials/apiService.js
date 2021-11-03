const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
const KEY = '24110159-bfc136adc0752a602941d71dc';

export default class Fetch {
  constructor(searchQuery) {
    this.searchQuery = '';
    this.pageNumber = 1;
  }

  fetchGallery() {
    const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&${KEY}`;
    return fetch(url).then(response => response.json());
  }
  get(queary) {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
