import { CORE_CONCEPTS,EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState} from 'react';

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'components'?true:false} onSelect1={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'?true:false} onSelect1={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'?true:false} onSelect1={() =>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'?true:false} onSelect1={() =>handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ?<p>Please select a topic.</p>:(
          <div id="tab-content"> 
             <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
