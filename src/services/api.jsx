import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
export const searchItem = async (searchQuery, currentPage) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${currentPage}&key=25368021-46c08c6e665d77f3b0c6d9195&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
