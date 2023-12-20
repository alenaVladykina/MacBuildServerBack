"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basket = exports.products = exports.productСocktail = exports.productCoffee = exports.uuid = void 0;
exports.uuid = require('uuid');
const itemPizza = [
    {
        id: exports.uuid.v1(),
        title: "Мортаделла с песто",
        description: "Мортаделла, соус песто, моцарелла, кубики брынзы и фирменный томатный соус",
        price: 649,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_366x366.webp",
        popular: 3
    },
    {
        id: exports.uuid.v1(),
        title: "Сырная",
        description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
        price: 409,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_366x366.webp",
        popular: 4
    },
    {
        id: exports.uuid.v1(),
        title: "Пепперони фреш",
        description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
        price: 520,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_366x366.webp",
        popular: 4
    },
    {
        id: exports.uuid.v1(),
        title: "Диабло 🌶️🌶️",
        description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус",
        price: 409,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/03c840b1ab6f4ccb84f5dc167e146598_292x292.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/03c840b1ab6f4ccb84f5dc167e146598_292x292.webp",
        popular: 3
    },
    {
        id: exports.uuid.v1(),
        title: "Двойной цыпленок ",
        description: "Цыпленок, моцарелла, фирменный соус альфредо",
        price: 499,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Ветчина и сыр",
        description: "Ветчина, моцарелла, фирменный соус альфредо",
        price: 499,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Чоризо фреш",
        description: "Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус",
        price: 409,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Пицца Жюльен",
        description: "Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
        price: 599,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_366x366.webp",
        popular: 4
    }, {
        id: exports.uuid.v1(),
        title: "Додо Микс",
        description: "Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы",
        price: 649,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/85479ab2c41e42408d3609dad068d2ef_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/85479ab2c41e42408d3609dad068d2ef_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Песто",
        description: "Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо",
        price: 599,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/6046174c06e440299c4e7117a8ecfea4_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/6046174c06e440299c4e7117a8ecfea4_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Карбонара",
        description: "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы",
        price: 649,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/2cac8238ae9e42cd95dd00c17146e1fd_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/2cac8238ae9e42cd95dd00c17146e1fd_366x366.webp",
        popular: 3
    },
    {
        id: exports.uuid.v1(),
        title: "Мясная",
        description: "Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, фирменный томатный соус",
        price: 599,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/18dbb12240b041a191c9dc73c9c1f4ef_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/18dbb12240b041a191c9dc73c9c1f4ef_366x366.webp",
        popular: 3
    },
    {
        id: exports.uuid.v1(),
        title: "Аррива!",
        description: "Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок",
        price: 599,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/bebaa13644304e75b438e45be9eb5076_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/bebaa13644304e75b438e45be9eb5076_366x366.webp",
        popular: 4
    },
    {
        id: exports.uuid.v1(),
        title: "Бургер-пицца",
        description: "Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус",
        price: 529,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/3a948b9d5af14d219e2c54282229755a_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/3a948b9d5af14d219e2c54282229755a_366x366.webp",
        popular: 4
    },
    {
        id: exports.uuid.v1(),
        title: "Трюфельная с мортаделлой",
        description: "Мортаделла, трюфельный соус, шампиньоны, красный лук, моцарелла, фирменный соус альфредо и чеснок",
        price: 649,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/6390157043034f8585c64cc279edbef1_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/6390157043034f8585c64cc279edbef1_366x366.webp",
        popular: 3
    },
    {
        id: exports.uuid.v1(),
        title: "Сырный цыпленок",
        description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        price: 599,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/42360a7dcb7640c998b723231586fe84_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/42360a7dcb7640c998b723231586fe84_366x366.webp",
        popular: 3
    }
];
exports.productCoffee = [
    {
        id: exports.uuid.v1(),
        title: "Ирландский Капучино",
        description: "Классический кофейный напиток с яркой историей и вкусом сливочного безалкогольного ликера «Айриш крим»",
        price: 175,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/018fc33778ed487cbef80a1d69f6d944_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/018fc33778ed487cbef80a1d69f6d944_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Карамельный капучино",
        description: "Если не шоколад, то карамель! А капучино с карамельным сиропом особенно хорош",
        price: 175,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/018fc33778ed487cbef80a1d69f6d944_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/018fc33778ed487cbef80a1d69f6d944_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Кокосовый латте",
        description: "Горячий напиток на основе эспрессо с увеличенной порцией молока и кокосовым сиропом",
        price: 165,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/25d1a556b46e4f8e865ff94dea66ed3d_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/25d1a556b46e4f8e865ff94dea66ed3d_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Американо",
        description: "Много молока и фундука. Уютный латте на основе эспрессо и орехового сиропа",
        price: 145,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/b3e4267e06334a428dcc9f1f10a72f34_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/b3e4267e06334a428dcc9f1f10a72f34_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Ореховый латте",
        description: "Много молока и фундука. Уютный латте на основе эспрессо и орехового сиропа",
        price: 175,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/d608f7d7508f4f6b90cdc40eb7cc3cdb_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/d608f7d7508f4f6b90cdc40eb7cc3cdb_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Айс Капучино",
        description: "Освежающий напиток для любителей кофе. В составе эспрессо, пломбир, молоко и бодрость на весь день",
        price: 225,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee89389d3e94fda955aef1cccd790d_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee89389d3e94fda955aef1cccd790d_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Капучино",
        description: "Король среди кофейных напитков — классический капучино. Для любителей сбалансированного кофейно-молочного вкуса",
        price: 165,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/d45790074f574ccfa9c75884dfe55f09_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/d45790074f574ccfa9c75884dfe55f09_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Латте",
        description: "Когда хочется нежную молочную пенку, на помощь приходит классический латте",
        price: 165,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/0ae91c5c67354e33a13ba07f82e9c167_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/0ae91c5c67354e33a13ba07f82e9c167_366x366.webp",
        popular: 5
    },
];
exports.productСocktail = [
    {
        id: exports.uuid.v1(),
        title: "Банановый молочный коктейль",
        description: "По-настоящему солнечный! Молочный коктейль с добавлением бананового пюре",
        price: 175,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/b37a2fc8d9ac4636957fdd71f62d1725_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/b37a2fc8d9ac4636957fdd71f62d1725_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Карамельное яблоко молочный коктейль",
        description: "Уютное сочетание яблочного вкуса, теплой карамели, молока и мороженого в вашем стакане",
        price: 249,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/7d8acee0f9984844bdeb3e22d359a4fc_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/7d8acee0f9984844bdeb3e22d359a4fc_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Шоколадный молочный коктейль",
        description: "Очаровательная шоколадная нежность. Попробуйте молочный коктейль с какао и мороженым",
        price: 225,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/8f463da299934c02be98098809ceb885_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/8f463da299934c02be98098809ceb885_366x366.webp",
        popular: 5
    },
    {
        id: exports.uuid.v1(),
        title: "Молочный коктейль с печеньем Орео",
        description: "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
        price: 202,
        urlPng: "https://dodopizza-a.akamaihd.net/static/Img/Products/de7a12c1a960434cadc309df31da75ed_366x366.png",
        urlWebp: "https://dodopizza-a.akamaihd.net/static/Img/Products/de7a12c1a960434cadc309df31da75ed_366x366.webp",
        popular: 5
    },
];
exports.products = {
    itemPizza: itemPizza,
    itemCoffee: exports.productCoffee,
    itemCocktail: exports.productСocktail
};
exports.basket = [];
