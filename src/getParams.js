const urlParams = new URLSearchParams(window.location.search);
const itemName = urlParams.get('name');
const itemPrice = urlParams.get('price');
const itemImgSrc = urlParams.get('img');

const itemNameElement = document.querySelector('.item-name');
const itemPriceElement = document.querySelector('.item-price');
const itemImgElement = document.querySelector('.item-img');

itemNameElement.textContent = itemName;
itemPriceElement.textContent = itemPrice;
itemImgElement.src = itemImgSrc;

       let ch = document.getElementById("charact"); 
if(itemName == "Стиральная машина с сушкой Gorenje"){
      ch.innerHTML = "Вес загрузки белья:  7 кг <br> Глубина:  65.1 см  <br> Класс энергопотребления:  A++ <br> Скорость отжима до:  800 об/мин <br> Количество программ стирки:  16"
}
else if (itemName == "Смеситель для раковины AM.PM"){
    ch.innerHTML = "Тип водонагревателя:  Проточный <br> Мощность:  3 кВт"
}
else if (itemName == "Чайник Tefal"){
    ch.innerHTML = "Нагревательный элемент:  Закрытый <br> Объем воды:  1.7 л <br>  Материал корпуса:  Пластик"
}