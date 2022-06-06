// Задание 4

// Напишите код приложения, 
//интерфейс которого представляет собой 2 input и кнопку submit.
//В input можно ввести любое число. При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не число 
//выводить ниже текст "одно из чисел вне диапазона от 100 до 300";
// Если числа попадают в диапазон от 100 до 300 - 
//сделать запрос с помощью fetch по url https://picsum.photos/200/300,
//где первое число ширина картинки, второе - высота.
//Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
//После получения данных вывести картинку ниде на экран
const btn = document.querySelector('.btn');
const result = document.querySelector('.output');

btn.addEventListener('click', () => {
	let width = document.querySelector('.input-width').value;
	let height = document.querySelector('.input-height').value;

	if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
		fetch(`https://picsum.photos/${width}/${height}`)

			.then((response) => {
				result.innerHTML = `
      <div class="card">
        <img src="${response.url}"
      </div>
      `;
			})
			.catch(() => {
				console.log('error');
			})
	} else {
		result.innerHTML = `<p>Одно из чисел вне диспазона от 100 до 300</p>`
	}
})