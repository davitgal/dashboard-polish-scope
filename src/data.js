// Задачи из ClickUp (Product & Engineering / Project = "Polishing scope")
// group: 'manual' | 'analytics' | 'technical'
//   manual     — можно проверить вручную, без технических навыков (открыть приложение/сайт и посмотреть)
//   analytics  — можно проверить через Firebase Crashlytics / Performance / GA4 / другие доступные дашборды
//   technical  — нельзя проверить без бэкенда / доступа к базе данных
//
// status: 'pending' | 'passed' | 'failed'  (ожидает проверки / отвалидировано / провалено)

export const GROUPS = {
  manual: {
    title: 'Ручная проверка',
    subtitle: 'Может проверить кто угодно — просто открыть приложение/сайт и посмотреть',
    color: '#2ecd6f',
  },
  analytics: {
    title: 'Проверка через аналитику',
    subtitle: 'Firebase Crashlytics, Performance, GA4, Pushwoosh и другие доступные дашборды',
    color: '#0091ff',
  },
  technical: {
    title: 'Требует технического доступа',
    subtitle: 'Нельзя проверить без бэкенда, базы данных или доступа разработчика',
    color: '#e5484d',
  },
};

export const TASKS = [
  {
    id: '86ey2q5m3',
    name: 'Define a Validation Process for New Scope Development Tasks',
    group: 'manual',
    how: 'Прочитать предложенный процесс/документ и согласовать с командой — техническая проверка не нужна.',
    url: 'https://app.clickup.com/t/86ey2q5m3',
  },
  {
    id: '86ey9ch7f',
    name: 'Rebranding UI Polishing 2',
    group: 'manual',
    how: 'Открыть приложение/сайт и визуально сверить брендинг (логотип, цвета, шрифты) на ключевых экранах.',
    url: 'https://app.clickup.com/t/86ey9ch7f',
  },
  {
    id: '86eun9uhg',
    name: 'Admin Panel Polishing (Epic)',
    group: 'manual',
    how: 'Пройтись по админ-панели глазами: вёрстка, отступы, читаемость — без технических знаний.',
    url: 'https://app.clickup.com/t/86eun9uhg',
  },
  {
    id: '86ey2md1c',
    name: "Broken banner images (40k 'not found' / 2 weeks)",
    group: 'manual',
    how: 'Пролистать баннеры в приложении/на сайте и убедиться, что картинки грузятся без "битых" плейсхолдеров.',
    url: 'https://app.clickup.com/t/86ey2md1c',
  },
  {
    id: '86ey2mcbj',
    name: 'Force old iPhone users to update',
    group: 'manual',
    how: 'Открыть старую версию приложения (или попросить QA) и проверить, что появляется принудительный экран обновления.',
    url: 'https://app.clickup.com/t/86ey2mcbj',
  },
  {
    id: '86ey2mcje',
    name: 'Cinema booking throws errors mid-purchase',
    group: 'manual',
    how: 'Пройти вручную полный флоу покупки билета в Kinopark от начала до конца несколько раз подряд.',
    url: 'https://app.clickup.com/t/86ey2mcje',
  },
  {
    id: '86ey2mcu2',
    name: "Topping up a child's card fails 3 out of 4 times",
    group: 'manual',
    how: 'Сделать несколько тестовых пополнений детской карты подряд и проверить, что деньги доходят каждый раз.',
    url: 'https://app.clickup.com/t/86ey2mcu2',
  },

  // ---- Analytics ----
  {
    id: '86ey2mcnz',
    name: 'Another recurring iOS crash (low volume)',
    group: 'analytics',
    how: 'Firebase Crashlytics → iOS → проверить, что краш не появляется на новых версиях приложения.',
    url: 'https://app.clickup.com/t/86ey2mcnz',
  },
  {
    id: '86ey2mc73',
    name: "1 in 6 Android phones can't receive push at all",
    group: 'analytics',
    how: 'Firebase Analytics / Pushwoosh: доля устройств с null push-token — должна быть <2%.',
    url: 'https://app.clickup.com/t/86ey2mc73',
  },
  {
    id: '86ey2mc5p',
    name: 'iOS shops/search crash (came back)',
    group: 'analytics',
    how: 'Firebase Crashlytics → iOS → экран Shops/Search, убедиться, что событий крашей больше нет.',
    url: 'https://app.clickup.com/t/86ey2mc5p',
  },
  {
    id: '86ey2mbu1',
    name: 'iOS payment-screen crash (new, latest version)',
    group: 'analytics',
    how: 'Firebase Crashlytics → iOS → payment screen, 0 событий за 3+ дня на последней версии.',
    url: 'https://app.clickup.com/t/86ey2mbu1',
  },
  {
    id: '86ey2mbvz',
    name: 'Android launch crash (new)',
    group: 'analytics',
    how: 'Firebase Crashlytics → Android → crash-free users по этому крашу должен быть 100%.',
    url: 'https://app.clickup.com/t/86ey2mbvz',
  },
  {
    id: '86ey2mckg',
    name: 'Android carousel crash (came back)',
    group: 'analytics',
    how: 'Firebase Crashlytics → Android → карусель, проверить отсутствие новых событий.',
    url: 'https://app.clickup.com/t/86ey2mckg',
  },
  {
    id: '86ey2mbqh',
    name: 'NotificationManager crash (~100k errors / 14 days)',
    group: 'analytics',
    how: 'Firebase Crashlytics → искать NotificationManager, убедиться что объём событий упал до нуля/минимума.',
    url: 'https://app.clickup.com/t/86ey2mbqh',
  },
  {
    id: '86ey2mczw',
    name: "We can't measure app/API speed",
    group: 'analytics',
    how: 'Firebase Performance Monitoring: проверить, что метрики по времени ответа теперь видны по эндпоинтам.',
    url: 'https://app.clickup.com/t/86ey2mczw',
  },
  {
    id: '86eycz01f',
    name: 'GA4 Web Events – Polishing & Final Improvements',
    group: 'analytics',
    how: 'GA4 DebugView / Realtime: проверить, что нужные события приходят корректно с сайта.',
    url: 'https://app.clickup.com/t/86eycz01f',
  },

  // ---- Technical / backend / DB ----
  {
    id: '86ey2mcxy',
    name: 'Payment amounts stored as text, not numbers',
    group: 'technical',
    how: 'Нужен доступ к базе данных, чтобы проверить тип поля и корректность сумм в новых транзакциях.',
    url: 'https://app.clickup.com/t/86ey2mcxy',
  },
  {
    id: '86ey2mc3n',
    name: "API is 'open by default' — switch to 'locked by default'",
    group: 'technical',
    how: 'Требует технической проверки конфигурации бэкенда/эндпоинтов разработчиком.',
    url: 'https://app.clickup.com/t/86ey2mc3n',
  },
  {
    id: '86ey2mcmw',
    name: 'TelCell integration — 69% pending / 27% success',
    group: 'technical',
    how: 'Нужны данные по транзакциям из базы/платёжного шлюза, чтобы пересчитать % успешных TelCell-платежей.',
    url: 'https://app.clickup.com/t/86ey2mcmw',
  },
  {
    id: '86ey2mcdp',
    name: 'Passwords use outdated protection',
    group: 'technical',
    how: 'Проверка алгоритма хэширования паролей — доступно только разработчику с доступом к коду/БД.',
    url: 'https://app.clickup.com/t/86ey2mcdp',
  },
  {
    id: '86ey2md4h',
    name: 'Pending reconciliation across ALL payment types — scheduled re-check job',
    group: 'technical',
    how: 'Нужно смотреть логи/БД, что фоновая job действительно запускается и разруливает pending-транзакции.',
    url: 'https://app.clickup.com/t/86ey2md4h',
  },
  {
    id: '86ey2mbnr',
    name: 'Payment idempotency / dedup across ALL payment flows',
    group: 'technical',
    how: 'Требует технического тестирования (повторные запросы к API) и проверки в базе данных.',
    url: 'https://app.clickup.com/t/86ey2mbnr',
  },
  {
    id: '86ey2mcvr',
    name: "'Verified user' flag is broken & misleading",
    group: 'technical',
    how: 'Нужна проверка логики флага в базе данных/бэкенде.',
    url: 'https://app.clickup.com/t/86ey2mcvr',
  },
  {
    id: '86ey2md3p',
    name: 'People create up to 10 accounts per phone',
    group: 'technical',
    how: 'Нужен запрос к базе данных, чтобы посчитать дубли аккаунтов по номеру телефона.',
    url: 'https://app.clickup.com/t/86ey2md3p',
  },
  {
    id: '86ey2mbxx',
    name: 'Powerful access key stored in plain text',
    group: 'technical',
    how: 'Проверка хранения секретов — доступно только разработчику/DevOps.',
    url: 'https://app.clickup.com/t/86ey2mbxx',
  },
  {
    id: '86ey2mc9k',
    name: 'False-completed tickets — retry Vista barcode + alert on completed order with no barcode',
    group: 'technical',
    how: 'Нужен доступ к БД/Vista, чтобы проверить, что алерты и retry реально срабатывают.',
    url: 'https://app.clickup.com/t/86ey2mc9k',
  },
  {
    id: '86ey2md61',
    name: 'KinoPark Gift Card integration audit — anomalous 22% external-error rate',
    group: 'technical',
    how: 'Нужны логи/данные интеграции с Vista, чтобы пересчитать процент ошибок.',
    url: 'https://app.clickup.com/t/86ey2md61',
  },
  {
    id: '86ey2mcpz',
    name: "Two backend services aren't monitored",
    group: 'technical',
    how: 'Проверка настроена ли мониторинг (Sentry/DSN) — доступно DevOps/разработчику.',
    url: 'https://app.clickup.com/t/86ey2mcpz',
  },
  {
    id: '86ey2md37',
    name: 'Payment/gift-card edge-case errors',
    group: 'technical',
    how: 'Нужна проверка логов ошибок и edge-кейсов в коде/БД.',
    url: 'https://app.clickup.com/t/86ey2md37',
  },
  {
    id: '86ey2mcm8',
    name: '~32,000 club-card passwords stored in plain text',
    group: 'technical',
    how: 'Проверка хранения паролей в базе данных — доступно только разработчику.',
    url: 'https://app.clickup.com/t/86ey2mcm8',
  },
];
