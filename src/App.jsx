import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState} from 'react';

function App() {

  // Use state can only be used in the direct react components. we can use usestate here
  
  const [selectedTopic, setSelectedTopic] = useState('please click a button')
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
            <TabButton onSelect1={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect1={() =>handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect1={() =>handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect1={() =>handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
