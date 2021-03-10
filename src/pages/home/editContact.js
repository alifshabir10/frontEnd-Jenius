import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";
import apiURL from '../../config/config-url';

export const EditContact = (props) => {
    const [contact, setContact] = useState([]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const id = localStorage.getItem('id')
    let history = useHistory()

    const OnChangeFirstName = e => {
        const value = e.target.value
        setFirstName(value)
        setError('')
    }
    const OnChangeLastName = e => {
        const value = e.target.value
        setLastName(value)
        setError('')
    }

    const GetCont = async () => {
        const response = await axios.get(`${apiURL}/${id}`)
        return response.data
        console.log(response)

    }

    useEffect(() => {
        const getListCont = async () => {
            const listcont = await GetCont();
            console.log(listcont)
            if (listcont) {
                setFirstName(listcont.data.firstName);
                setLastName(listcont.data.lastName);
                setAge(listcont.data.age);
                setPhoto(listcont.data.photo);
                setContact(listcont)
            }
        }
        getListCont();
        console.log(contact)
    },[])

    const editCont = () => {
        // console.log(id)
        const data = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            photo: 'Belom bisa'
        }
        console.log(data)
        axios.put(`${apiURL}/${contact.data.id}`, data)
            .then(result => {
                if (result) {
                    console.log(result.data)
                    if (result.data) {
                        setFirstName('')
                        setLastName('')
                        setAge('')
                        setPhoto('')
                        setAlert(result.data.message)
                        history.push('/')
                        setTimeout(() => {
                            setAlert('')
                        }, 2500)
                    }
                }
            })
            .catch(e => {
                setError(e.response.data.message)
            })
    }


    return (
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div class="mb-5 text-center">
                <div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                </div>

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

                <div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

                <input name="photo" id="fileInput" accept="image/*" class="hidden" type="file" />
            </div>
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        First Name
      </label>
                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" value={firstName} name="firstName" onChange={OnChangeFirstName} />
                    <p class="text-red text-xs italic">Please fill out this field.</p>
                </div>
                <div class="md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
      </label>
                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" value={lastName} name="lastName" onChange={OnChangeLastName} />
                </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                        Age</label>
                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" value={age} name="age" />
                    <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div><div class="-mx-3 md:flex mb-6">
                <button value="editCont" onClick={editCont} class="md:w-full px-3">
                    Save
                </button>
                {/* <button onClick={onClickIndex} class="md:w-full px-3">
                    Cancel
                </button> */}
            </div>
        </div>

    )
}