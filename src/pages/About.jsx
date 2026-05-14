import { NavLink } from 'react-router-dom'
import { Page } from '../configs/page.config'

const About = () => {
  return (
    <div className='min-h-screen bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto fade-in'>

        <section className='text-center mb-10 sm:mb-16'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4'>
            Фронтенд-разработчик на React
          </h1>
        </section>

        <section className='mb-10 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl text-blue-600 font-bold text-center mb-8 sm:mb-12'>
            Мой стек технологий
          </h2>
          <div className='bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm'>
            <div className='grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center'>
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'TypeScript',
                'React 17.0+',
                'React Router',
                'Tailwind CSS',
                'Vite',
                'Git',
                'REST API',
                'Next.js 15.0+',
                'Zustand',
              ].map(tech => (
                <div
                  key={tech}
                  className='bg-white py-3 px-2 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-gray-300 hover:scale-105'
                >
                  <span className='text-gray-700 font-medium text-sm sm:text-base'>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mb-10 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl text-blue-600 font-bold text-center mb-8 sm:mb-12'>
            Мои навыки
          </h2>
          <div className='bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300'>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {[
                'Верстаю адаптивные интерфейсы с помощью Tailwind CSS',
                'Разрабатываю SPA на React с клиентской маршрутизацией',
                'Работаю с REST API — fetch, async/await, обработка ошибок',
                'Оптимизирую производительность — memo, useCallback, useMemo',
                'Использую Git — ветки, коммиты, pull request',
                'Типизирую код с помощью TypeScript',
              ].map(item => (
                <li key={item} className='flex items-start gap-2'>
                  <span className='text-blue-500 mt-0.5 shrink-0'>✦</span>
                  <span className='text-gray-700 text-sm sm:text-base'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='mb-10 sm:mb-16'>
          <div className='bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300'>
            <p className='font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed'>
              <span className='text-blue-600'>В веб-разработку</span> я впервые пришёл ещё в 2015 году — тогда прошёл курсы и 
              впервые попробовал верстку, базовую логику. 
              Дальше жизнь ушла в другую сторону: учёба на химфаке, армия, работа инженером на производстве. 
              <span className='text-blue-600'> Но интерес к разработке не исчез</span> — скорее оставался фоном всё это время. 
            </p>
          </div>
        </section>

        <section className='mb-10 sm:mb-16'>
          <div className='bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300'>
            <p className='font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed'>
              <span className='text-blue-600'>В 2024 году</span> я вернулся в frontend после одного разговора, 
              который фактически стал <span className='text-blue-600'>новым витком</span> моего развития. 
              Начинал с <span className='text-blue-600'>верстки</span> и базового <span className='text-blue-600'>JavaScript</span>, местами было непросто — несколько раз бросал и возвращался. 
              Но постепенно процесс начал складываться: появилась уверенность в работе с <span className='text-blue-600'>React</span> и 
              <span className='text-blue-600'> TypeScript </span>  
              понимание архитектуры интерфейсов и того, как строить приложения целиком, а не отдельные страницы.
            </p>
          </div>
        </section>

        <section className='mb-10 sm:mb-16'>
          <div className='bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300'>
            <p className='font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed'>
              <span className='text-blue-600'>Сейчас</span> я работаю с <span className='text-blue-600'>React 19</span> и 
              <span className='text-blue-600'> Next.js 15</span>, собираю 
              полноценные приложения: от <span className='text-blue-600'>UI</span> и состояния до серверных 
              <span className='text-blue-600'> API</span>-роутов и админки. 
              В проектах делал <span className='text-blue-600'>SPA</span> с интеграцией внешних API, системы с авторизацией, экспортом данных в Excel, 
              drag-and-drop логикой и серверной валидацией. Стараюсь не просто «реализовать задачу», 
              а <span className='text-blue-600'>продумать структуру</span> так, чтобы код можно было спокойно развивать дальше.
            </p>
          </div>
        </section>

        <section className='text-center mb-8'>
          <div className='bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300'>
            <p className='text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-6'>
              Готов обсудить сотрудничество или просто пообщаться о фронтенде!
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