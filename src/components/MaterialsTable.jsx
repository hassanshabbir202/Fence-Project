import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";

const MaterialsTable = ({_route}) => {

    const indexOfFence = useSelector((state) => state.selectedMaterials.Fence_M.index);

	const indexOfOption_t1 = useSelector((state) => state.selectedMaterials.Option_M_t1.index);
	const indexOfOption_t2 = useSelector((state) => state.selectedMaterials.option_M_t2.index);

	// console.log("from Table option : ", a)

	// const indexOfOption = useSelector((state) => state.selectedMaterials.Option_M[0][0].index);

	// const indexOfOption2 = useSelector((state) => state.selectedMaterials.Option_M[1][0].index);


    const [activeRow_1 , setActiveRow_1] = useState(false);
	const [activeRow_2 , setActiveRow_2] = useState(false);
	const [activeRow_3 , setActiveRow_3] = useState(false);
	const [activeRow_4 , setActiveRow_4] = useState(false);
	const [activeRow_5 , setActiveRow_5] = useState(false);
	const [activeRow_6 , setActiveRow_6] = useState(false);
	const [activeRow_7 , setActiveRow_7] = useState(false);
	
	const CheckActivationRow = (index) => {
		if(index === 1){
			setActiveRow_1(true);
			setActiveRow_2(false);
			setActiveRow_3(false);
			setActiveRow_4(false);
			setActiveRow_5(false);
			setActiveRow_6(false);
			setActiveRow_7(false);
		}
		if(index === 2){
			setActiveRow_1(false);
			setActiveRow_2(true);
			setActiveRow_3(false);
			setActiveRow_4(false);
			setActiveRow_5(false);
			setActiveRow_6(false);
			setActiveRow_7(false);
		}
		if(index === 3){
			setActiveRow_1(false);
			setActiveRow_2(false);
			setActiveRow_3(true);
			setActiveRow_4(false);
			setActiveRow_5(false);
			setActiveRow_6(false);
			setActiveRow_7(false);
		}
		if(index === 4){
			setActiveRow_1(false);
			setActiveRow_2(false);
			setActiveRow_3(false);
			setActiveRow_4(true);
			setActiveRow_5(false);
			setActiveRow_6(false);
			setActiveRow_7(false);
		}
		if(index === 5){
			setActiveRow_1(false);
			setActiveRow_2(false);
			setActiveRow_3(false);
			setActiveRow_4(false);
			setActiveRow_5(true);
			setActiveRow_6(false);
			setActiveRow_7(false);
		}
		if(index === 6){
			setActiveRow_1(false);
			setActiveRow_2(false);
			setActiveRow_3(false);
			setActiveRow_4(false);
			setActiveRow_5(false);
			setActiveRow_6(true);
			setActiveRow_7(false);
		}
		if(index === 7){
			setActiveRow_1(false);
			setActiveRow_2(false);
			setActiveRow_3(false);
			setActiveRow_4(false);
			setActiveRow_5(false);
			setActiveRow_6(false);
			setActiveRow_7(true);
		}
	}

	useEffect(()=>{
			console.log()
			if(_route === "fence"){
				CheckActivationRow(indexOfFence + 1);
			}else if(_route === "option/t1"){
				CheckActivationRow(indexOfOption_t1 + 1);
			}else if(_route === "option/t2"){
				CheckActivationRow(indexOfOption_t2 + 1);
			}
	
	},[_route,indexOfFence,indexOfOption_t1,indexOfOption_t2]);

	return (
	<>
		{(_route === "fence") ? (<>
		<h1 className='w-full text-2xl p-3' >WOOD FENCE SELECTION GUIDE</h1>
		<table className='w-full h-96' >
			<tbody>
			<tr className='border border-black bg-green-700 text-white md:text-base text-xs'>
				<th className='border-black border text-center ' ></th>
				<th className='border-black border text-center md:text-base text-xs' >Cedar French Gothic</th>
				<th className='border-black border text-center md:text-base text-xs' >4'x8' Cedar Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs' >6'x8' Cedar Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs' >5'4"x8' Cedar Lattice Top</th>
				<th className='border-black border text-center md:text-base text-xs' >6'x8' Treated Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs' >6'x8' Treated Shadow Box</th>
				<th className='border-black border text-center md:text-base text-xs' >6'x8' Natural Stockade</th>
			</tr>							
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >treatment</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_6) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_7) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >nominalHeight</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_6) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_7) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >nominalWidth</th>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_6) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_7) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >picketMaterial</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_6) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_7) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >recommendedPost</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_6) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_7) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
			</tr>
			<tr className='border border-black '>	
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >recommendedPostSize</th>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_6) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_7) ? "bg-yellow-400" : "bg-white"} '`} >10'</td>
			</tr>
			<tr className='border border-black '>	
				<th className='border-black border text-center bg-green-700 text-white  md:text-base text-xs' >recommendedUse</th>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_6) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_7) ? "bg-yellow-400" : "bg-white"} '`} >Back Yard</td>
			</tr>
			</tbody>
		</table></>):("")}
		 {(_route === "option/t1") ? (<>
		<h1 className='w-full text-2xl p-3' >FENCE POST SELECTION GUIDE</h1>
		<table className='w-full h-96' >
			<tbody>
			<tr className='border border-black bg-green-700 text-white md:text-base text-xs'>
				<th className='border-black border text-center  w-13 ' ></th>
				<th className='border-black border text-center md:text-base text-xs ' >Cedar Pointed</th>
				<th className='border-black border text-center md:text-base text-xs ' >Cedar Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs ' >Cedar Gothic</th>
				<th className='border-black border text-center md:text-base text-xs ' >Treated Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs ' >Natural Wood</th>
			</tr>							
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >treatment</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >nominalHeight</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >nominalWidth</th>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
				<td className={`border-black border text-center md:text-base text-xs ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >96"</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >picketMaterial</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >Cedar</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >recommendedPost</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >Cedar 4x4</td>
			</tr>
			</tbody>
		</table></>) : ""}
		{(_route === "option/t2") ? (<>
		<h1 className='w-full text-2xl p-3' >FENCE POST SELECTION GUIDE</h1>
		<table className='w-full h-96' >
			<tbody>
			<tr className='border border-black bg-green-700 text-white md:text-base text-xs'>
				<th className='border-black border text-center  w-13 ' ></th>
				<th className='border-black border text-center md:text-base text-xs ' >Cedar Pointed</th>
				<th className='border-black border text-center md:text-base text-xs ' >Cedar Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs ' >Cedar Gothic</th>
				<th className='border-black border text-center md:text-base text-xs ' >Treated Dog Ear</th>
				<th className='border-black border text-center md:text-base text-xs ' >Natural Wood</th>
			</tr>							
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >treatment</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"} `} >None-Cedar</td>
			</tr>
			<tr className='border border-black '>
				<th className='border-black border text-center bg-green-700 text-white md:text-base text-xs' >nominalHeight</th>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_1) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_2) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_3) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_4) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
				<td className={`border-black border text-center md:text-base text-xs' ${(activeRow_5) ? "bg-yellow-400" : "bg-white"}`} >72"</td>
			</tr>
			</tbody>
		</table></>) : ""}
		
	</>
  )

}

export default MaterialsTable
