import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BeneficiaryCard } from '../../../Components/BeneficiaryCard'

const fetchData = () => {
  return axios.get('/api/users/getuser')
}

const addBeneficiary = async (data) => {
  return await axios.post('/api/users/addbeneficiary', data)
}

const Transfer = () => {
  const toast = useToast()
  const [data, setdata] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [inputs, setInputs] = useState({ userName: '', accountNumber: '' })

  useEffect(() => {
    fetchData()
      .then(({ data }) => {
        setdata(data.user.beneficiary)
      })
      .catch((err) => console.log(err))
  }, [refresh])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputs.userName === '' || inputs.accountNumber === '') {
      return toast({
        title: 'Input error',
        description: 'Please fill all the required fields!',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
    }
    const res = await addBeneficiary({
      userName: inputs.userName,
      accountNumber: +inputs.accountNumber,
    })
    if (res.data.status === 1) {
      setRefresh(!refresh)
    }
  }

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row lg:p-16 lg:justify-between gap-10">
      <div className="lg:w-[49%] w-full p-4 border rounded-lg shadow-lg border-[#d7dfe5]">
        <div className="w-full">
          <h1 className="text-xl text-center">Add Beneficiary</h1>
        </div>
        <div>
          <form
            id="beneficiaryform"
            className="flex flex-col gap-2 p-4"
            autoSave="off"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label>Enter Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              onChange={({ target: { value } }) =>
                setInputs({ ...inputs, userName: value })
              }
            />
            <label>Enter Bank Name</label>
            <input type="text" placeholder="Bank Name" />
            <label>Enter Account Number</label>
            <input
              type="text"
              placeholder="Account Number"
              onChange={({ target: { value } }) =>
                setInputs({ ...inputs, accountNumber: value })
              }
            />
            <label>Confirm Account Number</label>
            <input type="text" placeholder="Account Number" />
            <label>Enter IFSC Code</label>
            <input type="text" placeholder="IFSC Code" />
            <input type="submit" value={'Add Beneficiary'} />
          </form>
        </div>
      </div>
      <div className="lg:w-[49%] w-full p-4 border rounded-lg shadow-lg border-[#d7dfe5]">
        <div className="w-full">
          <h1 className="text-xl text-center">My Beneficiaries</h1>
        </div>
        <div className="mt-[21px]">
          {data?.map((el) => (
            <BeneficiaryCard {...el} key={el.id} />
          ))}
        </div>
        <Link href={'/retail/transfer/beneficiary'}>
          <div className="border w-full text-center py-[6px] px-3 border-[#d7dfe5] bg-[#d7dfe5] hover:bg-[#c2c8cd] rounded-md transition-all duration-300">
            All Beneficiaries
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Transfer
