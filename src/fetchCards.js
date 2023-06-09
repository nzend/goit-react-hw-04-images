import axios from 'axios';

const KEY = '35630597-0391cfe0949186f41cbd4414f';

const fetchCards = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export default fetchCards;
