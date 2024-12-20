import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserModal from '../../components/Adim/usermodal'

const ManageUsers = () => {
    const [users,setusers]=useState([])
    const [showModal, setShowModal] = React.useState(false);
    const [userId,setuserId]=useState()

   const closemodal=()=>{
    setShowModal(false)
   }

   const clickhandle=(id)=>{
    setShowModal(true)
    setuserId(id)
   }

    useEffect(()=>{ 
        const fetchusers=async()=>{
            try {
                const response=await axios.get('http://localhost:8080/api/admin/users',{withCredentials:true})
                setusers(response.data.data)
            } catch (error) {
                console.log(error,'error to fetch users');
            }
        }
        fetchusers()
    },[])
  return (
    <div>
        <table className="table-auto border-collapse border border-gray-300 w-3/4 shadow-md">
        <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">NO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">email</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">created_Date</th>
                </tr>
              </thead>
              <tbody >
                {
                    users.map((data:any,index)=>{
                          const createddate=new Date(data.createdAt).toLocaleDateString()
                    return(
                      <tr key={data._id} className="hover:bg-gray-100" onClick={()=>clickhandle(data._id)}>
                      <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {data.username}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                      <td className="border border-gray-300 px-4 py-2">{createddate}</td>
                    </tr>
            )   
       })

    }
              </tbody>
          </table>
          <UserModal
          isopen={showModal}
          onclose={closemodal}
          userId={userId}
          />
    </div>
  )
}

export default ManageUsers