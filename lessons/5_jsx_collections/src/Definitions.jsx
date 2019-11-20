/* eslint-disable react/prefer-stateless-function */

import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }
    return (
      <dl>
        {data.map((item) => {
          const { dt, dd } = item;
          return (
            <React.Fragment key={uniqueId()}>
              <dt>{dt}</dt>
              <dd>{dd}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    );
  }
}
Definitions.propTypes = {
  data: PropTypes.node.isRequired,
};
