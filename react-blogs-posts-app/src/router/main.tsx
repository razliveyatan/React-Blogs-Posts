import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/home/homePage';
import BlogPage from '../components/blog/blogPage';
import PostPage from '../components/post/postPage';
import ErrorPage from '../components/error/errorPage';

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/blog/:blogId/post/:postId" element={<PostPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;