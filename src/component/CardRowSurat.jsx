import React from 'react'
import {useNavigate} from 'react-router-dom'

const CardRowSyrat = (props) => {
	const navigate = useNavigate()

  return (
		<div onClick={() => navigate(`/surat/${props.data.nomor}`)} className="bg-white border-2 border-black/50 rounded-md shadow-md p-2 moL:p-5 flex justify-between items-center hover:scale-105 transition-transform duration-200">
			<div id="cricle" className="w-[20px] moL:w-[30px] h-[20px]  moL:h-[30px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
				<p className="text-[0.700rem] moL:text-[0.900rem]">{props.data.nomor}</p>
			</div>

			<div className="flex flex-col items-end">
				<h4 className="font-medium text-[.800rem] moL:text-[1rem]  ">{props.data.namaLatin}</h4>
				<p className="opacity-80  text-[0.500rem] moL:text-[.8rem] ">{props.data.arti}</p>
			</div>

		</div>
	)
}

export default CardRowSyrat