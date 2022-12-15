import * as React from 'react';
type Article = {
  title: string;
  link: string;
  image: string;
};
const Articulos = () => {
  const [articulos, setArticulos] = React.useState<Article[]>([]);

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
        .then((response) => setArticulos(response))
        .catch((err) => console.error(err));
    })();
  }, []);
  return (
    <>
      <h2>Articulos</h2>
      <div>
        {articulos.length === 0 ? (
          <h2>Cargando...</h2>
        ) : (
          articulos.map((art) => (
            <>
              <h2>{art.title}</h2>
              <h2>{art.link}</h2>
              <h2>{art.image}</h2>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Articulos;
