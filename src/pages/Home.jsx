import { NavLink } from 'react-router-dom'
import { Page } from '../configs/page.config'

const HeroSection = () => {
  const technologies = [
    { name: 'HTML5', icon: '/HTML5_icon.png' },
    { name: 'CSS3', icon: '/CSS3_icon.png' },
    { name: 'JavaScript', icon: '/JavaScript_icon.png' },
    { name: 'React', icon: '/React_icon.png' },
    { name: 'Git', icon: '/Git_icon.png' },
  ]

  return (
    <section className='min-h-screen flex flex-col justify-center items-center relative px-4 py-12'>
      <div className='text-center max-w-4xl mx-auto mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
          Привет! Я <span className='text-blue-600'>Синдяев Дмитрий</span>,<br /> 
          фронтенд-разработчик.
        </h1>

        <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
          Специализируюсь на создании современных, адаптивных и высокопроизводительных веб-приложений с использованием React. Помогаю превращать идеи в работающие проекты.
        </p>

        <div className='flex justify-center gap-4'>
          <NavLink
            to={Page.PORTFOLIO}
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1'
          >
            Мои проекты
          </NavLink>
          <NavLink
            to={Page.CONTACTS}
            className='border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1'
          >
            Написать мне
          </NavLink>
        </div>
      </div>

      <div className='fixed right-6 bottom-1/3 hidden md:flex flex-col items-center space-y-6'>
        {technologies.map(tech => (
          <div key={tech.name} className='group relative flex items-center justify-center'>
            <div className='bg-white p-2 rounded-full shadow-lg border border-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl'>
              <img src={tech.icon} alt={tech.name} className='h-8 w-8 object-contain' />
            </div>
            <span className='absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className='absolute -z-10'>
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse'></div>
        <div className='absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000'></div>
      </div>
    </section>
  )
}

export default HeroSection
