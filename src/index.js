import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Pages
import { Home } from './pages/Home'
import SuratDetail from './pages/SuratDetail'
import Dzikir from './pages/Dzikir'
import About from './pages/About'

// Router
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'surat/:id',
		element: <SuratDetail />,
	},
	{
		path: '/dzikir',
		element: <Dzikir />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '*',
		element: <NotFound />,
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
