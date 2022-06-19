import React from 'react'

export default function Header() {
  return (
      <header className='header'>
          Midra Library
      
          <style jsx="true">{`
            .header {
                position: sticky;
                top: 0;
                background-color: #333;
                color: #fff;
                padding: 10px;
                font-weight: bold;
                text-align: center;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
      
      `}</style>
      </header>
  )
}
