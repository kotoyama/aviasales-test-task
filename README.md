# ✈ aviasales-test-task

Описание задания можно посмотреть [здесь](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend).<br />
С задеплоенным приложением можно ознакомиться [тут](https://aviasales-test-task-theta.vercel.app/).

## Как запустить


```bash
# установка зависимостей
$ yarn install

# запуск в режиме разработки
$ yarn start
```

## Стэк

- [TypeScript](https://typescriptlang.org)
- [Webpack](https://webpack.js.org)
- [React](https://ru.reactjs.org)
- [Effector](https://effector.dev)
- [Linaria](https://linaria.dev)

## Почему именно эти инструменты

### Бандлер

Стандартный и наиболее популярный бандлер в современном фронтенде. Кроме того, я время от времени актуализирую свой темплейт с конфигом вебпака и решила, почему бы не воспользоваться им в этом задании.

### Стейт-менеджер

Мир фронтенда — event-driven: пользователь всё время генерирует событие за событием, а эффектор помогает справляться с задачами декларативным путём.

### Стили

Взяла линарию из-за схожести API со styled-components, к тому же это zero-runtime CSS-in-JS.

## Доступные скрипты

- `yarn start` - запуск локального сервера в режиме разработки
- `yarn build` - запуск сборки бандла для продакшена
- `yarn build:live` - запуск собранного бандла в локальном режиме
- `yarn format` - запуск форматирования кода
- `yarn lint:code` - запуск линтинга кода
- `yarn lint:code:fix` - запуск линтинга кода с автофиксом
- `yarn lint:styles` - запуск линтинга стилей
- `yarn lint:styles:fix` - запуск линтинга стилей с автофиксом
- `yarn test` - запуск тестов
- `yarn test:watch` - запуск тестов в watch-режиме
- `yarn test:coverage` - запуск тестов с генерацией отчета по покрытию
- `yarn commit` - генерация осмысленного коммита
