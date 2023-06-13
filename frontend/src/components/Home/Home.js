/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Container } from '@material-ui/core';
import { Header, SearchBar, Feed } from './components';

import agent from '../../agent/agent';

const Home = () => {
  const [sites, setSites] = useState([]);

  const onSearch = async url => {
    const response = await agent.Crawler.crawl(url);
    if (response.creationDate) {
      setSites([...sites, response]);
    }
  };

  const onDelete = async url => {
    const response = await agent.Crawler.delete(url);
    //handle remove from ui
    console.log(response);
  };

  useEffect(() => {
    agent.Crawler.getHistory()
      .then(res => {
        setSites(res);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <Container className='main'>
      <Header />
      <SearchBar onSearch={onSearch} />
      <Feed sites={sites} onDelete={onDelete} />
    </Container>
  );
};

export default Home;
