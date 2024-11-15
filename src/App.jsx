import React from 'react'
import { Github, Linkedin, Twitter, Monitor, Coffee, TreesIcon as Plant } from 'lucide-react'
import './App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </nav>
  )
}

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{ color: link.color }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

const Hero = ({ socialLinks }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Victor Mancho</h1>
        <p>A Web Developer</p>
        <SocialLinks links={socialLinks} />
      </div>
      
      <div className="hero-image">
        <div className="illustration">
          <Monitor className="monitor" />
          <Coffee className="coffee" />
          <Plant className="plant" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com', color: '#333' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com', color: '#0077B5' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com', color: '#1DA1F2' }
  ]

  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Hero socialLinks={socialLinks} />
      </div>
    </div>
  )
}