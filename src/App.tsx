import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Navbar from './components/navbar'
import Account from './pages/account'
import LoadingScreen from './components/loadingscreen'
import { productPhotos } from './data/productphoto'

function preloadImages(
  urls: string[],
  onProgress: (p: number) => void
) {
  let loaded = 0

  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = async () => {
            try {
              await img.decode()
            } catch {
            }

            loaded++
            onProgress(Math.round((loaded / urls.length) * 100))
            resolve()
          }

          img.onerror = () => {
            loaded++
            onProgress(Math.round((loaded / urls.length) * 100))
            resolve()
          }

          img.src = url
        })
    )
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    preloadImages(
      productPhotos.map((p) => p.src),
      setProgress
    ).then(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <LoadingScreen progress={progress} />
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}

export default App