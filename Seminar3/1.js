const celsius = Number.parseFloat(prompt ("Введите температуру в градусах цельсия"));
const fahrenheit = ((9 / 5) * celsius + 32).toFixed(1);

alert (`Цельсий: ${celsius}, Фаренгейт ${fahrenheit}`);