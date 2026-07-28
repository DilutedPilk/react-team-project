import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import ItemDetails from './pages/ItemDetails.jsx'
import NotFound from './pages/NotFound.jsx'
import { ThemeContext } from './context.js'
import api from './api.js'
import './styles/App.css'

api.getCats = async function (query) {
  try {
    const request = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${query}&api_key=${import.meta.env.VITE_API_URL}`)
    const result = await request.json();
    return result
  } catch (error) {
    console.log(error)
  }
}

function App() {
  const [items, setItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    api.getCats('').then(data => {
      if (data) {
        const mapped = data.map(cat => ({
          id: cat.id,
          thumbnail: cat.url,
          title: cat.breeds?.[0]?.name || 'Unknown Cat',
          description: cat.breeds?.[0]?.description || 'No description available.',
          url: cat.url,
        }))
        setItems(mapped)
      }
    })
  }, [])

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  function toggleFavorite(item) {
    setFavoriteItems(prev => {
      const exists = prev.some(fav => fav.id === item.id)
      if (exists) {
        return prev.filter(fav => fav.id !== item.id)
      } else {
        return [...prev, item]
      }
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home items={items.filter(item => !favoriteItems.some(fav => fav.id === item.id))} favoriteItems={favoriteItems} toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites favoriteItems={favoriteItems} toggleFavorite={toggleFavorite} />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
