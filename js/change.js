var countryCodes = {
    RU: {
        names: ["Татьяна Груничева, Москва", "Ольга Иванова, Казань", "Анна Руднева, Ярославль"],
        heroName: "Марина Самойлова",
        src: ["./img/pack.png", "./img/smallpack.png", "./img/right-box.png", "./img/smallpack.png", "./img/sert1.png", "./img/order.png", "./img/pack.png"],
    },
    KZ: {
        names: ["Гульдара Талгатовна, Нур-Султан", "Фатима Ерлановна, Атырау", "Нагиша Аскаровна, Павлодар"],
        heroName: "Нагиша Омарова",
        src: ["./img/pack_kz.png", "./img/smallpack_kz.png", "./img/right-box_kz.png", "./img/smallpack_kz.png", "./img/sert1_kz.png", "./img/order_kz.png", "./img/pack_kz.png"],
    },
};


var change = function change(e) {
    var names = document.querySelectorAll('[class*="feed-name"]'),
    heroName = document.querySelector('.hero-name'),
    productImg = document.querySelectorAll('.product-img');


    function changeOne(item, value) {
        if (item) {
            item.innerHTML = value;
        }
    }
    changeOne(heroName, countryCodes[e].heroName);
    
    names.forEach(function(human, i) {
       if(human) {
            human.innerHTML = countryCodes[e].names[i];
       }
    });
    productImg.forEach(function(img, i) {
        if(img) {
            img.src = countryCodes[e].src[i];
        }
     });
    
}
selectors.forEach(function (elem) {
    elem.addEventListener('change', function (e) {
        if(Object.keys(countryCodes).includes(e.target.value)) {
            change(e.target.value);
        }
    });
});

if(Object.keys(countryCodes).includes(selectors[0].value)) {
    change(selectors[0].value);
}