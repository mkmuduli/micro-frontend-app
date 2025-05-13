import React, { Suspense } from 'react';
// eslint-disable-next-line import/no-unresolved
const Card = React.lazy(() => import('details/Card'));

const a = Array.from({ length: 5 }, (_, i) => i + 1);
function List() {
  return (
    <div>
      {a.map((i) => (
        <Suspense fallback={null} key={i}>
          <Card id={i} />
        </Suspense>
      ))}
    </div>
  );
}

export default List;
