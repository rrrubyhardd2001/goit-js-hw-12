import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const searchPhoto = (queryPhoto, page) => {
  const userParams = {
    params: {
      key: '45750277-faa37f2a8b8a1a1eac0cf2e32',
      q: queryPhoto,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 15,
      safesearch: 'true',
    },
  };
  // return fetch(`${apiPix}&${userParams}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
  return axios.get('', userParams);
};
