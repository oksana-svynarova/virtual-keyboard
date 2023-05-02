module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint-config-airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"], // Использовать двойные кавычки.
    semi: ["error", "always"], // Всегда добавлять точку с запятой в конце утверждения.
    indent: ["error", 2], // Отступ - это два пробела.
    "linebreak-style": ["error", "windows"], // Задает разрыв строки для Windows.
    "no-console": "error", // Избегать использования в коде методов на консоли (`console`).
    "import/prefer-default-export": "off", // Экспорт выключен.
    "prefer-template": "error", // Использовать шаблонные строки вместо конкатенации строк.
  },
};
