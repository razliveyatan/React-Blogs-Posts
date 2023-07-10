import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/home/homePage';
import ErrorPage from '../components/error/errorPage';
import { NavBar } from '../components/navBar/navbar';

const BlogPage = React.lazy(() => import ('../components/blog/blogPage'));
const PostPage = React.lazy(() => import ('../components/blog/post/postPage'));
const Loading = () => <p>Loading ...</p>;

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/blog" element={<BlogPage />} />        
        <Route path="/blog/:postName" element={<PostPage />} />        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;