/* eslint-disable react/display-name */
import React from 'react';

const getCard = ({ title, text }) => {
  if (!title && !text) {
    return null;
  }
  const vdom = (
    <div className="card">
      <div className="card-body">
        {title && <h4 className="card-title">{title}</h4>}
        {text && <p className="card-text">{text}</p>}
      </div>
    </div>
  );
  return vdom;
};

export default getCard;
