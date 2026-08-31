// Задачи из ClickUp (Product & Engineering / Development tasks, custom field
// Project = "Polishing scope"). Список сверен вручную по всем 26 задачам —
// это финальный, полный список (без Epic'ов и служебных задач, которые
// раньше сюда попадали по ошибке).
//
// group: 'manual' | 'analytics' | 'technical'
//   manual     — можно проверить вручную, без технических навыков (открыть приложение/сайт и попробовать сценарий)
//   analytics  — можно проверить через Firebase Crashlytics / Performance / GA4 / Pushwoosh и другие доступные дашборды
//   technical  — нельзя проверить без бэкенда / доступа к базе данных / логам — но ниже всё равно расписано,
//                что именно должен проверить разработчик, а не просто "недоступно"
//
// status: 'pending' | 'passed' | 'failed'  (ожидает проверки / отвалидировано / провалено)

export const GROUPS = {
  manual: {
    title: 'Ручная проверка',
    subtitle: 'Может проверить кто угодно — просто открыть приложение/сайт и попробовать сценарий',
    color: '#2ecd6f',
  },
  analytics: {
    title: 'Проверка через аналитику',
    subtitle: 'Firebase Crashlytics, Performance, GA4, Pushwoosh и другие доступные дашборды',
    color: '#0091ff',
  },
  technical: {
    title: 'Требует технического доступа',
    subtitle: 'Нельзя проверить без бэкенда, базы данных или доступа разработчика — ниже описано, что именно проверять',
    color: '#e5484d',
  },
};

export const TASKS = [
  // ---- Manual ----
  {
    id: '86ey2md1c',
    name: "Broken banner images (40k 'not found' / 2 weeks)",
    group: 'manual',
    how: 'Пройтись по всем баннерам в приложении и на сайте (главная, KinoPark, промо, YM), особенно по старым/архивным акциям и прошедшим событиям — раньше именно на них картинка не грузилась ("not found"). Битых плейсхолдеров быть не должно.',
    url: 'https://app.clickup.com/t/86ey2md1c',
  },
  {
    id: '86ey2mcbj',
    name: 'Force old iPhone users to update',
    group: 'manual',
    how: 'Поставить на тестовый iPhone версию приложения ниже минимально поддерживаемой (или попросить QA) — должен появиться экран принудительного обновления, который нельзя закрыть/пропустить, в отличие от старого баннера-напоминания.',
    url: 'https://app.clickup.com/t/86ey2mcbj',
  },
  {
    id: '86ey2mcje',
    name: 'Cinema booking throws errors mid-purchase',
    group: 'manual',
    how: 'Пройти полный флоу покупки билета в Kinopark несколько раз подряд (выбор сеанса → места → оплата → билет), в том числе искусственно затянув шаг с корзиной, чтобы истекла сессия — заказ не должен "теряться" с ошибкой.',
    url: 'https://app.clickup.com/t/86ey2mcje',
  },
  {
    id: '86ey2mcu2',
    name: "Topping up a child's card fails 3 out of 4 times",
    group: 'manual',
    how: 'Сделать 4–5 тестовых пополнений детской (Kid) карты подряд разными суммами. Раньше проходило ~1 из 4 попыток; после фикса должно проходить больше 60%, без ошибок сервера.',
    url: 'https://app.clickup.com/t/86ey2mcu2',
  },
  {
    id: '86ey2md3p',
    name: 'People create up to 10 accounts per phone',
    group: 'manual',
    how: 'Попробовать зарегистрировать в приложении/на сайте несколько аккаунтов подряд на один и тот же номер телефона — после фикса система должна отказать после достижения лимита (раньше можно было создать до 10 аккаунтов на один номер).',
    url: 'https://app.clickup.com/t/86ey2md3p',
  },

  // ---- Analytics ----
  {
    id: '86ey2mcnz',
    name: 'Another recurring iOS crash (low volume)',
    group: 'analytics',
    how: 'Firebase Crashlytics → iOS: найти краш, связанный с переиспользованием ячеек списка (list-cell reuse). За несколько дней после фикса новых событий по нему быть не должно.',
    url: 'https://app.clickup.com/t/86ey2mcnz',
  },
  {
    id: '86ey2mc73',
    name: "1 in 6 Android phones can't receive push at all",
    group: 'analytics',
    how: 'Firebase Analytics / Pushwoosh: доля Android-устройств с пустым (null) push-токеном. Было ~16% — после фикса должно быть меньше 2%.',
    url: 'https://app.clickup.com/t/86ey2mc73',
  },
  {
    id: '86ey2mc5p',
    name: 'iOS shops/search crash (came back)',
    group: 'analytics',
    how: 'Firebase Crashlytics → iOS → экран Shops/Search: это регресс старого краша, проверить, что новых событий нет и что добавлен регрессионный тест (уточнить у разработчика).',
    url: 'https://app.clickup.com/t/86ey2mc5p',
  },
  {
    id: '86ey2mbu1',
    name: 'iOS payment-screen crash (new, latest version)',
    group: 'analytics',
    how: 'Firebase Crashlytics → iOS → последняя версия приложения, экран оплаты. Критерий: 0 событий крашей в течение 3+ дней после фикса.',
    url: 'https://app.clickup.com/t/86ey2mbu1',
  },
  {
    id: '86ey2mbvz',
    name: 'Android launch crash (new)',
    group: 'analytics',
    how: 'Firebase Crashlytics → Android: посмотреть crash-free rate именно по этому крашу (он мешал приложению открыться) — должен быть 100%.',
    url: 'https://app.clickup.com/t/86ey2mbvz',
  },
  {
    id: '86ey2mckg',
    name: 'Android carousel crash (came back)',
    group: 'analytics',
    how: 'Firebase Crashlytics → Android → карусель картинок на главной: после добавления защиты от NaN новых событий крашей быть не должно.',
    url: 'https://app.clickup.com/t/86ey2mckg',
  },
  {
    id: '86ey2mbqh',
    name: 'NotificationManager crash (~100k errors / 14 days)',
    group: 'analytics',
    how: 'Firebase Crashlytics/Sentry: искать NotificationManager. Раньше это было ~100 000 ошибок за 2 недели (самый большой источник ошибок бэкенда) — после фикса объём должен упасть практически до нуля.',
    url: 'https://app.clickup.com/t/86ey2mbqh',
  },
  {
    id: '86ey2mczw',
    name: "We can't measure app/API speed",
    group: 'analytics',
    how: 'Firebase Performance Monitoring: проверить, что появились метрики времени ответа по эндпоинтам API — раньше их не было видно вообще нигде.',
    url: 'https://app.clickup.com/t/86ey2mczw',
  },

  // ---- Technical / backend / DB (нужен доступ разработчика, но ниже — конкретный чек-лист) ----
  {
    id: '86ey2mcxy',
    name: 'Payment amounts stored as text, not numbers',
    group: 'technical',
    how: 'Разработчику: проверить в БД тип поля с суммой платежа (должен быть numeric, а не text) и прогнать свежие транзакции — сумма не должна давать аномальных итогов (раньше встречались суммы вроде "миллиард AMD").',
    url: 'https://app.clickup.com/t/86ey2mcxy',
  },
  {
    id: '86ey2mc3n',
    name: "API is 'open by default' — switch to 'locked by default'",
    group: 'technical',
    how: 'Разработчику: пройтись по списку API-эндпоинтов и дёрнуть их без авторизации (без токена) — каждый должен вернуть 401/403, а не отдать данные. Раньше по умолчанию было открыто, если эндпоинт явно не закрыли.',
    url: 'https://app.clickup.com/t/86ey2mc3n',
  },
  {
    id: '86ey2mcmw',
    name: 'TelCell integration — 69% pending / 27% success',
    group: 'technical',
    how: 'Нужны данные по транзакциям (БД/BI): пересчитать долю успешных TelCell-платежей за период после фикса. Было ~27% успех / 69% pending — ожидается уровень, сравнимый с картами (~60%+).',
    url: 'https://app.clickup.com/t/86ey2mcmw',
  },
  {
    id: '86ey2mcdp',
    name: 'Passwords use outdated protection',
    group: 'technical',
    how: 'Разработчику: проверить в коде/БД, что для новых и изменённых паролей используется современное соленое хэширование, а не старый метод без соли.',
    url: 'https://app.clickup.com/t/86ey2mcdp',
  },
  {
    id: '86ey2md4h',
    name: 'Pending reconciliation across ALL payment types — scheduled re-check job',
    group: 'technical',
    how: 'Нужен доступ к БД/логам: убедиться, что запущена cron-джоба, которая по всем способам оплаты (Idram, TelCell, карты, подарочные карты) переоткрывает старые pending-транзакции, сверяется напрямую с провайдером и проставляет финальный статус — completed или failed, а не оставляет висеть.',
    url: 'https://app.clickup.com/t/86ey2md4h',
  },
  {
    id: '86ey2mbnr',
    name: 'Payment idempotency / dedup across ALL payment flows',
    group: 'technical',
    how: 'Технический тест (API): повторить один и тот же запрос на инициацию оплаты в пределах окна идемпотентности по разным способам оплаты — повторная попытка должна блокироваться, а не приводить ко второму списанию. Проверяется по логам/БД.',
    url: 'https://app.clickup.com/t/86ey2mbnr',
  },
  {
    id: '86ey2mcvr',
    name: "'Verified user' flag is broken & misleading",
    group: 'technical',
    how: 'Разработчику: проверить в коде/БД, что старый нерабочий с 2024 года флаг "verified user" убран из отчётов/дашбордов и аналитика опирается на актуальное поле верификации.',
    url: 'https://app.clickup.com/t/86ey2mcvr',
  },
  {
    id: '86ey2mbxx',
    name: 'Powerful access key stored in plain text',
    group: 'technical',
    how: 'DevOps: убедиться, что старый Sentry-ключ с правом записи отозван (rotated), новый ключ выдан только с правами read-only и хранится не открытым текстом в конфиге, а в секретном хранилище.',
    url: 'https://app.clickup.com/t/86ey2mbxx',
  },
  {
    id: '86ey2mc9k',
    name: 'False-completed tickets — retry Vista barcode + alert on completed order with no barcode',
    group: 'technical',
    how: 'Нужен доступ к БД/логам: найти заказы со статусом completed, у которых нет билета/barcode от Vista — таких быть не должно (раньше ~436 случаев на ~2,68 млн AMD). Также проверить, что при повторном таком случае срабатывает алерт и делается повторная попытка получить barcode.',
    url: 'https://app.clickup.com/t/86ey2mc9k',
  },
  {
    id: '86ey2md61',
    name: 'KinoPark Gift Card integration audit — anomalous 22% external-error rate',
    group: 'technical',
    how: 'Нужны логи/данные интеграции с Vista: пересчитать процент внешних ошибок по оплате подарочными картами KinoPark. Было ~22% ошибок при health ~69% — после фикса показатель здоровья должен вырасти.',
    url: 'https://app.clickup.com/t/86ey2md61',
  },
  {
    id: '86ey2mcpz',
    name: "Two backend services aren't monitored",
    group: 'technical',
    how: 'DevOps: зайти в систему мониторинга (Sentry и т.п.) и убедиться, что оба ранее "немых" backend-сервиса теперь шлют туда ошибки/события.',
    url: 'https://app.clickup.com/t/86ey2mcpz',
  },
  {
    id: '86ey2md37',
    name: 'Payment/gift-card edge-case errors',
    group: 'technical',
    how: 'Нужен доступ к системе логирования ошибок (Sentry): проверить количество NRE/nullable-ошибок в админке и во флоу оплаты подарочными картами — после фикса должно стремиться к нулю.',
    url: 'https://app.clickup.com/t/86ey2md37',
  },
  {
    id: '86ey2mcm8',
    name: '~32,000 club-card passwords stored in plain text',
    group: 'technical',
    how: 'Нужен доступ к БД: убедиться, что поле с паролями клубных карт больше не хранится читаемым текстом — либо зашифровано, либо удалено (затрагивало ~32 000 записей).',
    url: 'https://app.clickup.com/t/86ey2mcm8',
  },
];
