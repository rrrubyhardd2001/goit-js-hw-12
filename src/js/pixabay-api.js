const apiPix = 'https://pixabay.com/api/?key=';

export const searchPhoto = queryPhoto => {
  const userParams = new URLSearchParams({
    key: '45750277-faa37f2a8b8a1a1eac0cf2e32',
    q: queryPhoto,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 20,
    safesearch: 'true',
  });
  return fetch(`${apiPix}&${userParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// inpt.addEventListener('input', e => {
//   const query = e.target.value;
//   if (query.trim() !== '') {
//     searchPhoto(query);
//   }
// });
