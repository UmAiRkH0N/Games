import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Games By Umair</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Link to="/supertictactoe">
        <div className="flex items-center justify-center h-40 bg-gray-800 rounded-lg">
          Super TicTacToe
        </div>
      </Link>
        <div className="flex items-center justify-center h-40 bg-gray-800 rounded-lg">
          <span>Coming Soon</span>
        </div>
        <div className="flex items-center justify-center h-40 bg-gray-800 rounded-lg">
          <span>Coming Soon</span>
        </div>
        <div className="flex items-center justify-center h-40 bg-gray-800 rounded-lg">
          <span>Coming Soon</span>
        </div>
      </div>
  </div>
  )
}
