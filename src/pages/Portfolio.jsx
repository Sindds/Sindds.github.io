import React from 'react'
import TodoApp from '../components/TodoApp'
import WeatherApp from '../components/WeatherApp'
import PasswordGenerator from '../components/PasswordGenerator'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Todo App',
      description: 'Менеджер задач с фильтрацией и localStorage',
      component: <TodoApp />,
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Погода по городу через OpenWeatherMap API',
      component: <WeatherApp />,
    },
    {
      id: 3,
      title: 'Password Generator',
      description: 'Генератор паролей с настройкой сложности',
      component: <PasswordGenerator />,
    },
  ]

  return (
    <div className='min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto'>

        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12'>
          Портфолио
        </h1>

        <div className='flex flex-col gap-6 sm:gap-8'>
          {projects.map(project => (
            <div
              key={project.id}
              className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'
            >
              <div className='px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-gray-100'>
                <h2 className='text-base sm:text-lg font-semibold text-gray-800'>
                  {project.title}
                </h2>
                {project.description && (
                  <p className='text-xs sm:text-sm text-gray-500 mt-0.5'>
                    {project.description}
                  </p>
                )}
              </div>

              <div className='p-4 sm:p-6 w-full min-w-0'>
                {project.component}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio