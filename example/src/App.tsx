import React from 'react'

import { Mark, MarkString } from 'react-animarker'
import Footer from './components/Footer'

import Header from './components/Header'

const MyJsxString = `
<p>This example comes from a string written in an WYSIWYG editor</p>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt,
  voluptatibus modi ipsam odio, voluptatum accusamus deleniti aperiam obcaecati
  recusandae necessitatibus officiis illo excepturi a magnam? Dicta illum dolor
  neque.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptate{' '}
  <mark>ipsa optio rem dignissimos atque ut natus, officiis nulla quaerat!</mark>
  Nam maxime esse non! Doloribus ratione necessitatibus consequuntur magnam
  minus.
</p>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt,
  voluptatibus modi ipsam odio, voluptatum accusamus deleniti aperiam obcaecati
  recusandae necessitatibus officiis illo excepturi a magnam? Dicta illum dolor
  neque.
</p>
`

const App = () => {
  return (
    <>
      <Header />
      <section className='scroll'>
        <h2>Scroll down</h2>
      </section>
      <h3>
        <Mark color='#f73333' duration={4}>
          This is an animarker's Mark component
        </Mark>
      </h3>
      <h3 style={{ color: 'white' }}>
        <Mark color='#4444ff' duration={2}>
          This is another animarker's Mark component
        </Mark>
      </h3>
      <div className='text'>
        <p>This is an example of a text with a Mark inside</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          deserunt, voluptatibus modi ipsam odio, voluptatum accusamus deleniti
          aperiam obcaecati recusandae necessitatibus officiis illo excepturi a
          magnam? Dicta illum dolor neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          voluptate{' '}
          <Mark color='rgba(68, 255, 130, 0.5)'>
            ipsa optio rem dignissimos atque ut natus, officiis nulla quaerat!
          </Mark>{' '}
          Nam maxime esse non! Doloribus ratione necessitatibus consequuntur
          magnam minus.
        </p>
      </div>
      <div className='text'>
        <MarkString jsx={MyJsxString} renderInWrapper={false} />
      </div>
      <Footer />
    </>
  )
}

export default App
