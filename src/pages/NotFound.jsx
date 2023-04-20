import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className='flex flex-col items-center'>
				<h1>404</h1>
				<p>Not Found</p>
			</div>
		</div>
	)
}

export default NotFound
