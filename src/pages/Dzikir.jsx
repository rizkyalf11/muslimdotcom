import React, { useState } from 'react'
import logoswitch from '../assets/img/vuesax/linear/repeat-circle.svg'
import logoig from '../assets/img/vuesax/linear/Instagram.svg'
import logogithub from '../assets/img/vuesax/linear/GitHub.svg'
import { Link, useNavigate } from 'react-router-dom'

const Dzikir = () => {
	const [navbar, setNavbar] = useState(false)
	const [navToggle, setNavToggle] = useState(false)
	const [dzikir, setDzikir] = useState(false)
	const navigate = useNavigate()

	const hdlChangeDzikir = () => {
		if (!dzikir) {
			setDzikir(true)
		} else {
			setDzikir(false)
		}
	}

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
							<Link to="/dzikir" className="border-b-2 border-[#0EBB87] text-[#0EBB87] transition duration-100">
								Dzikir
							</Link>
							<Link to="/about" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
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
						<Link to="/dzikir" className="border-b-2 border-[#0EBB87] text-[#0EBB87] transition duration-100">
							Dzikir
						</Link>
						<Link to="/about" className="border-b-2 border-green-300/0 hover:border-b-2 hover:border-[#0EBB87] hover:text-[#0EBB87] transition duration-100">
							About
						</Link>
					</nav>
				</div>
			</header>

			<div className="mt-28  items-center tablt:mt-40 px-4 tablt:px-5 lptop:px-20 w-full flex justify-between">
				<h1 className="font-medium text-md tablt:text-2xl">{!dzikir ? 'Dzikir Pagi' : 'Dzikir Petang'}</h1>

				<div onClick={() => hdlChangeDzikir()} className="hover:scale-105 transition-transform duration-200 cursor-pointer flex gap-2 border tablt:border-2 p-1 rounded-md border-black/50 shadow-sm tablt:shadow-md items-center">
					<p className="text-[0.600rem] tablt:text-sm">{dzikir ? 'Dzikir Pagi' : 'Dzikir Petang'}</p>
					<img src={logoswitch} alt="Switch" className="w-[15px] tablt:w-[20px] h-[15px] tablt:h-[20px]" />
				</div>
			</div>

			{!dzikir ? (
				<>
					{/* Dzikir Pagi */}
					<div className="mt-4 tablt:mt-8 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="overflow-hidden border-2 border-black/50 shadow-md rounded-md">
							<div className="w-full h-1 bg-[#0EBB87]"></div>
							<p className="text-[0.600rem] moL:text-[0.800rem] tablt:text-[0.930rem] lptop:text-[1.1rem] text-center p-2 moL:p-4 tablt:p-6 lptop:p-8">
								Dzikir pagi berikut patut diamalkan karena akan membuat kita lebih semangat di pagi hari dan dimudahkan Allah dalam segala urusan. Untuk waktunya, yang utama dibaca saat masuk waktu Shubuh hingga matahari terbit. Namun boleh
								juga dibaca sampai matahari akan bergeser ke barat (mendekati waktu Zhuhur).
							</p>
						</div>
					</div>
					<div className="mt-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow-md rounded-md">
							<p className="text-[0.900rem] moL:text-2xl tablt:text-3xl lptop:text-4xl text-center p-2 moL:p-3 tablt:p-4 lptop:p-6">أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</p>
						</div>
					</div>
					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">1</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca Ayat Kursi</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ
								وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ
							</p>
						</div>
					</div>
					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">2</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca surat Al Ikhlas, Al Falaq, An Naas</p>
							</div>
						</div>
					</div>
					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-[95%] ml-auto">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem] bg-[#0ebb8758] p-1 rounded-md">Al Ikhlas *3X</p>
							</div>

							<p className="text-center mt-2 mb-4 tablt:mb-7 font-ayat text-black/80 moL:text-lg tablt:text-xl lptop:text-2xl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
							<p className="text-center font-ayat moL:text-xl tablt:text-2xl lptop:text-3xl p-2 tablt:p-4">قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ</p>
						</div>
					</div>
					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-[95%] ml-auto">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem] bg-[#0ebb8758] p-1 rounded-md">Al Falaq *3X</p>
							</div>

							<p className="text-center mt-2 mb-4 tablt:mb-7 font-ayat text-black/80 moL:text-lg tablt:text-xl lptop:text-2xl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
							<p className="text-center font-ayat moL:text-xl tablt:text-2xl lptop:text-3xl p-2 tablt:p-4">
								قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
							</p>
						</div>
					</div>
					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-[95%] ml-auto">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem] bg-[#0ebb8758] p-1 rounded-md">An Nass *3X</p>
							</div>

							<p className="text-center mt-2 mb-4 tablt:mb-7 font-ayat text-black/80 moL:text-lg tablt:text-xl lptop:text-2xl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
							<p className="text-center font-ayat moL:text-xl tablt:text-2xl lptop:text-3xl p-2 tablt:p-4">
								قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ
							</p>
						</div>
					</div>
					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">3</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا
								الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي
								الْقَبْرِ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">4</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">5</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca Sayyidul Istighfar</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ
								بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ.
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">6</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">7</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ
								رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">8</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ
								وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">9</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *3X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">10</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *3X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">11</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">12</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ، حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ
								الْمُشْرِكِيْنَ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">13</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *100X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">سُبْحَانَ اللهِ وَبِحَمْدِهِ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">14</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *10X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">15</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *100X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">16</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *3X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">17</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">18</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *100X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ</p>
						</div>
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
				</>
			) : (
				<>
					{/* Dzikir Petang */}
					<div className="mt-4 tablt:mt-8 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="overflow-hidden border-2 border-black/50 shadow-md rounded-md">
							<div className="w-full h-1 bg-[#0EBB87]"></div>
							<p className="text-[0.600rem] moL:text-[0.800rem] tablt:text-[0.930rem] lptop:text-[1.1rem] text-center p-2 moL:p-4 tablt:p-6 lptop:p-8">
								Dzikir petang berikut patut diamalkan karena akan membuat kita lebih semangat di petang hari dan dimudahkan Allah dalam segala urusan serta dihindarkan dari berbagai bahaya. Untuk waktunya, menurut pendapat yang paling tepat
								adalah dari tenggelam matahari atau waktu Maghrib hingga pertengahan malam. Pertengahan malam dihitung dari waktu Maghrib hingga Shubuh, taruhlah sekitar 10 jam, sehingga pertengahan malam sekitar jam 11 malam.
							</p>
						</div>
					</div>

					<div className="mt-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow-md rounded-md">
							<p className="text-[0.900rem] moL:text-2xl tablt:text-3xl lptop:text-4xl text-center p-2 moL:p-3 tablt:p-4 lptop:p-6">أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">1</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca Ayat Kursi</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ
								وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">2</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca surat Al Ikhlas, Al Falaq, An Naas</p>
							</div>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-[95%] ml-auto">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem] bg-[#0ebb8758] p-1 rounded-md">Al Ikhlas *3X</p>
							</div>

							<p className="text-center mt-2 mb-4 tablt:mb-7 font-ayat text-black/80 moL:text-lg tablt:text-xl lptop:text-2xl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
							<p className="text-center font-ayat moL:text-xl tablt:text-2xl lptop:text-3xl p-2 tablt:p-4">قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-[95%] ml-auto">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem] bg-[#0ebb8758] p-1 rounded-md">Al Falaq *3X</p>
							</div>

							<p className="text-center mt-2 mb-4 tablt:mb-7 font-ayat text-black/80 moL:text-lg tablt:text-xl lptop:text-2xl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
							<p className="text-center font-ayat moL:text-xl tablt:text-2xl lptop:text-3xl p-2 tablt:p-4">
								قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-[95%] ml-auto">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem] bg-[#0ebb8758] p-1 rounded-md">An Nass *3X</p>
							</div>

							<p className="text-center mt-2 mb-4 tablt:mb-7 font-ayat text-black/80 moL:text-lg tablt:text-xl lptop:text-2xl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
							<p className="text-center font-ayat moL:text-xl tablt:text-2xl lptop:text-3xl p-2 tablt:p-4">
								قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَ النَّاسِ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">3</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ
								اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي
								الْقَبْرِ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">4</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">5</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca Sayyidul Istighfar</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ
								بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ.
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">6</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">7</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ
								رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">8</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ
								وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">9</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *3X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">10</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *3X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">رَضِيْتُ بِاللهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">11</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">
								يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا
							</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">12</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *100X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">سُبْحَانَ اللهِ وَبِحَمْدِهِ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">13</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *10X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ</p>
						</div>
					</div>

					<div className="my-2 px-4 tablt:px-5 lptop:px-20 w-full">
						<div className="border-2 border-black/50 shadow md rounded-md p-2 moL:p-3 lptop:p-5">
							<div className="flex items-center gap-2">
								<div id="cricle" className="w-[20px] moL:w-[25px] tablt:w-[30px] h-[20px] moL:h-[25px] tablt:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
									<p className="text-[0.700rem] moL:text-[1rem] tablt:text-[1.2rem]">14</p>
								</div>
								<p className="text-[0.700rem] moL:text-[0.850rem] tablt:text-[0.950rem]">Membaca *3X</p>
							</div>

							<p className="my-3 moL:my-5 font-ayat text-center moL:text-xl tablt:text-2xl lptop:text-3xl">أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ</p>
						</div>
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
				</>
			)}
		</div>
	)
}

export default Dzikir
