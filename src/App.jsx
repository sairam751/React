import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState,Fragment} from 'react';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

//import { EXAMPLES } from './data.js';

function App() {

  // Use state can only be used in the direct react components. we can use usestate here
  
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = "Please select a button"

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // we cant use usestate here

    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }


console.log("App Component")

  return (
    // Extra div is inserted over as we can return only value
    // To avoid this we can use Fragment
    //<Fragment>
    // OR we can use <> to avoid extra div
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    //</Fragment>
  );
}

export default App;
