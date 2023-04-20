import React from 'react'
import {useNavigate} from 'react-router-dom'

const CardSurat = (props) => {
  const navigate = useNavigate()

	return ( 
		<div onClick={() => navigate(`/surat/${props.data.nomor}`)} className="w-[50%] mlTtb:w-1/3 tablt:w-1/4 lptop:w-1/5 h-[90px] mlTtb:h-[100px] lptop:h-[120px] p-[2px]  hover:scale-105 transition-transform duration-200">
			<div className="w-full h-full bg-white border-2 border-black/50 rounded-md shadow-md p-2 flex flex-col justify-between ">
				<div id="cricle" className="w-[20px] tablt:w-[22px] h-[20px] tablt:h-[22px] bg-[#0ebb8758] rounded-full flex items-center justify-center ">
					<p className="text-[0.700rem]">{props.data.nomor}</p>
				</div>

				<div className="flex flex-row justify-between items-center">
					<div>
						<h4 className="font-medium text-[.800rem] tablt:text-[1rem] ">{props.data.namaLatin}</h4>
						<p className="opacity-80  text-[0.500rem] tablt:text-[0.700rem]">{props.data.arti}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardSurat
