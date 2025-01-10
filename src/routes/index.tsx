import { Routes, Route } from 'react-router-dom'
import { PageHome, PageLayout, PageComentario } from '../pages'


export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/comentario" element={<PageComentario />} />
      </Route>
    </Routes>
  )
}