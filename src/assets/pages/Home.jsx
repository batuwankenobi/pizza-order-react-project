import React from 'react';
import Content from "../components/Content";
import Footers from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
	  <>
	    <Head />
	    <Header />
	    <Navbar />
	    <Content />
	    <Footers />
	  </>
	);
    };
    
    export default Home;