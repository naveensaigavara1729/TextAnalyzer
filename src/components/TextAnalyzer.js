import React, { useState } from 'react';
import './TextAnalyzer.css'; // Import your CSS file

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [selectedTab, setSelectedTab] = useState('word'); // Added state to manage selected tab

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
      <div className='switching'>
        <div className='switch-used'>
          <button
            onClick={() => setSelectedTab('word')}
            className={`switch1 ${selectedTab === 'word' ? 'selected-tab' : ''}`}
          >
            Word Input
          </button>
          <button
            onClick={() => setSelectedTab('paragraph')}
            className={`switch2 ${selectedTab === 'paragraph' ? 'selected-tab' : ''}`}
          >
            Paragraph
          </button>
        </div>
        <div className='temp'></div>
      </div>
      {selectedTab === 'paragraph' && (
        <>
          <div className="input">
            <textarea
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
        </>
      )}

      {selectedTab === 'word' && (
        <>
          <div className="input1">
            <input
              className="input-field1"
              value={text}
              onChange={handleTextChange}
            />
            <button className='process'>Process Word</button>
          </div>
          <div className="stats-table2">
            <table>
              <tbody>
                <tr>
                  <td className="stat-label">Characters</td>
                  <td className="stat-label">Words</td>
                </tr>
                <tr>
                  <td className="stat-value">{numberOfCharacters}</td>
                  <td className="stat-value">{numberOfWords}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
          <div class="definition-box">
            <h3>Definition:</h3>
            <p>in, relating to, or characteristic of a town or city. "the urban population"</p>
            <h3>Parts of speech:</h3>
            <p>Noun</p>
            <h3>Synonyms:</h3>
            <p>Town</p>
            <h3>Antonyms:</h3>
            <p>Rural</p>
          </div>
        <div className='switch-used'>

        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default TextAnalyzer;
