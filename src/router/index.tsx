import { Routes, Route } from 'react-router-dom'

import { Home, Blog, Resources, Faq } from '../pages'

import Error from '../components/Error'

import "bootstrap/dist/css/bootstrap.min.css";




export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  )
}
