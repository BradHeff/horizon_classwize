import React from 'react';
import Main from '../Components/Main/Main';
import Layout from '../HOC/Layout'
const Home = (props) => {
  return (
        <Layout>
           <Main status={props.status}/>
        </Layout>
  );
}

export default Home;