import React, { useState } from 'react';
import { fetchRandomAnimal, fetchRandomCombination, fetchRandomEmail, fetchRandomName } from '../services/api';

const Generator = () => {
    const [result, setResult] = useState('');
    const [type, setType] = useState('');

    const handleGenerate = async (generatorType) => {
        let generatedResult = '';
        setType(generatorType);

        switch (generatorType) {
            case 'combo':
                generatedResult = await fetchRandomCombination();
                break;
            case 'animal':
                generatedResult = await fetchRandomAnimal();
                break;
            case 'name':
                generatedResult = await fetchRandomName();
                break;
            case 'email':
                generatedResult = await fetchRandomEmail();
                break;
            default:
                generatedResult = 'Invalid generator type';
        }

        setResult(generatedResult);
    };

    return (
        <div>
            <h1>Random Generator</h1>
            <div>
                <button onClick={() => handleGenerate('combo')}>Generate Combination</button>
                <button onClick={() => handleGenerate('animal')}>Generate Animal</button>
                <button onClick={() => handleGenerate('name')}>Generate Name</button>
                <button onClick={() => handleGenerate('email')}>Generate Email</button>
            </div>
            {result && (
                <div>
                    <h2>Generated {type.charAt(0).toUpperCase() + type.slice(1)}:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default Generator;