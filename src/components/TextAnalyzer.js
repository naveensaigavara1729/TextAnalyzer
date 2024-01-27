import React, { useState } from 'react';
import './TextAnalyzer.css'; // Import your CSS file

const TextAnalyzer = () => {
  const [text, setText] = useState('');

  // Function to update the text and calculate metrics
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  // Calculate the number of characters and words
  const numberOfCharacters = text.length;
  const numberOfWords = text.split(/\s+/).filter((word) => word !== '').length;
  const numberOfParas = text.split(/\n/g).filter(para => para !== '').length;
  const numberOfSentences = text.split(/[.!?]/g).filter(para => para !== '').length;
  const spaces = text.match(/\s/g);
  const numberOfSpaces = spaces ? spaces.length : 0;
  const punctuations = text.match(/[.,;:!?]/g);
  const numberOfPunctuations = punctuations ? punctuations.length : 0;

  return (
    <div className="container">
      <h1 className="title">Text Analyzer</h1>
      <p className="description">
        Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.
      </p>
      <div className="input">
        <label className='input-label' htmlFor='input-field'>Word Input</label>
          
        <textarea
        id='input-field'
          className="input-field"
          placeholder="Type or copy/paste your content here."
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="stats-table">
        <table>
            <tbody>
            <tr>
                <td className="stat-label">Characters</td>
                <td className="stat-label">Words</td>
                <td className="stat-label">Sentences</td>
                <td className="stat-label">Paragraphs</td>
                <td className="stat-label">Spaces</td>
                <td className="stat-label">Punctuations</td>
            </tr>
            <tr>
                <td className="stat-value">{numberOfCharacters}</td>
                <td className="stat-value">{numberOfWords}</td>        
                <td className="stat-value">{numberOfSentences}</td>
                <td className="stat-value">{numberOfParas}</td>
                <td className="stat-value">{numberOfSpaces}</td>
                <td className="stat-value">{numberOfPunctuations}</td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TextAnalyzer;