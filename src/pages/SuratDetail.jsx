import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logohome from '../assets/img/vuesax/linear/home.svg'
import logoright from '../assets/img/vuesax/linear/arrow-right.svg'
import logoleft from '../assets/img/vuesax/linear/arrow-left.svg'
import axios from 'axios'
import CardAyat from '../component/CardAyat'
import logoig from '../assets/img/vuesax/linear/Instagram.svg'
import logogithub from '../assets/img/vuesax/linear/GitHub.svg'

const SuratDetail = () => {
	const navigate = useNavigate()
	const [navbar, setNavbar] = useState(false)

	const [namaSurat, setNamaSurat] = useState('')
	const [jmlAyat, SetJmlAyat] = useState('')
	const [tempatSurat, setTempatSurat] = useState('')
	const [artiSurat, setArtiSurat] = useState('')
	const [ayatSurat, setAyatSurat] = useState([])
	const [suratSelanjutnya, setSuratSelanjutnya] = useState()
	const [suratSebelumnya, setSuratSebelumnya] = useState()

	const changeBackground = () => {
		if (window.scrollY >= 30) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	window.addEventListener('scroll', changeBackground)

	const { id } = useParams()
	const getDetailSurat = async () => {
		if (id <= 114) {
			const response = await axios.get(`https://equran.id/api/v2/surat/${id}`)
			const data = response.data.data
			setNamaSurat(data.namaLatin)
			SetJmlAyat(data.jumlahAyat)
			setTempatSurat(data.tempatTurun)
			setArtiSurat(data.arti)
			setAyatSurat(data.ayat)
			setSuratSelanjutnya(data.suratSelanjutnya.nomor)
			setSuratSebelumnya(data.suratSebelumnya.nomor)
		} else {
			navigate('/')
		}
	}

	useEffect(() => {
		getDetailSurat()
		// eslint-disable-next-line
	}, [])

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

						<div className="flex items-center gap-1 tablt:gap-2">
							{suratSebelumnya ? <img onClick={() => window.location.replace(`/surat/${suratSebelumnya}`)} src={logoleft} alt="left" className="cursor-pointer w-[15px] tablt:w-[25px] h-[15px] tablt:h-[25px]" /> : null}
							<h3 className="text-sm tablt:text-lg">{namaSurat}</h3>
							{suratSelanjutnya ? <img onClick={() => window.location.replace(`/surat/${suratSelanjutnya}`)} src={logoright} alt="right" className="cursor-pointer w-[15px] tablt:w-[25px] h-[15px] tablt:h-[25px]" /> : null}
						</div>

						<div className="cursor-pointer" onClick={() => navigate('/')}>
							<img src={logohome} alt="Back To Home" className="w-[15px] tablt:w-[25px] h-[15px] tablt:h-[25px] " />
						</div>
					</div>
				</div>
			</header>

			<div className="mt-24 tablt:mt-32 px-4 tablt:px-5 lptop:px-20 w-full">
				<div className="border-2 border-black/50 rounded-md w-full shadow-md overflow-hidden">
					<div className="w-full h-[5px] bg-[#0EBB87]"></div>
					<div className="flex py-3 moL:py-5 tablt:py-7 px-2 tablt:px-5  items-center w-full justify-between">
						<h2 className="text-[0.750rem] mlTtb:text-[0.900rem] tablt:text-[1.2rem]">{namaSurat}</h2>

						<h4 className="text-black/85 text-[0.750rem] mlTtb:text-[0.800rem] tablt:text-[0.900rem]">
							{tempatSurat + ' - '} {artiSurat} {' - ' + jmlAyat} Ayat
						</h4>
					</div>
				</div>

				<div className="border-2 mt-2 border-black/50 rounded-md w-full shadow-md overflow-hidden">
					<div className="flex py-3 px-2 items-center w-full justify-between">
						<div className="w-[20%] h-[2px] tablt:h-[4px] bg-[#0EBB87]/50 "></div>
						<p className="text-sm moL:text-lg mlTtb:text-2xl tablt:text-3xl mlTtb:my-1 tablt:my-3 font-ayat ">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
						<div className="w-[20%] h-[2px] tablt:h-[4px] bg-[#0EBB87]/50 "></div>
					</div>
				</div>
			</div>

			<div id="containerAyat" className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
				{ayatSurat.map((ayat, i) => {
					return <CardAyat key={i} data={ayat} jmlAyat={jmlAyat} />
				})}
			</div>

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
		</div>
	)
}

export default SuratDetail
