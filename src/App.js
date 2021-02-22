import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName={process.env.REACT_APP_CE_USERNAME}
      userSecret={process.env.REACT_APP_CE_USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App;