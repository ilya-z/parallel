import React from 'react';
import WelcomeComponent from "./components/welcome";
import {Provider} from "./context/provider";

const App = () => {

  return (
      <Provider>
        <main>
            <WelcomeComponent />
        </main>
      </Provider>
  );
};

export default App;
