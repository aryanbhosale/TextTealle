import Head from 'next/head';
import Image from 'next/image';
import Logo from '../assets/favicon.ico';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }
  
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }

  return (
    <div className="root">
      <Head>
        <title>TextTealle</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Supercharge Your Blogging with AI</h1>
          </div>
          <div className="header-subtitle">
            <h2>Create a professionally crafted blog post with just a title</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="type in your text and let us do the rest" className="prompt-box" value={userInput} onChange={onUserChangedText} />
            <div className="prompt-buttons">
              <a className="generate-button" onClick={callGenerateEndpoint}>
                <div className="generate">
                  {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
                </div>
              </a>
            </div>
            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>{userInput}</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://github.com/aryanbhosale"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={Logo} alt="logo" />
            <p>Made with ❤️ with GPT-3</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
