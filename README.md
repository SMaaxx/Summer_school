**Products List App**

Тестовое задание - система управления товарами через API (JavaScript, Node.JS, Express.JS, MongoDB)

Для запуска приложения нужно:
1) Склонировать проект
2) Перейти в локальную папку `Summer_school`
3) Запустить в консоли `yarn start`

После запуска API будет доступно по адресу `http://localhost:3001/api`  

Доступные методы: 
1) POST /products/create - `Создает продукт`
2) GET /products - `Выводит список всех продуктов` 
3) GET /products/:id - `Выводит выбранный продукт по id`
4) PUT /products/:id/update - `Изменяет выбранный продукт по id`
5) DELETE /products/:id/delete - `Удаляет выбраный продукт по id`

Поля продукта: 
1) sku - `Артикул товара`
2) name - `Название товара`
3) type - `тип товара`
4) cost - `цена товара`