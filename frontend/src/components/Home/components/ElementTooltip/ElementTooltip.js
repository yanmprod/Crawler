import React from 'react';
import './ElementTooltip.scss';
import PropTypes from 'prop-types';
import { SiteElement } from '../SiteElements/SiteElements';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

// This component is the tooltip when hovering an Element

const ElementTooltip = ({ elementName, amount, list }) => {
  return (
    <div className='element-tooltip'>
      <div className='header'>HTML Elements on this page</div>
      <div className='element-amount'>
        <SiteElement amount={amount} elementName={elementName} />
      </div>
      <Divider variant='inset' component='li' />

      <div className='element-list'>
        <List>
          {list.map((li, i) => (
            <ListItem key={li + i} className='element-content'>
              {li}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

ElementTooltip.propTypes = {
  amount: PropTypes.number,
  elementName: PropTypes.string,
  list: PropTypes.array
};

export { ElementTooltip };
