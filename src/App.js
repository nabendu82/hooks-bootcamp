import React from 'react'
import './App.css';
import FocusInput from './components/FocusInput';
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <GrandParent />
      </UserContext.Provider> */}
      <FocusInput />
    </div>
  );
}

export default App;
