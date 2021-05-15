import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');

  return (
    <main>
      <section class='markdown'>
        <textarea
          class='input'
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
