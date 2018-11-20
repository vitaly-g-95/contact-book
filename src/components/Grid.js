import React, { Fragment } from 'react';

const Grid = ({ items, ItemComponent, emptyText }) => (
  <Fragment>
    {items.length ? (
      <div className="row mb-3">
        {items.map(item => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ItemComponent {...item} />
          </div>
        ))}
      </div>
    ) : (
      <Fragment>
        {emptyText && (
          <div className="text-center mb-4">
            {emptyText}
          </div>
        )}
      </Fragment>
    )}
  </Fragment>
);

export default Grid;
