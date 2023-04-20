import React, { useState } from 'react'
import me from '../assets/img/me.png'
import logoig from '../assets/img/vuesax/linear/Instagram.svg'
import logogithub from '../assets/img/vuesax/linear/GitHub.svg'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
	const [navbar, setNavbar] = useState(false)
	const [navToggle, setNavToggle] = useState(false)
	const navigate = useNavigate()

	const changeBackground = () => {
		if (window.scrollY >= 0) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	window.addEventListener('scroll', changeBackground)

	const hdlNavToggle = () => {
		if (navToggle === false) {
			setNavToggle(true)
		} else {
			setNavToggle(false)
		}
	}
	return (
		<div className="w-full font-inter">
			<header className="fixed z-50 top-0 right-0 left-0">
				<div className="w-full h-2 bg-[#0EBB87]"></div>
				<div className={navbar ? 'px-4 bg-white tablt:px-5 lptop:px-20 w-full rounded-b-xl border-b shadow-sm border-black/20 transition duration-200 ' : 'px-4 bg-white tablt:px-5 w-full lptop:px-20 rounded-b-xl'}>
					<div className="flex h-full py-5 tablt:py-7 justify-between items-center">
						<h1 onClick={() => navigate('/')} className="font-semibold text-sm tablt:text-2xl cursor-pointer">
							Muslim
							<span className="text-[#ff0000]">Dot</span>
							Com
						</h1>

						<nav className="tablt:flex gap-5 hidden">
							<Link to="/" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
								Quran
							</Link>
							<Link to="/dzikir" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
								Dzikir
							</Link>
							<Link to="/about" className="border-b-2 border-[#0EBB87] text-[#0EBB87] transition duration-100">
								About
							</Link>
						</nav>

						<div id="toggle" onClick={hdlNavToggle} className="tablt:hidden cursor-pointer flex flex-col h-[20px] justify-between">
							<span
								className={
									!navToggle ? 'transition-transform duration-200 block w-6 h-[2.5px] rounded-sm bg-black origin-top-left' : 'transition-transform duration-200 block w-6 h-[2.5px] rounded-sm bg-black origin-top-left rotate-[45deg]'
								}
							></span>
							<span className={!navToggle ? 'transition-transform duration-200 block w-6 h-[2.5px] rounded-sm bg-black' : 'transition-all duration-200 block w-6 h-[2.5px] scale-0 rounded-sm bg-black/0'}></span>
							<span
								className={
									!navToggle
										? 'transition-transform duration-200 block w-6 h-[2.5px] rounded-sm bg-black origin-bottom-left'
										: 'transition-transform duration-200 block w-6 h-[2.5px] rounded-sm bg-black origin-bottom-left rotate-[-45deg] translate-y-[-1px]'
								}
							></span>
						</div>
					</div>
				</div>

				<div
					className={
						navToggle
							? 'tablt:hidden fixed transition-all duration-300 left-[10%] top-20 py-5 bg-white border-black/50 z-0 border-2 shadow-sm w-[80%] rounded-md '
							: ' tablt:hidden fixed left-[100%] transition-all duration-300 top-20 py-5 bg-white border-black/50 z-0 border-2 shadow-sm w-[80%] rounded-md '
					}
				>
					<nav className="flex flex-col items-center gap-5 ">
						<Link to="/" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
							Quran
						</Link>
						<Link to="/dzikir" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
							Dzikir
						</Link>
						<Link to="/about" className="border-b-2 border-[#0EBB87] text-[#0EBB87] transition duration-100">
							About
						</Link>
					</nav>
				</div>
			</header>

			<div className="px-4 tablt:px-5 lptop:px-20 w-full mt-24 min-[760px]:mt-36 flex flex-col items-center justify-center">
				<div className="border-2 border-black/50 rounded-md shadow-md p-2 flex flex-col items-center max-w-[260px] moL:max-w-[320px] tablt:max-w-[430px]">
					<img src={me} alt="Meeee" />

					<p className="text-center text-[.800rem] text-black/70">hallo nama saya rizky alfiansyah saya berumur 15 tahun</p>

					<div className="flex gap-2 my-4">
						<a href="https://instagram.com/rizkyyaal" target="_blank" rel="noopener noreferrer">
							<img src={logoig} alt="Istagram" className="w-[20px] h-[20px]" />
						</a>
						<a href="https://github.com/IkkYa" target="_blank" rel="noopener noreferrer">
							<img src={logogithub} alt="Github" className="w-[20px] h-[20px]" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
