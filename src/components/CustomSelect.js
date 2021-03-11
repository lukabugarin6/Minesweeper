import React, { useState, useEffect, useRef } from 'react'

import {AiFillCaretDown} from 'react-icons/ai'

const CustomSelect = ({ defText, optList, state, onLevelSelect }) => {
  const [optionsList, setOptionsList] = useState(optList)
  const [defaultSelectText, setDefaultSelectText] = useState(defText)
  const [showOptionsList, setShowOptionsList] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    setDefaultSelectText(defText)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (e) => {
    if (
      !e.target.classList.contains('custom-select-option')
    ) {
      setShowOptionsList(false)
    }
  }

  const handleListDisplay = () => {
    setShowOptionsList(!showOptionsList)
  }

  const handleOptionClick = (e) => {
    setDefaultSelectText(e.target.getAttribute('data-name'))
    setShowOptionsList(false)
  }

  return (
    <>
      <div className="custom-select-container w-36 text-xs lg:text-sm">
        <div
          className={`flex justify-between items-center p-1.5 lg:p-2 lg:pl-4 ${showOptionsList ? 'selected-text active' : 'selected-text'}`}
          onClick={handleListDisplay}
        >
          {defaultSelectText} <span className='ml-1 text-xl'><AiFillCaretDown /></span> 
        </div>
        {showOptionsList && (
          <ul className="select-options">
            {optionsList && optionsList.map((option, index) => {
              return (
                <li
                  className="custom-select-option"
                  data-name={option.name}
                  key={index + 1}
                  onClick={(e) => {
                    handleOptionClick(e);
                    onLevelSelect(option.value);
                  } }
                >
                  {option.name}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <style jsx>{`
        .custom-select-container {
          display: inline-block;
          min-width: 113px;
          position: relative;
          cursor: pointer;
          font-weight:600;
        }

        .selected-text {
          background-color: transparent;
          border: 2px solid #116466;
          color: #116466;
          border-radius: 6px;
          transition: all;
          transition-duration: 300ms;
        }

        .selected-text:hover {
            border: 2px solid #FFCB9A;
            color: #FFCB9A;
          }

        // .selected-text::after,.selected-text::before {
        //   content: '';
        //   position: absolute;
        //   width: 7px;
        //   height:7px;
        //   border-top: 2px solid #red;
        //   border-left: 2px solid #red;
        //   right:11px;
        //   transform: rotate(45deg);
        //   background: #116466;
       
        // }
        // .selected-text::after {
        //   top: 12px;
        // }
        // .selected-text::before {
        //   bottom: 12px;
        //   transform: rotate(225deg);
        // }

        // .selected-text.active::after {
        //   top: 8px;
        //   border-color: transparent transparent #21425D transparent;
        // }

        ul {
          margin: 0;
          padding: 0;
          z-index:99;
          transition: all 0.2s;
          top: 0px;
        }

        .select-options {
          position: absolute;
          width: 100%;
        }

        li {
          list-style-type: none;
          padding: 12px 0;
          padding-left: 20px;
          background: #2C3531;
          transition: all 0.2s;
          text-align: left;
          border-left: 1px solid #116466;
          border-right: 1px solid #116466;
          cursor: pointer;
        }
        li:first-child {
          border-radius: 6px 6px 0 0;
          border-top: 1px solid #116466;

        }
        li:last-child {
          border-radius: 0 0 6px 6px;
          border-bottom: 1px solid #116466;
        }
        li:hover {
             background-color: #FFCB9A;
          color: #116466;
        }
      `}</style>
    </>
  )
}

export default CustomSelect
