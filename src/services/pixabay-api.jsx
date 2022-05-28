function fetchImages(searchImageName, page) {
  const API_KEY = '25701276-4c897598a1be31965ea51d876';

  return fetch(
    `https://pixabay.com/api/?q=${searchImageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return response;
  });
}

export default fetchImages;
