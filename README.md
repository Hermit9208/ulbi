# Production Project

React-приложение с авторизацией, профилями пользователей, списком статей, детальной страницей статьи, комментариями, рейтингами, уведомлениями и ролевым доступом к админ-панели.

Проект построен как учебно-производственный frontend: в нем есть Feature-Sliced Design, асинхронная подгрузка редьюсеров, локальный mock API, Storybook, unit-тесты и визуальные регрессионные тесты.

## Стек

- React 18
- TypeScript
- Redux Toolkit, RTK Query
- React Router
- Axios
- i18next
- SCSS Modules
- Webpack 5
- Vite
- Jest, React Testing Library
- Storybook
- Loki
- ESLint, Stylelint

## Запуск проекта

Установите зависимости:

```bash
npm install
```

Запуск frontend на Webpack:

```bash
npm start
```

Запуск frontend на Vite:

```bash
npm run start:vite
```

Запуск frontend вместе с локальным mock API:

```bash
npm run start:dev
```

или через Vite:

```bash
npm run start:dev:vite
```

По умолчанию:

- Webpack dev server: `http://localhost:3000`
- Vite dev server: `http://localhost:5173`
- Mock API: `http://localhost:8000`

## Тестовые пользователи

Данные берутся из `json-server/db.json`.

| Логин | Пароль | Роль |
| --- | --- | --- |
| `admin` | `123` | `ADMIN` |
| `manager` | `123` | `MANAGER` |
| `user` | `123` | `USER` |

Страницы профиля, статей и деталей статьи требуют авторизации. Страница `/admin` доступна пользователям с ролями `ADMIN` и `MANAGER`.

## Доступные скрипты

### Разработка

```bash
npm start
npm run start:vite
npm run start:dev
npm run start:dev:vite
npm run start:dev:server
```

### Сборка

```bash
npm run build:dev
npm run build:prod
```

### Линтинг

```bash
npm run lint:ts
npm run lint:ts:fix
npm run lint:scss
npm run lint:scss:fix
```

### Тесты

```bash
npm run test:unit
npm run test:ui
npm run test:ui:ok
npm run test:ui:ci
npm run test:ui:report
```

### Storybook

```bash
npm run storybook
npm run storybook:build
```

### Генерация слайса

```bash
npm run generate:slice
```

## Архитектура

Проект использует Feature-Sliced Design:

```text
src/
  app/       конфигурация приложения, провайдеры, роутинг, глобальные стили
  pages/     страницы приложения
  widgets/   крупные независимые блоки интерфейса
  features/  пользовательские сценарии и бизнес-фичи
  entities/  бизнес-сущности
  shared/    переиспользуемые библиотеки, UI-kit, API, конфиги и типы
```

Основные страницы:

- `/` - главная
- `/about` - о проекте
- `/profile/:id` - профиль пользователя
- `/articles` - список статей
- `/articles/:id` - детальная страница статьи
- `/articles/new` - создание статьи
- `/articles/:id/edit` - редактирование статьи
- `/admin` - админ-панель
- `/forbidden` - нет доступа

## Mock API

Локальный сервер находится в папке `json-server`.

- `json-server/index.js` - настройка сервера, задержка ответа, логин и проверка авторизации
- `json-server/db.json` - данные для статей, комментариев, профилей, пользователей, уведомлений и рейтингов

После логина данные пользователя сохраняются в `localStorage`, а API-запросы отправляют их в заголовке `Authorization`.

## Конфигурация

- `webpack.config.ts` - основная Webpack-конфигурация
- `vite.config.ts` - Vite-конфигурация
- `config/build` - декомпозированная сборка Webpack
- `config/jest` - Jest
- `config/storybook` - Storybook
- `.eslintrc.js` - правила ESLint, включая проверки архитектурных импортов
- `.stylelintrc.json` - правила Stylelint

## Визуальное тестирование

Для UI-регрессии используется Loki. Конфигурация находится в `package.json`, отчеты генерируются в `.loki`.

Типовой сценарий:

```bash
npm run storybook:build
npm run test:ui:ci
npm run test:ui:report
```
