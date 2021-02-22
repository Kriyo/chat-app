import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => {
  const existingUserName = localStorage.getItem('username')
  const existingPassword = localStorage.getItem('password')

  if (!existingUserName) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName={existingUserName}
      userSecret={existingPassword}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App;