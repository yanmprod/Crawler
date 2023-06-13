import React from 'react';
import './Header.scss';

// eslint-disable-next-line no-undef
const companyLogo = process.env.PUBLIC_URL + '/images/Logo.svg';

const Header = () => (
  <>
    <img src={companyLogo} alt='company-logo' className='logo' />
    <h1 className='title'>Page Crawler</h1>
    <p>Crawl pages to see their HTML elements (headings, paragraphs, meta tags, links, etc.)</p>
  </>
);

export { Header };
