import React from 'react'

const CardAyat = (props) => {
  return (
		<div className="mb-1 tablt:mb-3 flex flex-col overflow-hidden border-2 border-black/50 rounded-md w-full shadow-md ">
			<div className="rounded-br-md w-16 moL:w-20 mlTtb:w-20 tablt:w-32  h-4 mlTtb:h-7 tablt:h-9 flex items-center justify-center bg-[#0EBB87]/50">
				<p className="text-[0.500rem] moL:text-[0.600rem] mlTtb:text-[0.750rem] tablt:text-[1rem]">
					Ayat {props.data.nomorAyat}:{props.jmlAyat}
				</p>
			</div>

			<h3 className="text-right font-ayat self-end px-2 text-xl moL:text-2xl mlTtb:text-3xl tablt:text-4xl my-4 moL:my-6 mlTtb:my-8 tablt:my-10">{props.data.teksArab}</h3>

			<p className="px-2 text-[0.550rem] moL:text-[0.600rem] mlTtb:text-[0.800rem] tablt:text-[0.950rem] my-1 text-black/90">{props.data.teksLatin}</p>
			<hr className="w-[95%] mx-auto" />
			<p className="px-2 text-[0.500rem] moL:text-[0.550] mlTtb:text-[0.750rem] tablt:text-[0.850rem] text-black/80 my-1">{props.data.teksIndonesia}</p>
		</div>
	)
}

export default CardAyat