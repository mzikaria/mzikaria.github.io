import { Routes, Route } from "react-router-dom";

import './app.css';

import Footer from './components/footer';
import Home from './components/pages/home';
import Layout from './components/layout';
import Logo from './components/logo';
import Navigation from './components/navigation';
import NoMatch from './components/pages/no-match';

const App = () => {
  const pages = [
    {
      name: 'Home',
      path: '/',
      element: <Home />
    },
    {
      name: null,
      hidden: true,
      path: '*',
      element: <NoMatch />
    }
  ]

  const links = [
    {
      'title': 'About',
      'id': '#about'
    },
    {
      'title': 'Projects',
      'id': '#projects'
    },
    {
      'title': 'Work',
      'id': '#work'
    }
  ]

  return (
    <div id="app" className="p-5 w-full">
      <Layout className="justify-between mb-4" section="top">
        <Logo />
        <Navigation links={links} />
      </Layout>
      <Layout section="middle">
        <Routes>
          {pages.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
      <Layout section="bottom">
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
