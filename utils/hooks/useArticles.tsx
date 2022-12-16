import React from 'react';

type Article = {
  title: string;
  link: string;
  image: string;
};
const useArticles = () => {
  const [articulos, setArticulos] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    (() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '89ef5d265fmsh6859074c5aee9fdp186aafjsn9a6ac73cb9b2',
          'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
        },
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

  return [articulos, loading];
};

export default useArticles;
