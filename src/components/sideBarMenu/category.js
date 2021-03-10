// import { useState } from 'react';


export const TableCategory = props => {
    return (

        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-3">
            <br></br>
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div class="rounded-t mb-0 px-2 py-2 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-base text-gray-800">List Regions</h3>
                        </div>
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button onClick={() => props.setShowModal(true)}
                                class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                                type="button" >Add Category</button>
                        </div>
                    </div>
                </div>
                <div class="block w-full overflow-x-auto">
                    <table class="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th class="text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                                >Region Id
                                </th>
                                <th class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Region Name
                                </th>
                                <th class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center">
                                    Action
                                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.category.length > 0 ?
                                    props.category.map((cate, index) => {
                                        return (<tr key={cate.id}>
                                            <td className="text-center">{cate.cate_id}</td>
                                            <td>{cate.cate_name}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        props.setEdit(cate)
                                                    }}
                                                    className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Edit
                                    </button>

                                                <button

                                                    onClick={() => {
                                                        props.setDelete(cate.cate_id)
                                                    }}
                                                    // onClick={() => {
                                                    //     props.setRefreshTable(cate.cate_id)
                                                    // }}
                                                    className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                    Delete
                                    </button>


                                            </td>
                                        </tr>)
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
    )
}