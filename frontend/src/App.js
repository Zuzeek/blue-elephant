import React, { useState } from 'react';
import Generator from './components/Generator';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [animal, setAnimal] = useState('');
  const [combo, setCombo] = useState('');

  const handleGenerate = (generatedName, generatedEmail, generateAnimal, generateCombo) => {
    setName(generatedName);
    setEmail(generatedEmail);
    setAnimal(generateAnimal);
    setCombo(generateCombo);
  };

  return (
    <div className="App">
      <h1>Random Name and Email Generator</h1>
      <Generator onGenerate={handleGenerate} />
      {name && <p>Generated Name: {name}</p>}
      {email && <p>Generated Email: {email}</p>}
      {animal && <p>Generated Animal: {animal}</p>}
      {combo && <p>Generated Combo: {combo}</p>}
    </div>
  );
}

export default App;