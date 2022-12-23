'use client'

import { Button, useToast } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'

type InputsType = {
  email: string
  password: string
  Captcha: string
}

type ResponseDataType = {
  status: number
  message: string
}

type ResponseType = {
  data: ResponseDataType
}

const Login = () => {
  const router = useRouter()
  const cap = uuidv4().slice(0, 4)
  const [inputs, setInputs] = useState<InputsType>({
    email: '',
    password: '',
    Captcha: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [displayCaptcha, setdisplayCaptcha] = useState<string>('')
  const [Captcha, setCapta] = useState<string>('')
  const toast = useToast()

  useEffect(() => {
    setdisplayCaptcha(cap)
  }, [])

  type StatusType =
    | 'info'
    | 'warning'
    | 'success'
    | 'error'
    | 'loading'
    | undefined

  const customToast = (title: string, des: string, status: StatusType) =>
    toast({
      position: 'top',
      title: title,
      description: des,
      status: status,
      duration: 4000,
      isClosable: true,
    })

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (inputs.email === '' || inputs.password === '') {
      return customToast(
        'Input error!',
        'Please fill all the inputs!',
        'warning',
      )
    }
    // else if (inputs.Captcha !== displayCaptcha) {
    //   return customToast('Captcha error!', 'Wrong Captcha!', 'warning')
    // }

    try {
      const res = (await axios.post('/api/user_auth/login', {
        email: inputs.email,
        password: inputs.password,
      })) as ResponseType
      if (res.data.status === 1) {
        customToast('Login Info!', 'Logined successfully!', 'success')
        setLoading(false)
        return router.replace('/retail/account')
      } else {
        return customToast('Login error!', 'oops! wrong creds!', 'error')
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      return customToast('Login error!', 'oops! Something went wrong!', 'error')
    }
  }

  return (
    <div className="lg:h-[calc(100vh-60px)] h-[50vh] w-full relative">
      <div className="h-[50%]  bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-500 w-full">
        <div className="lg:block hidden w-full">
          <div className="w-[60%]  text-white flex">
            <div className="p-16">
              <h2 className="text-4xl font-semibold pb-2">Sign In to</h2>
              <h3 className="text-xl font-semibold pb-2">
                Edge Bank - The New Bank
              </h3>
              <p>
                Gone are the days for brick and mortar banks where you need to
                employ a large workforce and maintain a large infrastructure.
                Today when customers are going digital - banks need to evolve
                and get into the digital way of doing things.
              </p>
            </div>
            <div className="w-full">
              <img
                className="w-full"
                src="https://user-images.githubusercontent.com/107534043/209082815-25c27656-2767-4725-a256-ff9c1086151e.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white top-2 lg:top-[12%] lg:right-[4%] lg:w-[28%] w-full md:w-[90%] md:right-[5%]  rounded-lg px-4 py-2 shadow-md">
        <div className="flex flex-col justify-center items-center py-4">
          <h3 className="text-2xl cursor-default">
            Welcome to <span className="text-[#0089ED]">Edge Bank</span>
          </h3>
        </div>
        <div>
          <h2 className="text-3xl font-semibold cursor-default">Sign In</h2>
        </div>
        <div>
          <form
            id="loginform"
            className="flex flex-col gap-2 p-4"
            autoSave="off"
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <label>Enter Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={inputs.email}
              onChange={({ target: { value } }) =>
                setInputs({ ...inputs, email: value })
              }
            />
            <label>Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={({ target: { value } }) =>
                setInputs({ ...inputs, password: value })
              }
            />
            <label>Verify Captcha</label>
            <div className="flex gap-4 items-center">
              <div className="w-full">
                Captcha{' '}
                <span className="ml-[5px] text-gray-500 font-medium border-2 border-gray-100 p-2 uppercase italic">
                  {displayCaptcha}
                </span>
              </div>{' '}
              <input
                type="text"
                onChange={({ target: { value } }) => setCapta(value)}
              />
            </div>

            <Button type="submit">Sign In</Button>
          </form>
          <p className="flex justify-between px-6 pb-2">
            <span className="text-gray-500">Do not have an account?</span>
            <Link href={'/register'}>
              <span className="text-[#0089ED]">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
