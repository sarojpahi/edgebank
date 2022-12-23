import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, useToast } from '@chakra-ui/react'

type ResponseDataType = {
  status: number
  message: string
}

type ResponseType = {
  data: ResponseDataType
}

const Verify = () => {
  const router = useRouter()
  const toast = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const [otp, setOtp] = useState<string>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = (await axios.post('/api/user_auth/register', {
        verificationOtp: otp,
        verification: 'yes',
      })) as ResponseType
      if (res.data.status === 1) {
        setLoading(false)
        toast({
          position: 'top',
          title: 'Account Info!',
          description: 'account has been successfully created!',
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        router.replace('/login')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      return toast({
        position: 'top',
        title: 'Register error!',
        description: 'registration failed!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <div className="lg:h-[calc(100vh-60px)] h-[calc(60vh+60px)] relative">
      <div className="w-full h-[50%] bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-500"></div>
      <div className="absolute top-[50%]  left-[50%] translate-x-[-50%]  translate-y-[-50%] bg-white rounded-lg shadow-md px-4">
        <div className="flex lg:flex-row  lg:justify-between justify-center flex-col">
          <div className="flex flex-col w-max justify-center items-center py-4">
            <h3 className="text-2xl cursor-default whitespace-nowrap">
              Welcome to <span className="text-[#0089ED]">Edge Bank</span>
            </h3>
          </div>
          <div className="flex flex-col w-max justify-center items-center lg:py-4 py-1">
            <h3 className="text-2xl cursor-default whitespace-nowrap">
              Hello <span className="text-yellow-600"> Pankaj</span>
            </h3>
          </div>
        </div>
        <div className="py-4">
          <form
            id="loginform"
            className="flex flex-col gap-2 p-4"
            autoSave="off"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label>Enter OTP</label>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={({ target: { value } }) => {
                setOtp(value)
              }}
            />
            <Button
              type="submit"
              value={'Verify'}
              variant="outline"
              colorScheme={'blackAlpha'}
              isLoading={loading}
            >
              Verify
            </Button>
          </form>
          <p className="text-gray-500 px-6">
            A verify message has been sent to your registered email address
          </p>
        </div>
      </div>
    </div>
  )
}

export default Verify
