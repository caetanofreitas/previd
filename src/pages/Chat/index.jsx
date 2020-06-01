import React from 'react'
import './styles.css'

import NavbarChat from 'components/NavbarChat'
import Message from 'components/Message'

import boy from 'assets/images/boy.png'
import girl from 'assets/images/girl.png'

const Chat = () => {
  return(
    <main>
      <NavbarChat/>

      <div className="chat-container">
        <div className="user-images">

          <div className="user-container">
            <img src={boy} alt='boy'/>
          </div>

          <div className="user-container">
            <img src={girl} alt='girl'/>
          </div>

        </div>

        <div className="messages">

          <div className="message">
            <img src={girl} alt="girl"/>
            <div className="textmessage-container">
              <strong>Mulher LavaCabelo</strong>
              <p>Estou entrando no salão pra lavar cabelo</p>
            </div>
          </div>
          
          <div className="message">
            <img src={boy} alt="boy"/>
            <div className="textmessage-container">
              <strong>Arthur CortaCabelo</strong>
              <p>Estou entrando no salão pra cortar cabelo</p>
            </div>
          </div>

        </div>
        <Message/>
      </div>

    </main>
  )
}

export default Chat