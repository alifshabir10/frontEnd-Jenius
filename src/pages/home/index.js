import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import apiURL from '../../config/config-url'

export const Home = () => {
	const [Contact, setContact] = useState([])
	let history = useHistory()
	const onClickAddContact = () => {
		history.push('/add')
	}
	const onClickEditContact = (id) => {
		history.push('/edit')
		localStorage.setItem('id', id)
	}

	console.log(Contact)

	useEffect(() => {
		fetchCont()
	}, [])

	async function fetchCont() {
		return await axios({
			url: `${apiURL}`,
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				setContact(res.data)
			})
			.catch((err) => console.error(err));
	}
	useEffect(() => {
		const getListCont = async () => {
			const listCont = await fetchCont();
			if (listCont) setContact(listCont)
		}
		getListCont();
	},
		[])

	async function delCont() {
		return await axios({
			url: `${apiURL}`,
			method: "delete",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				setContact(res.data)
			})
			.catch((err) => console.error(err));
	}


	const onDeleteRow = (value) => {
		delCont(value).then(response => {
			console.log(response);
			// this.onRefreshTable()
		}).catch(function (error) {
			console.log(error)
			console.log(error);
		})
	}

	const deleteCont = async (id) => {
		const response = await axios.delete(`${apiURL}/${id}`)
        return response.data
	}



	return (
		<>
			<div class="container md:mx mx-auto px-4 sm:px-8">
				<div class="py-8">
					<div>
						<h2 class="text-2xl font-semibold leading-tight">List Contact</h2>
					</div>
					<div class="my-2 flex sm:flex-row flex-col end">
						<div class="block relative ">
							<button type="button" 
								onClick={onClickAddContact} class=" focus:outline-none text-white text-lg py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg flex items-center">
								
                        Add Contact
                    </button>
						</div>
					</div>
					<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table class="min-w-full leading-normal">
								<thead>
									<tr>
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
											Firts Name
                                </th>
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
											Last Name
                                </th>
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
											Age
                                </th>
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
											Photo
                                </th>
										<th
											class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
											Action
                                </th>
									</tr>
								</thead>
								<tbody>
									{
										Contact.data ?
											Contact.data.map((cont, index) => {
												return (
													<tr key={cont.id} >
														<td class="px-5 py-5 bg-white text-lg">
															<div class="flex items-center">
																<div class="ml-3">
																	<p class="text-gray-900 whitespace-no-wrap">
																		{cont.firstName}
																	</p>
																</div>
															</div>
														</td>
														<td class="px-5 py-5 bg-white text-lg">
															<p class="text-gray-900 whitespace-no-wrap">{cont.lastName}</p>
														</td>
														<td class="px-5 py-5 bg-white text-lg">
															<p class="text-gray-900 whitespace-no-wrap">{cont.age}</p>
														</td>
														<td class="px-5 py-5 bg-white text-lg">
															<img class="relative h-20 w-20" src={cont.photo === "N/A" ? "01.png" : cont.photo}/>
														</td>
														<td class="px-5 py-5 bg-white text-lg">
															{/* <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span> */}
															<button onClick={() => onClickEditContact(cont.id)}  class="text-black-400 rounded hover:text-black-600  border shadow-sm p-4">Edit</button>
															<button onClick={() => {
																deleteCont(cont.id)
															}}  class="text-black-400  hover:text-black-600 rounded border  shadow-sm ml-3 pl-6 p-4">Remove</button>
														</td>
													</tr>
												)
											}) :
											<tr>
												<td colSpan={3}>No Records Found.</td>
											</tr>
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}