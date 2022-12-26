import * as React from 'react';
import useMediaQuery from '../../utils/hooks/useMediaQuery';

const QueryTitleComponent = () => {
  const matches = useMediaQuery('(min-width: 640px)');

  return (
    <>
      {matches ? (
        <h3 className="text-2xl text-white m-8">Mi Contenido</h3>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default QueryTitleComponent;
