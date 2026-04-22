import { NavLink, useLocation } from 'react-router-dom'
import { Page } from '../configs/page.config'

const Footer = ({
  Name = 'Sindyaev Dmitry',
  copyrightText = '© 2025',
  socialLinks = [
    {
      name: '',
      href: 'https://saratov.hh.ru/resume/d7bab5ebff0f45d9ab0039ed1f79614a50496c',
      icon: (
        <img src='/HHru_icon.png' alt='HH.ru' className='w-10 h-10 hover:scale-110'></img>
      ),
    },
    {
      name: '',
      href: 'https://t.me/sdmitris',
      icon: (
        <img
          src='/telegram_icon.png'
          alt='Telegram'
          className='w-10 h-10 hover:scale-110'
        ></img>
      ),
    },
    {
      name: '',
      href: 'https://github.com/Sindds/Sindds.github.io',
      icon: (
        <img src='/GitHub_icon.png' alt='GitHub' className='w-14 h-14 hover:scale-110'></img>
      ),
    },
  ],
}) => {
  const location = useLocation()

  const isActive = path => {
    return location.pathname === path
  }

  const navLinks = [
    { name: 'Home', href: Page.HOME },
    { name: 'About', href: Page.ABOUT },
    { name: 'Portfolio', href: Page.PORTFOLIO },
    { name: 'Contacts', href: Page.CONTACTS },
  ]

    return (
      <footer className='border-t border-gray-200 py-6 mt-auto bg-white text-black'>
        <div className='container mx-auto px-4'>

          <div className='flex items-center max-[620px]:flex-col max-[620px]:gap-4'>

            <div className='flex-1 max-[620px]:hidden' />

            <div className='flex flex-col items-center text-center flex-1'>
              <h2 className='text-lg font-light mb-1'>{Name}</h2>
              <p className='text-sm text-gray-600'>{copyrightText}</p>
            </div>

            <div className='flex flex-1 justify-end gap-4 pr-4 max-[620px]:justify-center max-[620px]:pr-0'>
              {socialLinks.map((social, index) => (
                <NavLink
                  key={index}
                  to={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-black transition-colors flex items-center'
                >
                  {social.icon}
                  <span className='ml-1 text-sm'>{social.name}</span>
                </NavLink>
              ))}
            </div>

          </div>

        </div>
      </footer>
  )
}

export default Footer
