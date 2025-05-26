import { useDarkMode } from '../../context/DarkModeContext';

const SwitchDark = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="bg-gray-300 dark:bg-gray-700/40 text-black dark:text-white p-2 rounded"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default SwitchDark;
