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
else if(itemName == "Парогенератор Electrolux"){
    ch.innerHTML = "Максимальная мощность:  2000 Вт <br> Рабочая поверхность:  Resilium, Анодированная <br>  Емкость резервуара для воды:  1200 мл   <br> Давление пара:  6 <br>  Паровой удар: Да"
}
else if(itemName == "Аэрогриль Endever Skyline"){
    ch.innerHTML = "Мощность:  1500 Вт <br> Объем чаши:  2.5 л"
}

else if (itemName == "Телевизор Samsung"){
    ch.innerHTML = "Тип экрана:  LCD   <br>  Диагональ:  43 <br> Разрешение:  Ultra HD 4K-3840x2160 пикс.<br>   Smart TV: Да  <br> Операционная система:  Tizen"
}
else if (itemName == "Робот-пылесос SAMSUNG"){
    ch.innerHTML = "Тип уборки:  Сухая, Влажная<br>   Объем пылесборника:  0.2 л  <br> Ориентация в пространстве:  Гироскопические сенсоры, Инфракрасные сенсоры, Контактные датчики  <br> Датчики:  Определения препятствий, Определения ступенек, Определение обрыва <br> Время работы от аккумулятора (макс):  150 мин"
}

else if (itemName == "Холодильник Samsung"){
    ch.innerHTML = "No Frost:  Полный <br>   Полезный объем:  367 л, 269 л + 98 л  <br>  Цвет:  Черный <br> Тип управления:  Электронное  <br>  Класс энергопотребления:  A+  <br>  Высота:  201 см"
}

else if (itemName == "Холодильник ATLANT"){
    ch.innerHTML = "Полезный объем:  198 л, 131 л + 67 л  <br>  Цвет:  Белый <br> Тип управления:  Электромеханическое <br> Класс энергопотребления:  A <br> Высота:  161.5 см"
}