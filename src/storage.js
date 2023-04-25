// foter from XML  ==>

fetch('/src/data.xml')
  .then(response => response.text())
  .then(xml => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");

    const address = xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;
    const phone = xmlDoc.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
    const time = xmlDoc.getElementsByTagName("time")[0].childNodes[0].nodeValue;
    const wkd = xmlDoc.getElementsByTagName("weekend")[0].childNodes[0].nodeValue;

    // Вставляем данные в footer
    const addressEl = document.getElementById('address');
    addressEl.innerHTML = `${address}`;

    const phoneEl = document.getElementById('phone');
    phoneEl.innerHTML = `${phone}`;

    const timeEl = document.getElementById('work-time');
    timeEl.innerHTML = `${time}`;

    const wkdEl = document.getElementById('wkd');
    wkdEl.innerHTML = `${wkd}`;

  });