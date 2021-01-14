import React, { createContext } from 'react';
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
  const { messages, addMessage } = useMessageState([]);

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