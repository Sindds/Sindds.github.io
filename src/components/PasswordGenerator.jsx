import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Copy, Check, RefreshCw, Eye, EyeOff } from 'lucide-react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState('');
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  const passwordRef = useRef(null);

  // Отслеживание изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generatePassword = useCallback(() => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = '';
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters.length === 0) {
      setPassword('Выберите хотя бы один тип символов');
      setStrength('');
      return;
    }

    let generatedPassword = '';
  
    const randomValues = new Uint32Array(length);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(randomValues);
    }
    for (let i = 0; i < length; i++) {
      if (typeof window !== 'undefined' && window.crypto) {
        const randomIndex = randomValues[i] % characters.length;
        generatedPassword += characters[randomIndex];
      } else {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
      }
    }

    setPassword(generatedPassword);
    calculateStrength(generatedPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const calculateStrength = (pass) => {
    if (pass === 'Выберите хотя бы один тип символов') {
      setStrength('');
      return;
    }
           
  };

  const copyToClipboard = async () => {
    if (password && password !== 'Выберите хотя бы один тип символов') {
      try {
        await navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        passwordRef.current?.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const isSmallScreen = viewportSize.width < 640;
  const isVerySmallScreen = viewportSize.width < 400;

  return (
    <div className="min-h-[600px] flex items-center justify-center p-2 sm:p-3 md:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl p-4 sm:p-5 md:p-6 w-full max-w-md mx-auto my-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-5 md:mb-6">
          Генератор паролей
        </h1>

        {/* Поле с паролем */}
        <div className="relative mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-2 sm:p-3">
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
              className="flex-1 bg-transparent outline-none text-gray-700 font-mono text-sm sm:text-base"
              placeholder="Сгенерируйте пароль"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 sm:p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? 
                <EyeOff size={isVerySmallScreen ? 18 : 20} /> : 
                <Eye size={isVerySmallScreen ? 18 : 20} />
              }
            </button>
          </div>
          
        </div>

        {/* Настройки */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6">
          <div>
            <label className="flex items-center justify-between">
              <span className="text-gray-700 text-sm sm:text-base">Длина: {length}</span>
              <span className="text-blue-600 font-mono text-sm sm:text-base">{length}</span>
            </label>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4</span>
              <span>20</span>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 text-sm sm:text-base">Заглавные буквы (A-Z)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 text-sm sm:text-base">Строчные буквы (a-z)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 text-sm sm:text-base">Цифры (0-9)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 text-sm sm:text-base">Спецсимволы (!@#$)</span>
            </label>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex space-x-2 sm:space-x-3">
          <button
            onClick={generatePassword}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
          >
            <RefreshCw size={isVerySmallScreen ? 16 : 20} className="mr-1 sm:mr-2" />
            {isSmallScreen ? 'Обновить' : 'Сгенерировать'}
          </button>

          <button
            onClick={copyToClipboard}
            disabled={!password || password === 'Выберите хотя бы один тип символов'}
            className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base ${
              password && password !== 'Выберите хотя бы один тип символов'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            aria-label="Копировать пароль"
          >
            {copied ? <Check size={isVerySmallScreen ? 16 : 20} /> : <Copy size={isVerySmallScreen ? 16 : 20} />}
          </button>
        </div>

        {/* Советы по безопасности */}
        <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">💡 Советы безопасности</h3>
          <ul className="text-xs sm:text-sm text-blue-600 space-y-1">
            <li>• Используйте длинные пароли (12+ символов)</li>
            <li>• Комбинируйте разные типы символов</li>
            <li>• Не используйте один пароль для всех аккаунтов</li>
            {isSmallScreen && <li>• Регулярно обновляйте пароли</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;