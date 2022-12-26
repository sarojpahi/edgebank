import { useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { io } from 'socket.io-client'
import { BenficiaryContainer } from './BenficiaryContainer'
import { BenificiaryList } from './BenificiaryList'

const fetchData = () => {
  return axios.get('/api/users/getuser')
}

const Beneficiary = () => {
  const socket = useRef()
  const [currentChat, setCurrentChat] = useState()
  const [data, setData] = useState([])
  const [currentUser, setCurrentuser] = useState({
    _id: '',
  })

  useEffect(() => {
    fetchData()
      .then(({ data }) => {
        setCurrentuser(data.user._id)
        setData(data.user.beneficiary)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
    console.log('chat', chat)
  }

  useEffect(() => {
    if (currentUser) {
      socket.current = io('/api/socket')
      socket.current.emit('add-user', currentUser._id)
    }
  }, [currentUser])

  console.log('currentChat', currentChat)
  return (
    <div id="payment">
      <div className="container">
        <div className="leftside">
          <div className="search">
            <div>
              <input type="text" placeholder="Search Beneficiary" />
              <div className="icon">
                <AiOutlineSearch />
              </div>
            </div>
          </div>
          <BenificiaryList changeChat={handleChatChange} contacts={data} />
        </div>
        <BenficiaryContainer
          currentChat={currentChat}
          socket={socket}
          currentUser={currentUser}
        />
      </div>
    </div>
  )
}

export default Beneficiary
