import axios from "axios";
import React, { useEffect, useState } from "react";
import apiURL from '../../config/config-url'
import {useHistory} from 'react-router-dom'

export const AddContact = () => {
        const {picture, handlepicture} = useState()
    const [firstName, setFirstName] = useState('');
    const [form, formData] = useState('');
    const [uri, setUri] = useState('');
    const [gambar, setgambar] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const[error, setError] = useState('');
    const[alert, setAlert] = useState('');
    let history = useHistory()
    const onChangeFirstName = (e) => {
        const value = e.target.value
        setFirstName(value)
        setError('')
    }
    const onChangeLastName = (e) => {
        const value = e.target.value
        setLastName(value)
        setError('')
    }
    const onChangeAge = (e) => {
        const value = e.target.value
        setAge(value)
        setError('')
    }
    const onClickIndx= (e) => {
        history.push('/')
    }
    // const onSubmit = (data)
    const tambahKontak = () => {
        const data = {
          firstName: firstName,
          lastName: lastName,
          age: age,
        // FormData : FormData 
        }
        // formData.append("picture",data.picture[0])
        console.log(data)
        axios.post(`${apiURL}`, data)
        .then(result => {
            if ( result ) {
                console.log(result.data)
                if (result.data) {
                    setFirstName('')
                    setLastName('')
                    setAge('')
                    setAlert(result.data.message)
                    history.push('/')
                    setTimeout (() => {
                        setAlert('')
                    }, 2500)
                }
            }
        })
        .catch (e => {
            setError(e.response.data.message)
        })
      }

        return (
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="mb-5 text-center">
                   

                    <label
                        for="fileInput"
                        type="button"
                        class="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
								Browse Photo
							</label>

                    <div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1" name="photo">Click to add profile picture</div>

                    <input name="picture" id="fileInput" accept="image/*" class="hidden" type="file" ref={picture} />
                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-lg font-bold mb-2" for="grid-first-name" >
                            First Name
      </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border 
                    border-red rounded py-3 px-4 mb-3"  id="grid-first-name" type="text"  value={firstName} onChange={onChangeFirstName}placeholder="Jane" />
                        <p class="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-lg font-bold mb-2" for="grid-last-name"  >

                            Last Name
      </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" value={lastName} onChange={onChangeLastName}/>
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6 w-1/11">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-lg font-bold mb-2" for="grid-password">
                            Age</label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="number" placeholder="" value={age} onChange={onChangeAge} />
                    </div>
                </div>
                <div class="mx-3 md:flex mb-6 text-lg ">
                    <button class="bg-white-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 p-3 rounded  gap-3 shadow-md" value="tambahKontak" onClick={tambahKontak}  >
                        Save
                </button>
                    {/* <button onclick={onClickIndx} class="bg-white-500 hover:bg-red-700 rounded p-3 ml-3 shadow-md ">
                        Cancel
                </button> */}
                </div>
            </div>

        )
    }