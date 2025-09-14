import React from 'react';
import { useState } from 'react';

const Contacts = () => {
  const [email, setEmail] = useState('');
            const [message, setMessage] = useState('');
            const [errors, setErrors] = useState({});
            const [isSubmitting, setIsSubmitting] = useState(false);
            const [isSubmitted, setIsSubmitted] = useState(false);

            const validateEmail = (email) => {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            };

            const handleSubmit = (e) => {
                e.preventDefault();
                const newErrors = {};

                if (!email) {
                    newErrors.email = 'Пожалуйста, введите ваш email';
                } else if (!validateEmail(email)) {
                    newErrors.email = 'Пожалуйста, введите корректный email';
                }

                if (!message) {
                    newErrors.message = 'Пожалуйста, введите сообщение';
                }

                if (Object.keys(newErrors).length > 0) {
                    setErrors(newErrors);
                    return;
                }

                setErrors({});
                setIsSubmitting(true);

                setTimeout(() => {
                    setIsSubmitting(false);
                    setIsSubmitted(true);
                    
                    const subject = "Сообщение с контактной формы";
                    const body = `${message}%0D%0A%0D%0AОт: ${email}`;
                    window.location.href = `mailto:sindyaewds@yandex.ru?subject=${encodeURIComponent(subject)}&body=${body}`;
                    
                    setTimeout(() => {
                        setEmail('');
                        setMessage('');
                        setIsSubmitted(false);
                    }, 3000);
                }, 2000);
            };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto">
                        <h1 className="text-3xl font-bold text-center mb-6">Контакты</h1>
                        
                        {isSubmitted ? (
                            <div className="text-center py-4 fade-in show">
                                <div className="text-green-600 font-semibold mb-2">Сообщение отправлено!</div>
                                <p>Я свяжусь с Вами в ближайшее время</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                                        Сообщение *
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows="4"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                            errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                                        }`}
                                        placeholder="Напишите ваше сообщение здесь..."
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center ${
                                        isSubmitting 
                                            ? 'bg-blue-400 cursor-not-allowed' 
                                            : 'bg-blue-600 hover:bg-blue-700 animate-pulse'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Отправка...
                                        </>
                                    ) : (
                                        'Написать мне'
                                    )}
                                </button>
                            </form>
                        )}

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold mb-4 text-center">Мои контакты</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center justify-center sm:justify-start">
                                    <img src="/public/telegram_icon.png" alt="Telegram" className="w-6 h-6 mr-3" />
                                    <a href="https://t.me/sdmitris" className="text-blue-600 hover:underline" target="_blank">Telegram</a>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start">
                                    <svg className="w-5 h-5 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                                    </svg>
                                    <a href="mailto:sindyaewds@yandex.ru" className="text-blue-600 hover:underline">sindyaewds@yandex.ru</a>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start">
                                    <svg className="w-5 h-5 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/>
                                    </svg>
                                    <a href="https://saratov.hh.ru/resume/d7bab5ebff0f45d9ab0039ed1f79614a50496c" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Resume</a>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start">
                                    <svg className="w-5 h-5 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/>
                                    </svg>
                                    <a href="https://github.com/your_github" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
};

export default Contacts;