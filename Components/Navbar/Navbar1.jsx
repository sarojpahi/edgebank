import React, { useEffect, useState } from 'react'
import { Navicon } from './Navicon'
import { FaRegUser } from 'react-icons/fa'
import { MdAccountBalanceWallet, MdOutlineWifiCalling3 } from 'react-icons/md'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { BiTransferAlt } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = ({ user, logout }) => {
  const [refresh, setRefresh] = useState(false)
  const router = useRouter()
  const userLogout = async () => {
    const res = await logout()
    if (res.data.status == 1) {
      router.replace('/login')
    }
    setRefresh(!refresh)
  }

  return (
    <div className="h-[60px] flex items-center px-10 bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-500">
      <div className="lg:px-4 lg:w-max w-full flex justify-center ">
        <Link href={'/'}>
          <img
            className="w-[160px] "
            src="https://user-images.githubusercontent.com/107534043/208931176-27398e7e-6d50-4729-8415-8e0403eaac57.png"
            alt="Edge Bank"
          />
        </Link>
      </div>
      <div className="hidden lg:flex w-[calc(100%-186px)]">
        <div className="w-full gap-3 items-center justify-between px-4 lg:px-40 flex">
          <Link href="/retail/userprofile">
            <Navicon icon={<FaRegUser />} title="Profile" />
          </Link>
          <Link href={'/retail/account'}>
            <Navicon icon={<MdAccountBalanceWallet />} title="Account" />
          </Link>
          <Link href={'/retail/transfer'}>
            <Navicon icon={<BiTransferAlt />} title="Transfer" />
          </Link>
          <Link href={'/retail/enqueries'}>
            <Navicon icon={<MdOutlineWifiCalling3 />} title="Enqueries" />
          </Link>
        </div>
        <div
          className={`${
            user.userName ? 'flex' : 'hidden'
          } w-max items-center gap-5`}
        >
          <div className="whitespace-nowrap text-lg text-yellow-100">
            Hello, <span className="text-gray-100">{user?.userName}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-white hover:text-red-200 transition-all duration-300 ">
            <div className="bg-white text-red-500  bg-no-repeat rounded-full w-8 h-8 flex justify-center items-center">
              <div>
                <RiLogoutCircleRLine />
              </div>
            </div>
            <div className="text-lg" onClick={userLogout}>
              Logout
            </div>
          </div>
        </div>
        <div
          className={`${
            user.userName ? 'hidden' : 'flex'
          } w-max items-center gap-5`}
        >
          <Link href={'/login'}>
            <div className="whitespace-nowrap text-lg text-yellow-100">
              {' '}
              Login
            </div>
          </Link>
          <Link href={'/register'}>
            <div className="whitespace-nowrap text-lg text-yellow-100">
              {' '}
              Register
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
