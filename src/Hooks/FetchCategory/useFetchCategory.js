import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetchCategory = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  //API den veri çekme işlemi
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //data = API dan gelen veriler
  return {loading, error, data};
};

export default useFetchCategory;
