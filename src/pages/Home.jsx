import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import { Link } from 'react-router-dom'

// img
import logo from '../assets/img/vuesax/linear/search-normal.svg'
import logogrid from '../assets/img/vuesax/linear/grid-1.svg'
import logorow from '../assets/img/vuesax/linear/row-vertical.svg'
import logoig from '../assets/img/vuesax/linear/Instagram.svg'
import logogithub from '../assets/img/vuesax/linear/GitHub.svg'

// comp
import CardRowSurat from '../component/CardRowSurat'
import CardSurat from '../component/CardSurat'

export const Home = () => {
	const [navbar, setNavbar] = useState(false)
	const [navToggle, setNavToggle] = useState(false)
	const [rowOrgrid, setRowOrGrid] = useState(false)
	const [loading, setLoading] = useState(false)
	const [hide, setHide] = useState(false)
	const override = {
		display: 'block',
		margin: '50px auto',
		border: '4px solid #0EBB87',
		animationDuration: '1s',
	}

	const [surats, setSurats] = useState([])
	const [resSearch, setResSearch] = useState([])

	const search = async (value) => {
		setLoading(true)
		const response = await axios.get('https://equran.id/api/v2/surat')
		const data = response.data.data
		setResSearch(data)
		if (value === undefined) {
			setSurats(data)
		}

		let matches = resSearch.filter((nama) => {
			const regex = new RegExp(`^${value}`, 'gi')
			return nama.namaLatin.match(regex)
		})
		if (matches.length === 0) {
			setHide(true)
		} else {
			setHide(false)
		}
		setSurats(matches)
		setLoading(false)
	}

	const getSurats = async () => {
		try {
			setLoading(true)
			const response = await axios.get('https://equran.id/api/v2/surat')
			const data = response.data.data
			setSurats(data)
			setLoading(false)
		} catch (error) {
			console.log('🚀 ~ file: Home.jsx:23 ~ getSurats ~ error:', error)
		}
	}

	useEffect(() => {
		getSurats()
		console.log(document)
		// eslint-disable-next-line
	}, [])

	const changeBackground = () => {
		if (window.scrollY >= 30) {
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
		<div className='w-full font-["inter"]'>
			<header className="fixed z-50 top-0 right-0 left-0">
				<div className="w-full h-2 bg-[#0EBB87]"></div>
				<div
					className={
						navbar
							? 'px-4 bg-white  tablt:px-5 lptop:px-20 w-full rounded-b-xl border-b shadow-sm border-black/20 transition duration-200 '
							: 'px-4 bg-white  tablt:px-5 w-full lptop:px-20 rounded-b-xl'
					}
				>
					<div className="flex h-full py-5 tablt:py-7 justify-between items-center">
						<h1  className="font-semibold text-sm tablt:text-2xl cursor-pointer ">
							Muslim
							<span className="text-[#ff0000]">Dot</span>
							Com
						</h1>

						<nav className="tablt:flex gap-5 hidden">
							<Link to="/" className="border-b-2  border-[#0EBB87] text-[#0EBB87]  transition duration-100">
								Quran
							</Link>
							<Link to="/dzikir" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
								Dzikir
							</Link>
							<Link to="/about" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
								About
							</Link>
						</nav>

						<div className="relative z-10">
							<input
								onChange={({ target }) => search(target.value)}
								className="border  text-black/80 text-sm pr-8 border-black/50 pl-3 w-32 moM:w-44 moL:w-52 mlTtb:w-72  py-1 focus:outline-none focus:border-black/70 rounded-[4px]"
								type="text"
								placeholder="Cari Surat"
							/>
							<img src={logo} alt="seacrh" className="absolute z-10 right-2 top-[20%] " />
						</div>

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
						<Link to="/" className="border-b-2  border-[#0EBB87] text-[#0EBB87] transition duration-100">
							Quran
						</Link>
						<Link to="/dzikir" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
							Dzikir
						</Link>
						<Link to="/about" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
							About
						</Link>
					</nav>
				</div>
			</header>

			<div className="mt-28 tablt:mt-40 px-4 tablt:px-5 lptop:px-20 w-full flex justify-between">
				<h1 className="font-medium text-md tablt:text-2xl ">QuranApp</h1>

				<div className="flex gap-2">
					<img src={logorow} onClick={() => setRowOrGrid(true)} className="cursor-pointer opacity-80 w-[20px] tablt:w-[28px] stroke-orange-300" alt="row" />
					<img src={logogrid} onClick={() => setRowOrGrid(false)} className="cursor-pointer opacity-80 w-[20px] tablt:w-[28px]" alt="grid" />
				</div>
			</div>

			{!rowOrgrid ? (
				<div className="mt-4 px-4 tablt:px-5 lptop:px-20 w-full flex flex-wrap justify-center ">
					{loading ? (
						<ClipLoader size={45} color="0ebbb7" cssOverride={override} />
					) : (
						surats.map((surat, i) => {
							return <CardSurat key={i} data={surat} />
						})
					)}
				</div>
			) : (
				<div className="mt-8 px-4 tablt:px-5 lptop:px-20 w-full flex flex-col gap-2">
					{surats.map((surat, i) => {
						return <CardRowSurat key={i} data={surat} />
					})}
				</div>
			)}

			{loading || hide ? null : (
				<div className="px-4 mt-6 tablt:px-5 lptop:px-20 w-full">
					<div className="w-full h-[45px] bg-[#0EBB87] rounded-lg mb-4 flex justify-center items-center gap-2 shadow-md">
						<a href="https://instagram.com/rizkyyaal" target="_blank" rel="noreferrer">
							<img src={logoig} alt="ig" className="cursor-pointer w-[22px] h-[22px]" />
						</a>
						<a href="https://github.com/IkkYa" target="_blank" rel="noreferrer">
							<img src={logogithub} alt="github" className="cursor-pointer w-[22px] h-[22px]" />
						</a>
					</div>
				</div>
			)}
		</div>
	)
}
