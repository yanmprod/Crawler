import React from 'react';
import './SiteElements.scss';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import multiplierSymbol from '../../../../assets/Multiplication_Symbol.svg';
import { Tooltip } from '@material-ui/core';
import { ElementTooltip } from '../ElementTooltip/ElementTooltip';

const keyToElement = {
  h1: 'H1',
  h2: 'H2',
  links: 'A'
};

// One specific element and its count
const SiteElement = React.forwardRef(function SiteElement(props, ref) {
  const { amount, elementName, ...rest } = props;
  return (
    <Box display={'inline-flex'} ref={ref} {...rest} className='site-element'>
      <span>{amount}</span>
      <img src={multiplierSymbol} />
      <span>{keyToElement[elementName]}</span>
    </Box>
  );
});

SiteElement.propTypes = {
  elementName: PropTypes.string,
  amount: PropTypes.number
};

// The row under the main box showing all the elements and their count
const SiteElements = data => {
  return (
    <div className='site-elements'>
      {Object.keys(data).map(key => (
        <Tooltip key={key} arrow interactive title={<ElementTooltip amount={data[key].length} elementName={key} list={data[key]} />}>
          <SiteElement elementName={key} amount={data[key].length} />
        </Tooltip>
      ))}
    </div>
  );
};

SiteElements.propTypes = {
  h1: PropTypes.array,
  h2: PropTypes.array,
  links: PropTypes.array
};

export { SiteElements, SiteElement };
