import React from 'react'

export default function Button({className, type, children }) {
  return (
    <button className={className} type={type}>{children}</button>
  )
}
