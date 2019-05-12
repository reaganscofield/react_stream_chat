import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';


// import {
//   Chat,
//   Channel,
//   ChannelHeader,
//   Thread,
//   Window
// } from "stream-chat-react";
// import { MessageList, MessageInput } from "stream-chat-react";
// import { StreamChat } from "stream-chat";


import Chat from "./Chat";
import Login from "./Login";

import UnauthedRoute from "./UnauthedRoute";
import AuthedRoute from "./AuthedRoute";

import "stream-chat-react/dist/css/index.css";


// const chatClient = new StreamChat("qk4nn7rpcn75"); // Demo Stream Key
// const userToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29vbC1za3ktOSJ9.mhikC6HPqPKoCP4aHHfuH9dFgPQ2Fth5QoRAfolJjC4"; // Demo Stream Token

// chatClient.setUser(
//   {
//     id: "cool-sky-9",
//     name: "Cool sky",
//     image: "https://getstream.io/random_svg/?id=cool-sky-9&name=Cool+sky"
//   },
//   userToken
// );

// const channel = chatClient.channel("messaging", "godevs", {
//   // image and name are required, however, you can add custom fields
//   image:
//     "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
//   name: "Talk about Go"
// });


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="App">
       <Router>
        <Switch>
          <UnauthedRoute path="/auth/login" component={Login} />
          <AuthedRoute path="/" component={Chat} />
        </Switch>
      </Router>
      </div>
    )
  }
 }

export default App;




{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}





      //   <Chat client={chatClient} theme={"messaging light"}>
      //   <Channel channel={channel}>
      //     <Window>
      //       <ChannelHeader />
      //       <MessageList />
      //       <MessageInput />
      //     </Window>
      //     <Thread />
      //   </Channel>
      // </Chat>