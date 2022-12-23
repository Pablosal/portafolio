import React from 'react';
import { Article } from '../../context/types';

const useArticles = () => {
  const [articulos, setArticulos] = React.useState<Article[] | []>([]);
  const [loading, setLoading] = React.useState<Boolean>(true);
  React.useEffect(() => {
    (() => {
      const options = {
        method: 'GET',
      };
      fetch('https://apimocha.com/pablo-articles/all', options)
        .then((response) => response.json())
        .then((response) => {
          setArticulos(response);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    })();
  }, []);

  return [articulos, loading] as const;
};

export default useArticles;
