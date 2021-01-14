import React, { createContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Landing from './pages/Landing';
import Message from './pages/Message';
import useMessageState from './utils/useMessageState';

export const MessageContext = createContext();

function App() {
  const { messages, addMessage, addAllMessages } = useMessageState([]);

  useEffect(() => {
    const json = localStorage.getItem("messages");
    const savedMessages = JSON.parse(json);
    if (savedMessages) {
      addAllMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(messages);
    localStorage.setItem("messages", json);
  }, [messages]);

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/messages">
              <Message />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </MessageContext.Provider>
  );
}

export default App;