import React from 'react'

type Props = {
    children: string,
}

export default function layout({children}: Props) {
  return (
    <div className='flex items-start justify-evenly flex-wrap pt-24 w-8/12'>{children}</div>
  )
}