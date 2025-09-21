import { NavLink } from 'react-router-dom'
import { Page } from '../configs/page.config'

const About = () => {
  return (
    <div className='min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto fade-in'>
        <section className='text-center mb-16 transition-all duration-500 hover:scale-105'>
          <h1 className='text-4xl font-bold text-blue-600 mb-4 transform transition-transform duration-300 hover:scale-105'>
            Фронтенд-разработчик на React
          </h1>
        </section>

        <section className='mb-16 transition-all duration-500'>
          <div className='bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300'>
            <p className='font-semibold text-2xl  text-gray-600 mb-6 transition-colors duration-300 hover:text-gray-900 text-center'>
              Специалист в области фронтенд-разработки, создающий эффективные и интуитивно понятные UI с использованием современных технологий.
            </p>
          </div>
        </section>

        <section className='mb-16 transition-all duration-500'>
          <h2 className='text-3xl text-blue-600 font-bold text-center mb-12 transform transition-transform duration-300 hover:scale-105'>
            Мой стек технологий
          </h2>

          <div className='bg-gray-50 rounded-2xl p-6 shadow-sm transition-all '>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'TypeScript',
                'React',
                'React Router',
                'Tailwind CSS',
                'Jest',
                'Vite',
                'Git',
                'REST API',
                'Figma',
              ].map(tech => (
                <div
                  key={tech}
                  className='bg-white py-3 rounded-lg shadow-xs border border-gray-100 transition-all duration-300 hover:border-gray-300 hover:scale-105'
                >
                  <span className='text-gray-700 font-medium'>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mb-16 transition-all duration-500'>
          <h2 className='text-3xl text-blue-600 font-bold text-center mb-12 transform transition-transform duration-300 hover:scale-105'>
            Ключевые компетенции
          </h2>
          <div className='bg-gray-50 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-101'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6'>
              <ul className='space-y-3'>
                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>Адаптивная и кроссбраузерная верстка (Flexbox, Grid)</span>
                </li>
                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>JavaScript (ES2023+): асинхронность, работа с DOM API</span>
                </li>

                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>React 18+: хуки (useState, useCallback, useRef, useEffect, useMemo)</span>
                </li>
              </ul>

              <ul className='space-y-3'>
                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>TypeScript</span>
                </li>
                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>Стилизация через TailwindCSS и модульные CSS</span>
                </li>
                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>Система контроля версий Git</span>
                </li>
                <li className='flex items-start transition-all duration-300 hover:text-gray-900'>
                  <span className='text-blue-500 mr-2'>•</span>
                  <span>Написание юнит-тестов на Jest</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='text-center transition-all duration-500 hover:scale-[1.01]'>
          <div className='bg-gray-50 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md'>
            <p className='text-xl font-bold text-gray-700 mb-6 transition-colors duration-300 hover:text-gray-900'>
              Готов быстро погружаться в новые задачи и вносить значимый <br />
              вклад в развитие команды и продукта.
            </p>
            <NavLink
              to={Page.CONTACTS}
              className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95'
            >
              Связаться со мной
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
