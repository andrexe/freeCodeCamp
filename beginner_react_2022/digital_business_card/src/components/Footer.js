import React from 'react'
import github_icon from '../img/github_icon.png'
import linkedin_icon from '../img/linkedin_icon.png'
import twitter_icon from '../img/twitter_icon.png'

const Footer = () => {
  return (
    <section className='max-w-sm mx-auto bg-gray-300 dark:bg-gray-900 px-10 py-6 rounded-b-xl flex justify-around'>
      <a href="https://github.com/andrexe" target="_blank"><img src={github_icon} alt="github icon" /></a>
      <a href="https://linkedin.com/in/andrexe" target="_blank"><img src={linkedin_icon} alt="linkedin icon" /></a>
      <a href="https://twitter.com/andrei_click" target="_blank"><img src={twitter_icon} alt="twitter icon" /></a>
    </section>
  )
}

export default Footer