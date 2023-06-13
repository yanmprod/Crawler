import React, { useState } from 'react';
import './Feed.scss';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { formatCrawlDate } from '../../../../util/util';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SiteElements } from '../SiteElements/SiteElements';
import Popover from '@material-ui/core/Popover';
import DeleteIcon from '../../../../assets/DeleteIcon.svg';

const Site = ({ data: { url, title, description, h1, h2, links, creationDate }, index, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const date = formatCrawlDate(creationDate);
  return (
    <Box height={'151px'} display={'inline-flex'} width={'100%'}>
      <div className='site-index'>{index}</div>
      <div className='site-data'>
        <div className='box-header'>
          <div className='site-url'>{url}</div>
          <div className='header-right-side'>
            <div className='site-crawl-date'>{date}</div>

            <MoreVertIcon className='site-menu' aria-describedby={id} onClick={handleClick} />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}>
              <div className='delete-site' onClick={() => onDelete(url)}>
                <img src={DeleteIcon} alt='delete' />
                Delete
              </div>
            </Popover>
          </div>
        </div>

        <div className='site-title'>
          <h3>{title}</h3>
        </div>
        <div className='site-desc'>{description}</div>
        <div className='site-elements-container'>
          <SiteElements h1={h1} h2={h2} links={links} />
        </div>
      </div>
    </Box>
  );
};

Site.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  onDelete: PropTypes.func
};

const Feed = ({ sites, onDelete }) => {
  return (
    <Box className='feed'>
      <h2>Crawled Pages</h2>
      {sites?.map((site, i) => (
        <Site key={i} data={site} index={i + 1} onDelete={onDelete} />
      ))}
    </Box>
  );
};

Feed.propTypes = {
  sites: PropTypes.array,
  onDelete: PropTypes.func
};

export { Feed };
