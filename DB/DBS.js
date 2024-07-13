function getKPCS(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const kpcsValue = data.KPCS; // Предполагается, что "KPCS" находится в JSON-ответе
            console.log('Значение KPCS:', kpcsValue);
        } else {
            console.error('Ошибка GET-запроса:', xhr.statusText);
        }
    };

    xhr.send();
}

getKPCS('http://kringeproduction.ru/api/users/?format=json/'); // Замените на ваш URL