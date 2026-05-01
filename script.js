const consoleDefaultCode = `// JavaScript console
const name = "Anna";
const score = 95;

console.log("Student:", name);
console.log("Score:", score);
console.log("Result:", score + 5);`;

const builderDefaultHtml = `<section class="card">
  <p class="eyebrow">Live Preview</p>
  <h2>Hello, Playground</h2>
  <p>Edit this HTML and CSS, then click Run.</p>
  <button>Try</button>
</section>`;

const builderDefaultCss = `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  font-family: Arial, sans-serif;
}

.card {
  width: min(420px, calc(100% - 32px));
  padding: 32px;
  border-radius: 24px;
  background: white;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
}

.eyebrow {
  margin: 0 0 12px;
  color: #2563eb;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

h2 {
  margin: 0 0 12px;
  font-size: 36px;
}

p {
  color: #475569;
  line-height: 1.6;
}

button {
  margin-top: 16px;
  padding: 12px 18px;
  border: none;
  border-radius: 999px;
  background: #2563eb;
  color: white;
}`;

const IS_DEVELOPER = true;

const trainingAvatars = [
  { id: "cat", nameKey: "avatar_cat", badge: "🐱", className: "avatar-theme-cat" },
  { id: "fox", nameKey: "avatar_fox", badge: "🦊", className: "avatar-theme-fox" },
  { id: "owl", nameKey: "avatar_owl", badge: "🦉", className: "avatar-theme-owl" },
  { id: "panda", nameKey: "avatar_panda", badge: "🐼", className: "avatar-theme-panda" },
  { id: "wolf", nameKey: "avatar_wolf", badge: "🐺", className: "avatar-theme-wolf" },
  { id: "bunny", nameKey: "avatar_bunny", badge: "🐰", className: "avatar-theme-bunny" },
  { id: "cloud", nameKey: "avatar_cloud", badge: "☁️", className: "avatar-theme-cloud" },
  { id: "star", nameKey: "avatar_star", badge: "⭐", className: "avatar-theme-star" },
  { id: "frog", nameKey: "avatar_frog", badge: "🐸", className: "avatar-theme-frog" },
  { id: "horse", nameKey: "avatar_horse", badge: "🐴", className: "avatar-theme-horse" },
  { id: "cow", nameKey: "avatar_cow", badge: "🐮", className: "avatar-theme-cow" },
  { id: "chicken", nameKey: "avatar_chicken", badge: "🐔", className: "avatar-theme-chicken" },
  { id: "duck", nameKey: "avatar_duck", badge: "🐤", className: "avatar-theme-duck" },
];

const courseContent = {
  en: [
    {
      id: "intro-course",
      kind: "lesson",
      title: "Introduction to the course",
      section: "Introduction",
      content: [],
    },
    {
      id: "how-course-works",
      kind: "lesson",
      title: "How this course works",
      section: "Introduction",
      content: [
        "The first lessons are theory lessons.",
        "They help students understand how to study, how lessons unlock, and how practice pages will appear later.",
        "When you want to edit this, you can simply change this text inside script.js.",
      ],
    },
    {
      id: "study-flow",
      kind: "lesson",
      title: "Study flow and progress",
      section: "Introduction",
      content: [
        "Each next lesson opens only after the previous lesson is completed.",
        "This keeps the learning path simple and prevents students from skipping the basic ideas too early.",
        "Later, this step can end with a few short questions before Unit 1 starts.",
      ],
    },
    {
      id: "unit-1-divider",
      kind: "divider",
      title: "Unit 1",
    },
    {
      id: "unit-1-code",
      kind: "lesson",
      title: "Understanding the Code",
      section: "Unit 1",
      content: [
        "This lesson begins Unit 1.",
        "Later, it can explain how to read JavaScript line by line and understand what the code is doing before trying to write your own answer.",
      ],
    },
    {
      id: "unit-1-variables",
      kind: "lesson",
      title: "let and const",
      section: "Unit 1",
      content: [
        "This lesson will later introduce variables and the difference between let and const.",
        "You can also add tasks here later with my help.",
      ],
    },
    {
      id: "unit-1-numbers",
      kind: "lesson",
      title: "Numbers and simple math",
      section: "Unit 1",
      content: [
        "This lesson will later move into numbers, basic operations, and small beginner-friendly math tasks.",
      ],
    },
  ],
  ru: [
    {
      id: "intro-course",
      kind: "lesson",
      title: "Introduction to the course",
      section: "Introduction",
      content: [],
    },
    {
      id: "how-course-works",
      kind: "lesson",
      title: "How this course works",
      section: "Introduction",
      content: [
        "Первые уроки будут теоретическими.",
        "Они помогают студенту понять, как учиться, как открываются уроки и как позже будут появляться практические страницы.",
        "Если ты захочешь это поменять, можно просто редактировать текст прямо в script.js.",
      ],
    },
    {
      id: "study-flow",
      kind: "lesson",
      title: "Study flow and progress",
      section: "Introduction",
      content: [
        "Каждый следующий урок открывается только после завершения предыдущего.",
        "Это делает путь обучения более простым и не даёт студенту слишком рано перескакивать через базовые идеи.",
        "Позже этот шаг может заканчиваться несколькими короткими вопросами перед началом Unit 1.",
      ],
    },
    {
      id: "unit-1-divider",
      kind: "divider",
      title: "Unit 1",
    },
    {
      id: "unit-1-code",
      kind: "lesson",
      title: "Understanding the Code",
      section: "Unit 1",
      content: [
        "Этот урок начинает Unit 1.",
        "Позже здесь можно объяснить, как читать JavaScript построчно и понимать, что делает код, ещё до попытки написать собственный ответ.",
      ],
    },
    {
      id: "unit-1-variables",
      kind: "lesson",
      title: "let and const",
      section: "Unit 1",
      content: [
        "Позже этот урок познакомит ученика с переменными и разницей между let и const.",
        "Сюда же потом можно добавить задания с моей помощью.",
      ],
    },
    {
      id: "unit-1-numbers",
      kind: "lesson",
      title: "Numbers and simple math",
      section: "Unit 1",
      content: [
        "Позже этот урок перейдёт к числам, простым действиям и маленьким математическим заданиям для новичков.",
      ],
    },
  ],
};

const defaultCourseLabels = {
  en: {
    "intro-course": { title: "Introduction to the course", section: "Introduction" },
    "how-course-works": { title: "How this course works", section: "Introduction" },
    "study-flow": { title: "Study flow and progress", section: "Introduction" },
    "unit-1-divider": { title: "Unit 1" },
    "unit-1-code": { title: "Understanding the Code", section: "Unit 1" },
    "unit-1-variables": { title: "let and const", section: "Unit 1" },
    "unit-1-numbers": { title: "Numbers and simple math", section: "Unit 1" },
  },
  ru: {
    "intro-course": { title: "Введение в курс", section: "Введение" },
    "how-course-works": { title: "Как работает этот курс", section: "Введение" },
    "study-flow": { title: "Прогресс и порядок обучения", section: "Введение" },
    "unit-1-divider": { title: "Юнит 1" },
    "unit-1-code": { title: "Понимание кода", section: "Юнит 1" },
    "unit-1-variables": { title: "let и const", section: "Юнит 1" },
    "unit-1-numbers": { title: "Числа и простая математика", section: "Юнит 1" },
  },
  uk: {
    "intro-course": { title: "Вступ до курсу", section: "Вступ" },
    "how-course-works": { title: "Як працює цей курс", section: "Вступ" },
    "study-flow": { title: "Прогрес і порядок навчання", section: "Вступ" },
    "unit-1-divider": { title: "Юніт 1" },
    "unit-1-code": { title: "Розуміння коду", section: "Юніт 1" },
    "unit-1-variables": { title: "let і const", section: "Юніт 1" },
    "unit-1-numbers": { title: "Числа і проста математика", section: "Юніт 1" },
  },
  es: {
    "intro-course": { title: "Introducción al curso", section: "Introducción" },
    "how-course-works": { title: "Cómo funciona este curso", section: "Introducción" },
    "study-flow": { title: "Progreso y flujo de estudio", section: "Introducción" },
    "unit-1-divider": { title: "Unidad 1" },
    "unit-1-code": { title: "Comprender el código", section: "Unidad 1" },
    "unit-1-variables": { title: "let y const", section: "Unidad 1" },
    "unit-1-numbers": { title: "Números y matemáticas simples", section: "Unidad 1" },
  },
  fr: {
    "intro-course": { title: "Introduction au cours", section: "Introduction" },
    "how-course-works": { title: "Comment fonctionne ce cours", section: "Introduction" },
    "study-flow": { title: "Progression et flux d'étude", section: "Introduction" },
    "unit-1-divider": { title: "Unité 1" },
    "unit-1-code": { title: "Comprendre le code", section: "Unité 1" },
    "unit-1-variables": { title: "let et const", section: "Unité 1" },
    "unit-1-numbers": { title: "Nombres et calcul simple", section: "Unité 1" },
  },
  ja: {
    "intro-course": { title: "コースの紹介", section: "イントロダクション" },
    "how-course-works": { title: "このコースの進め方", section: "イントロダクション" },
    "study-flow": { title: "学習の流れと進捗", section: "イントロダクション" },
    "unit-1-divider": { title: "ユニット 1" },
    "unit-1-code": { title: "コードを理解する", section: "ユニット 1" },
    "unit-1-variables": { title: "let と const", section: "ユニット 1" },
    "unit-1-numbers": { title: "数と基本の計算", section: "ユニット 1" },
  },
  zh: {
    "intro-course": { title: "课程介绍", section: "介绍" },
    "how-course-works": { title: "本课程如何运作", section: "介绍" },
    "study-flow": { title: "学习流程与进度", section: "介绍" },
    "unit-1-divider": { title: "单元 1" },
    "unit-1-code": { title: "理解代码", section: "单元 1" },
    "unit-1-variables": { title: "let 和 const", section: "单元 1" },
    "unit-1-numbers": { title: "数字与简单数学", section: "单元 1" },
  },
  ko: {
    "intro-course": { title: "코스 소개", section: "소개" },
    "how-course-works": { title: "이 코스의 진행 방식", section: "소개" },
    "study-flow": { title: "학습 흐름과 진행 상황", section: "소개" },
    "unit-1-divider": { title: "유닛 1" },
    "unit-1-code": { title: "코드 이해하기", section: "유닛 1" },
    "unit-1-variables": { title: "let 과 const", section: "유닛 1" },
    "unit-1-numbers": { title: "숫자와 쉬운 수학", section: "유닛 1" },
  },
};

const translations = {
  en: {
    topbar_title: "JAVASCRIPT LEARNING STUDIO",
    menu_home: "Home",
    menu_console: "Console",
    menu_builder: "HTML / CSS",
    menu_training: "Training",
    style_button: "Style",
    theme_blue: "Blue",
    theme_violet: "Violet",
    theme_green: "Green",
    theme_gold: "Gold",
    theme_white: "White",
    language_aria_label: "Choose language",
    lang_english: "English",
    lang_ukrainian: "Ukrainian",
    lang_russian: "Russian",
    lang_spanish: "Spanish",
    lang_french: "French",
    lang_japanese: "Japanese",
    lang_chinese: "Chinese",
    lang_korean: "Korean",
    hero_kicker: "JavaScript Learning Studio",
    hero_title: "A professional studio for future developers.",
    hero_text: "Structured lessons, practical coding, and focused creative tools designed to help beginners grow into confident developers with strong foundations and real development habits.",
    footer_brand: "JavaScript Learning Studio",
    footer_tagline: "A focused learning space for future developers.",
    footer_copyright: "© 2026 JavaScript Learning Studio",
    footer_rights: "All rights reserved.",
    footer_founded: "Founded in 2026",
    footer_contact: "Contact",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    card_console_title: "Console",
    card_console_text: "Write JavaScript, run it, and see output in a terminal-style panel.",
    card_console_button: "Open Console",
    card_builder_title: "HTML / CSS Builder",
    card_builder_text: "Write layout and styles on the left and preview the design on the right.",
    card_builder_button: "Open Builder",
    card_training_title: "Training",
    card_training_text: "Open a guided practice area with step-by-step JavaScript tasks from your course.",
    card_training_button: "Open Training",
    console_kicker: "Console",
    console_title: "Write JavaScript and check the output.",
    console_editor_label: "JavaScript",
    console_output_label: "Output",
    builder_kicker: "Builder",
    builder_title: "Build with HTML and CSS, then preview the result.",
    html_label: "HTML",
    css_label: "CSS",
    preview_label: "Preview",
    training_kicker: "Training",
    training_title: "Coding in JavaScript",
    training_intro_text: "Practice JavaScript with guided tasks from your course.",
    training_name_label: "Your name",
    training_name_error: "Please enter a name first.",
    training_avatar_button: "Choose avatar",
    training_start_button: "Next",
    training_banner_kicker: "Course menu",
    training_banner_text: "Open a lesson from the course menu and move through the material one step at a time.",
    training_welcome: "Welcome, {name}",
    training_previous: "Previous",
    training_next: "Next",
    training_locked: "Locked",
    training_open: "Open",
    training_contents_kicker: "Contents",
    training_topic_preview_title: "Choose a lesson from the course menu",
    training_topic_preview_text: "Later, each lesson can open theory, guided tasks, and practice steps.",
    training_back_to_menu: "Back to menu",
    training_edit: "Edit",
    training_save: "Save",
    training_helper_badge: "Helper",
    training_helper_title: "Ask helper",
    training_helper_toggle: "Ask",
    training_helper_placeholder: "Write your question here",
    training_helper_send: "Send",
    training_helper_reply: "Helper can be connected here next. For now, this is the place where your future lesson support will appear.",
    training_avatar_modal_kicker: "Avatar",
    training_avatar_modal_title: "Choose an avatar",
    avatar_cat: "Code Cat",
    avatar_fox: "Fox",
    avatar_owl: "Owl",
    avatar_panda: "Panda",
    avatar_wolf: "Wolf",
    avatar_bunny: "Bunny",
    avatar_cloud: "Cloud",
    avatar_star: "Star",
    avatar_frog: "Frog",
    avatar_horse: "Horse",
    avatar_cow: "Cow",
    avatar_chicken: "Chicken",
    avatar_duck: "Duck",
  },
  ru: {
    topbar_title: "JAVASCRIPT LEARNING STUDIO",
    menu_home: "Главная",
    menu_console: "Консоль",
    menu_builder: "HTML / CSS",
    menu_training: "Тренинг",
    style_button: "Стиль",
    theme_blue: "Синий",
    theme_violet: "Фиолетовый",
    theme_green: "Зелёный",
    theme_gold: "Золотой",
    theme_white: "Белый",
    language_aria_label: "Выбрать язык",
    lang_english: "Английский",
    lang_ukrainian: "Украинский",
    lang_russian: "Русский",
    lang_spanish: "Испанский",
    lang_french: "Французский",
    lang_japanese: "Японский",
    lang_chinese: "Китайский",
    lang_korean: "Корейский",
    hero_kicker: "JavaScript Learning Studio",
    hero_title: "Профессиональная студия для будущих developers.",
    hero_text: "Структурированные уроки, практика кода и продуманные инструменты, которые помогают новичкам выстроить сильную базу и уверенно войти в development.",
    footer_brand: "JavaScript Learning Studio",
    footer_tagline: "Пространство для обучения будущих developers.",
    footer_copyright: "© 2026 JavaScript Learning Studio",
    footer_rights: "Все права защищены.",
    footer_founded: "Основано в 2026",
    footer_contact: "Контакты",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",
    card_console_title: "Консоль",
    card_console_text: "Пиши JavaScript, запускай его и смотри вывод в панели результата.",
    card_console_button: "Открыть консоль",
    card_builder_title: "HTML / CSS Конструктор",
    card_builder_text: "Пиши разметку и стили слева и сразу смотри результат справа.",
    card_builder_button: "Открыть конструктор",
    card_training_title: "Тренинг",
    card_training_text: "Открой практическую зону с пошаговыми заданиями по JavaScript из твоего курса.",
    card_training_button: "Открыть тренинг",
    console_kicker: "Консоль",
    console_title: "Пиши JavaScript и проверяй результат.",
    console_editor_label: "JavaScript",
    console_output_label: "Вывод",
    builder_kicker: "Конструктор",
    builder_title: "Собирай HTML и CSS и сразу смотри результат.",
    html_label: "HTML",
    css_label: "CSS",
    preview_label: "Превью",
    training_kicker: "Тренинг",
    training_title: "Coding in JavaScript",
    training_intro_text: "Практика JavaScript с пошаговыми заданиями из твоего курса.",
    training_name_label: "Твоё имя",
    training_name_error: "Сначала введи имя.",
    training_avatar_button: "Выбрать аватар",
    training_start_button: "Далее",
    training_banner_kicker: "Меню курса",
    training_banner_text: "Открывай урок из меню курса и проходи материал шаг за шагом.",
    training_welcome: "Привет, {name}",
    training_previous: "Назад",
    training_next: "Далее",
    training_locked: "Закрыто",
    training_open: "Открыто",
    training_contents_kicker: "Содержание",
    training_topic_preview_title: "Выбери урок из меню курса",
    training_topic_preview_text: "Позже каждый урок сможет открывать теорию, guided tasks и практические шаги.",
    training_back_to_menu: "Назад в меню",
    training_edit: "Edit",
    training_save: "Save",
    training_helper_badge: "Helper",
    training_helper_title: "Спросить помощника",
    training_helper_toggle: "Ask",
    training_helper_placeholder: "Напиши сюда свой вопрос",
    training_helper_send: "Отправить",
    training_helper_reply: "Сюда потом можно подключить помощника. Пока это место для будущей поддержки внутри урока.",
    training_avatar_modal_kicker: "Аватар",
    training_avatar_modal_title: "Выбери аватар",
    avatar_cat: "Код-кот",
    avatar_fox: "Лиса",
    avatar_owl: "Сова",
    avatar_panda: "Панда",
    avatar_wolf: "Волк",
    avatar_bunny: "Кролик",
    avatar_cloud: "Облако",
    avatar_star: "Звезда",
    avatar_frog: "Жабка",
    avatar_horse: "Лошадка",
    avatar_cow: "Коровка",
    avatar_chicken: "Курочка",
    avatar_duck: "Уточка",
  },
};

const languageFallbacks = {
  uk: "en",
  es: "en",
  fr: "en",
  ja: "en",
  zh: "en",
  ko: "en",
};

Object.assign(translations.en, {
  action_clear: "Clear",
  action_run: "Run",
  action_reset: "Reset",
  action_undo: "Undo",
});

Object.assign(translations.ru, {
  action_clear: "Clear",
  action_run: "Запуск",
  action_reset: "Сброс",
  action_undo: "Отменить",
  training_edit: "Редактировать",
  training_save: "Сохранить",
  training_helper_badge: "Помощник",
  training_helper_toggle: "Спросить",
});

translations.uk = {
  ...translations.en,
  topbar_title: "JAVASCRIPT LEARNING STUDIO",
  menu_home: "Головна",
  menu_console: "Консоль",
  menu_training: "Тренінг",
  style_button: "Стиль",
  theme_blue: "Синій",
  theme_violet: "Фіолетовий",
  theme_green: "Зелений",
  theme_gold: "Золотий",
  theme_white: "Білий",
  language_aria_label: "Обрати мову",
  lang_english: "Англійська",
  lang_ukrainian: "Українська",
  lang_russian: "Російська",
  lang_spanish: "Іспанська",
  lang_french: "Французька",
  lang_japanese: "Японська",
  lang_chinese: "Китайська",
  lang_korean: "Корейська",
  hero_kicker: "JavaScript Learning Studio",
  hero_title: "Інтерактивне навчальне середовище для майбутніх розробників.",
  hero_text: "Вивчайте програмування через структуровані уроки, живу практику коду, експерименти в sandbox, побудову макетів і дослідження CSS.",
  card_console_text: "Пишіть JavaScript, запускайте його та дивіться результат у панелі виводу.",
  card_console_button: "Відкрити консоль",
  card_builder_title: "HTML / CSS Конструктор",
  card_builder_text: "Пишіть розмітку і стилі ліворуч та одразу дивіться результат праворуч.",
  card_builder_button: "Відкрити конструктор",
  card_training_title: "Тренінг",
  card_training_text: "Відкрийте практичну зону з покроковими завданнями JavaScript із вашого курсу.",
  card_training_button: "Відкрити тренінг",
  console_title: "Пишіть JavaScript і перевіряйте результат.",
  console_output_label: "Вивід",
  builder_kicker: "Конструктор",
  builder_title: "Створюйте HTML і CSS та одразу переглядайте результат.",
  preview_label: "Перегляд",
  training_kicker: "Тренінг",
  training_intro_text: "Практикуйте JavaScript за допомогою покрокових завдань із вашого курсу.",
  training_name_label: "Ваше ім'я",
  training_name_error: "Спочатку введіть ім'я.",
  training_avatar_button: "Обрати аватар",
  training_start_button: "Далі",
  training_banner_kicker: "Меню курсу",
  training_banner_text: "Відкривайте урок із меню курсу та проходьте матеріал крок за кроком.",
  training_welcome: "Вітаємо, {name}",
  training_previous: "Назад",
  training_next: "Далі",
  training_locked: "Закрито",
  training_open: "Відкрито",
  training_contents_kicker: "Зміст",
  training_topic_preview_title: "Оберіть урок із меню курсу",
  training_topic_preview_text: "Пізніше кожен урок зможе відкривати теорію, guided tasks і практичні кроки.",
  training_back_to_menu: "Назад до меню",
  training_edit: "Редагувати",
  training_save: "Зберегти",
  training_helper_badge: "Помічник",
  training_helper_title: "Запитати помічника",
  training_helper_toggle: "Запитати",
  training_helper_placeholder: "Напишіть своє запитання тут",
  training_helper_send: "Надіслати",
  training_helper_reply: "Сюди пізніше можна підключити помічника. Поки що це місце для майбутньої підтримки всередині уроку.",
  training_avatar_modal_kicker: "Аватар",
  training_avatar_modal_title: "Оберіть аватар",
  avatar_cat: "Код-кіт",
  avatar_fox: "Лис",
  avatar_owl: "Сова",
  avatar_bunny: "Кролик",
  avatar_cloud: "Хмаринка",
  avatar_star: "Зірка",
  avatar_frog: "Жабка",
  avatar_horse: "Коник",
  avatar_cow: "Корівка",
  avatar_chicken: "Курочка",
  avatar_duck: "Каченя",
  action_run: "Запуск",
  action_clear: "Очистити",
  action_reset: "Скинути",
  action_undo: "Скасувати",
};

translations.es = {
  ...translations.en,
  topbar_title: "JAVASCRIPT LEARNING STUDIO",
  menu_home: "Inicio",
  menu_console: "Consola",
  menu_training: "Entrenamiento",
  style_button: "Estilo",
  theme_blue: "Azul",
  theme_violet: "Violeta",
  theme_green: "Verde",
  theme_gold: "Dorado",
  theme_white: "Blanco",
  language_aria_label: "Elegir idioma",
  lang_english: "Inglés",
  lang_ukrainian: "Ucraniano",
  lang_russian: "Ruso",
  lang_spanish: "Español",
  lang_french: "Francés",
  lang_japanese: "Japonés",
  lang_chinese: "Chino",
  lang_korean: "Coreano",
  hero_kicker: "JavaScript Learning Studio",
  hero_title: "Un entorno de aprendizaje interactivo para futuros desarrolladores.",
  hero_text: "Aprende programación con lecciones estructuradas, práctica en vivo, experimentos en sandbox, maquetación y exploración de CSS.",
  card_console_button: "Abrir consola",
  card_builder_title: "Constructor HTML / CSS",
  card_builder_button: "Abrir constructor",
  card_training_title: "Entrenamiento",
  card_training_button: "Abrir entrenamiento",
  console_title: "Escribe JavaScript y revisa el resultado.",
  console_output_label: "Salida",
  builder_title: "Crea con HTML y CSS y luego mira el resultado.",
  preview_label: "Vista previa",
  training_kicker: "Entrenamiento",
  training_name_label: "Tu nombre",
  training_name_error: "Primero escribe tu nombre.",
  training_avatar_button: "Elegir avatar",
  training_start_button: "Siguiente",
  training_banner_kicker: "Menú del curso",
  training_banner_text: "Abre una lección desde el menú del curso y avanza paso a paso.",
  training_welcome: "Bienvenida, {name}",
  training_previous: "Anterior",
  training_next: "Siguiente",
  training_locked: "Bloqueado",
  training_open: "Abierto",
  training_contents_kicker: "Contenido",
  training_topic_preview_title: "Elige una lección del menú del curso",
  training_back_to_menu: "Volver al menú",
  training_edit: "Editar",
  training_save: "Guardar",
  training_helper_badge: "Ayuda",
  training_helper_title: "Preguntar al asistente",
  training_helper_toggle: "Preguntar",
  training_helper_placeholder: "Escribe tu pregunta aquí",
  training_helper_send: "Enviar",
  training_avatar_modal_kicker: "Avatar",
  training_avatar_modal_title: "Elige un avatar",
  action_run: "Ejecutar",
  action_clear: "Limpiar",
  action_reset: "Restablecer",
  action_undo: "Deshacer",
};

translations.fr = {
  ...translations.en,
  topbar_title: "JAVASCRIPT LEARNING STUDIO",
  menu_home: "Accueil",
  menu_console: "Console",
  menu_training: "Entraînement",
  style_button: "Style",
  theme_blue: "Bleu",
  theme_violet: "Violet",
  theme_green: "Vert",
  theme_gold: "Doré",
  theme_white: "Blanc",
  language_aria_label: "Choisir la langue",
  lang_english: "Anglais",
  lang_ukrainian: "Ukrainien",
  lang_russian: "Russe",
  lang_spanish: "Espagnol",
  lang_french: "Français",
  lang_japanese: "Japonais",
  lang_chinese: "Chinois",
  lang_korean: "Coréen",
  hero_kicker: "JavaScript Learning Studio",
  hero_title: "Un environnement d'apprentissage interactif pour les futurs développeurs.",
  hero_text: "Apprenez à programmer avec des leçons structurées, de la pratique en direct, des expériences sandbox, la création de mises en page et l'exploration du CSS.",
  card_console_button: "Ouvrir la console",
  card_builder_title: "Constructeur HTML / CSS",
  card_builder_button: "Ouvrir le constructeur",
  card_training_title: "Entraînement",
  card_training_button: "Ouvrir l'entraînement",
  console_title: "Écrivez du JavaScript et vérifiez le résultat.",
  console_output_label: "Sortie",
  builder_title: "Construisez avec HTML et CSS, puis prévisualisez le résultat.",
  preview_label: "Aperçu",
  training_kicker: "Entraînement",
  training_name_label: "Votre nom",
  training_name_error: "Veuillez d'abord entrer un nom.",
  training_avatar_button: "Choisir un avatar",
  training_start_button: "Suivant",
  training_banner_kicker: "Menu du cours",
  training_banner_text: "Ouvrez une leçon dans le menu du cours et avancez étape par étape.",
  training_welcome: "Bienvenue, {name}",
  training_previous: "Précédent",
  training_next: "Suivant",
  training_locked: "Verrouillé",
  training_open: "Ouvert",
  training_contents_kicker: "Contenu",
  training_topic_preview_title: "Choisissez une leçon dans le menu du cours",
  training_back_to_menu: "Retour au menu",
  training_edit: "Modifier",
  training_save: "Enregistrer",
  training_helper_badge: "Assistant",
  training_helper_title: "Demander de l'aide",
  training_helper_toggle: "Demander",
  training_helper_placeholder: "Écrivez votre question ici",
  training_helper_send: "Envoyer",
  training_avatar_modal_title: "Choisissez un avatar",
  action_run: "Exécuter",
  action_clear: "Effacer",
  action_reset: "Réinitialiser",
  action_undo: "Annuler",
};

translations.ja = {
  ...translations.en,
  topbar_title: "JAVASCRIPT LEARNING STUDIO",
  menu_home: "ホーム",
  menu_console: "コンソール",
  menu_training: "トレーニング",
  style_button: "スタイル",
  theme_blue: "ブルー",
  theme_violet: "バイオレット",
  theme_green: "グリーン",
  theme_gold: "ゴールド",
  theme_white: "ホワイト",
  language_aria_label: "言語を選択",
  lang_english: "英語",
  lang_ukrainian: "ウクライナ語",
  lang_russian: "ロシア語",
  lang_spanish: "スペイン語",
  lang_french: "フランス語",
  lang_japanese: "日本語",
  lang_chinese: "中国語",
  lang_korean: "韓国語",
  hero_kicker: "JavaScript Learning Studio",
  hero_title: "未来の開発者のためのインタラクティブ学習環境。",
  hero_text: "構造化されたレッスン、ライブコーディング、sandbox 実験、レイアウト作成、CSS 学習でプログラミングを学びましょう。",
  card_console_button: "コンソールを開く",
  card_builder_title: "HTML / CSS ビルダー",
  card_builder_button: "ビルダーを開く",
  card_training_title: "トレーニング",
  card_training_button: "トレーニングを開く",
  console_title: "JavaScript を書いて結果を確認しましょう。",
  console_output_label: "出力",
  builder_title: "HTML と CSS を書いて結果をプレビューしましょう。",
  preview_label: "プレビュー",
  training_kicker: "トレーニング",
  training_name_label: "名前",
  training_name_error: "まず名前を入力してください。",
  training_avatar_button: "アバターを選ぶ",
  training_start_button: "次へ",
  training_banner_kicker: "コースメニュー",
  training_banner_text: "コースメニューからレッスンを開き、順番に進めてください。",
  training_welcome: "ようこそ、{name}",
  training_previous: "前へ",
  training_next: "次へ",
  training_locked: "ロック中",
  training_open: "開く",
  training_contents_kicker: "内容",
  training_topic_preview_title: "コースメニューからレッスンを選んでください",
  training_back_to_menu: "メニューに戻る",
  training_edit: "編集",
  training_save: "保存",
  training_helper_badge: "ヘルパー",
  training_helper_title: "ヘルパーに聞く",
  training_helper_toggle: "質問する",
  training_helper_placeholder: "ここに質問を書いてください",
  training_helper_send: "送信",
  training_avatar_modal_title: "アバターを選んでください",
  action_run: "実行",
  action_clear: "クリア",
  action_reset: "リセット",
  action_undo: "元に戻す",
};

translations.zh = {
  ...translations.en,
  topbar_title: "JAVASCRIPT LEARNING STUDIO",
  menu_home: "主页",
  menu_console: "控制台",
  menu_training: "训练",
  style_button: "样式",
  theme_blue: "蓝色",
  theme_violet: "紫色",
  theme_green: "绿色",
  theme_gold: "金色",
  theme_white: "白色",
  language_aria_label: "选择语言",
  lang_english: "英语",
  lang_ukrainian: "乌克兰语",
  lang_russian: "俄语",
  lang_spanish: "西班牙语",
  lang_french: "法语",
  lang_japanese: "日语",
  lang_chinese: "中文",
  lang_korean: "韩语",
  hero_kicker: "JavaScript Learning Studio",
  hero_title: "面向未来开发者的互动学习环境。",
  hero_text: "通过结构化课程、实时编码练习、sandbox 实验、布局构建和 CSS 探索来学习编程。",
  card_console_button: "打开控制台",
  card_builder_title: "HTML / CSS 构建器",
  card_builder_button: "打开构建器",
  card_training_title: "训练",
  card_training_button: "打开训练",
  console_title: "编写 JavaScript 并检查输出。",
  console_output_label: "输出",
  builder_title: "使用 HTML 和 CSS 构建并预览结果。",
  preview_label: "预览",
  training_kicker: "训练",
  training_name_label: "你的名字",
  training_name_error: "请先输入名字。",
  training_avatar_button: "选择头像",
  training_start_button: "下一步",
  training_banner_kicker: "课程菜单",
  training_banner_text: "从课程菜单中打开课程并逐步学习。",
  training_welcome: "欢迎，{name}",
  training_previous: "上一步",
  training_next: "下一步",
  training_locked: "已锁定",
  training_open: "打开",
  training_contents_kicker: "目录",
  training_topic_preview_title: "请从课程菜单中选择一课",
  training_back_to_menu: "返回菜单",
  training_edit: "编辑",
  training_save: "保存",
  training_helper_badge: "助手",
  training_helper_title: "询问助手",
  training_helper_toggle: "提问",
  training_helper_placeholder: "在这里输入你的问题",
  training_helper_send: "发送",
  training_avatar_modal_title: "选择头像",
  action_run: "运行",
  action_clear: "清空",
  action_reset: "重置",
  action_undo: "撤销",
};

translations.ko = {
  ...translations.en,
  topbar_title: "JAVASCRIPT LEARNING STUDIO",
  menu_home: "홈",
  menu_console: "콘솔",
  menu_training: "트레이닝",
  style_button: "스타일",
  theme_blue: "파랑",
  theme_violet: "보라",
  theme_green: "초록",
  theme_gold: "골드",
  theme_white: "화이트",
  language_aria_label: "언어 선택",
  lang_english: "영어",
  lang_ukrainian: "우크라이나어",
  lang_russian: "러시아어",
  lang_spanish: "스페인어",
  lang_french: "프랑스어",
  lang_japanese: "일본어",
  lang_chinese: "중국어",
  lang_korean: "한국어",
  hero_kicker: "JavaScript Learning Studio",
  hero_title: "미래 개발자를 위한 인터랙티브 학습 환경.",
  hero_text: "구조화된 수업, 실시간 코딩 연습, sandbox 실험, 레이아웃 제작, CSS 학습으로 프로그래밍을 배워보세요.",
  card_console_button: "콘솔 열기",
  card_builder_title: "HTML / CSS 빌더",
  card_builder_button: "빌더 열기",
  card_training_title: "트레이닝",
  card_training_button: "트레이닝 열기",
  console_title: "JavaScript를 작성하고 결과를 확인하세요.",
  console_output_label: "출력",
  builder_title: "HTML과 CSS로 만들고 결과를 미리 보기하세요.",
  preview_label: "미리보기",
  training_kicker: "트레이닝",
  training_name_label: "이름",
  training_name_error: "먼저 이름을 입력하세요.",
  training_avatar_button: "아바타 선택",
  training_start_button: "다음",
  training_banner_kicker: "코스 메뉴",
  training_banner_text: "코스 메뉴에서 레슨을 열고 단계별로 진행하세요.",
  training_welcome: "환영합니다, {name}",
  training_previous: "이전",
  training_next: "다음",
  training_locked: "잠김",
  training_open: "열기",
  training_contents_kicker: "목차",
  training_topic_preview_title: "코스 메뉴에서 레슨을 선택하세요",
  training_back_to_menu: "메뉴로 돌아가기",
  training_edit: "편집",
  training_save: "저장",
  training_helper_badge: "도우미",
  training_helper_title: "도우미에게 묻기",
  training_helper_toggle: "질문하기",
  training_helper_placeholder: "여기에 질문을 입력하세요",
  training_helper_send: "보내기",
  training_avatar_modal_title: "아바타 선택",
  action_run: "실행",
  action_clear: "지우기",
  action_reset: "초기화",
  action_undo: "실행 취소",
};

Object.assign(translations.uk, {
  hero_title: "Професійна студія для майбутніх developers.",
  hero_text: "Структуровані уроки, практика коду та продумані інструменти, які допомагають новачкам створити сильну базу й упевнено увійти в development.",
});

Object.assign(translations.es, {
  hero_title: "Un estudio profesional para futuros developers.",
  hero_text: "Lecciones estructuradas, práctica de código y herramientas bien pensadas para ayudar a principiantes a construir una base sólida y entrar con confianza en development.",
});

Object.assign(translations.fr, {
  hero_title: "Un studio professionnel pour les futurs developers.",
  hero_text: "Des leçons structurées, de la pratique de code et des outils bien pensés pour aider les débutants à construire une base solide et entrer avec confiance dans le development.",
});

Object.assign(translations.ja, {
  hero_title: "未来の developers のためのプロフェッショナルなスタジオ。",
  hero_text: "構造化されたレッスン、コード練習、そして考え抜かれたツールで、初心者が強い基礎を作り、自信を持って development に進めるようにします。",
});

Object.assign(translations.zh, {
  hero_title: "面向未来 developers 的专业工作室。",
  hero_text: "结构化课程、代码练习和精心设计的工具，帮助初学者建立扎实基础，并更自信地进入 development。",
});

Object.assign(translations.ko, {
  hero_title: "미래 developers 를 위한 프로페셔널 스튜디오.",
  hero_text: "구조화된 수업, 코드 연습, 그리고 잘 설계된 도구로 초보자가 탄탄한 기초를 만들고 자신 있게 development 로 나아갈 수 있도록 돕습니다.",
});

function cloneLessonsForLanguage(sourceLanguage, titleMap, sectionMap = {}) {
  return courseContent[sourceLanguage].map((item) => {
    if (item.kind === "divider") {
      return {
        ...item,
        title: titleMap[item.id] || item.title,
      };
    }

    return {
      ...item,
      title: titleMap[item.id] || item.title,
      section: sectionMap[item.section] || item.section,
      content: [...(item.content || [])],
    };
  });
}

courseContent.uk = cloneLessonsForLanguage("en", {
  "intro-course": "Introduction to the course",
  "how-course-works": "How this course works",
  "study-flow": "Study flow and progress",
  "unit-1-divider": "Unit 1",
  "unit-1-code": "Understanding the Code",
  "unit-1-variables": "let and const",
  "unit-1-numbers": "Numbers and simple math",
});

courseContent.es = cloneLessonsForLanguage("en", {
  "intro-course": "Introducción al curso",
  "how-course-works": "Cómo funciona este curso",
  "study-flow": "Flujo de estudio y progreso",
  "unit-1-divider": "Unidad 1",
  "unit-1-code": "Comprender el código",
  "unit-1-variables": "let y const",
  "unit-1-numbers": "Números y matemáticas simples",
});

courseContent.fr = cloneLessonsForLanguage("en", {
  "intro-course": "Introduction au cours",
  "how-course-works": "Comment fonctionne ce cours",
  "study-flow": "Progression et flux d'étude",
  "unit-1-divider": "Unité 1",
  "unit-1-code": "Comprendre le code",
  "unit-1-variables": "let et const",
  "unit-1-numbers": "Nombres et calcul simple",
});

courseContent.ja = cloneLessonsForLanguage("en", {
  "intro-course": "コースの紹介",
  "how-course-works": "このコースの進め方",
  "study-flow": "学習の流れと進捗",
  "unit-1-divider": "ユニット 1",
  "unit-1-code": "コードを理解する",
  "unit-1-variables": "let と const",
  "unit-1-numbers": "数と基本の計算",
});

courseContent.zh = cloneLessonsForLanguage("en", {
  "intro-course": "课程介绍",
  "how-course-works": "本课程如何运作",
  "study-flow": "学习流程与进度",
  "unit-1-divider": "单元 1",
  "unit-1-code": "理解代码",
  "unit-1-variables": "let 和 const",
  "unit-1-numbers": "数字与简单数学",
});

courseContent.ko = cloneLessonsForLanguage("en", {
  "intro-course": "코스 소개",
  "how-course-works": "이 코스의 진행 방식",
  "study-flow": "학습 흐름과 진행 상황",
  "unit-1-divider": "유닛 1",
  "unit-1-code": "코드 이해하기",
  "unit-1-variables": "let 과 const",
  "unit-1-numbers": "숫자와 쉬운 수학",
});

const viewButtons = document.querySelectorAll("[data-view-target]");
const menuButtons = document.querySelectorAll(".menu-btn");
const views = document.querySelectorAll(".view");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nPlaceholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const i18nAriaNodes = document.querySelectorAll("[data-i18n-aria-label]");

const themeToggle = document.getElementById("theme-toggle");
const themeMenu = document.getElementById("theme-menu");
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");
const themeItems = document.querySelectorAll("[data-theme-value]");
const languageItems = document.querySelectorAll("[data-language-value]");
const topbarProfile = document.getElementById("topbar-profile");
const topbarProfileAvatar = document.getElementById("topbar-profile-avatar");
const topbarProfileName = document.getElementById("topbar-profile-name");

const consoleInput = document.getElementById("console-input");
const consoleHighlight = document.getElementById("console-highlight");
const consoleLineNumbers = document.getElementById("console-line-numbers");
const consoleOutput = document.getElementById("console-output");
const consoleClearButton = document.getElementById("console-clear-btn");
const consoleRunButton = document.getElementById("console-run-btn");
const consoleResetButton = document.getElementById("console-reset-btn");
const consoleDivider = document.getElementById("console-divider");
const consoleWorkspace = document.getElementById("console-workspace");

const htmlInput = document.getElementById("html-input");
const htmlHighlight = document.getElementById("html-highlight");
const htmlLineNumbers = document.getElementById("html-line-numbers");
const htmlUndoButton = document.getElementById("html-undo-btn");
const htmlResetButton = document.getElementById("html-reset-btn");
const cssInput = document.getElementById("css-input");
const cssHighlight = document.getElementById("css-highlight");
const cssLineNumbers = document.getElementById("css-line-numbers");
const cssUndoButton = document.getElementById("css-undo-btn");
const cssResetButton = document.getElementById("css-reset-btn");
const builderRunButton = document.getElementById("builder-run-btn");
const previewFrame = document.getElementById("preview-frame");

const trainingEntry = document.getElementById("training-entry");
const trainingCampus = document.getElementById("training-campus");
const trainingTopics = document.getElementById("training-topics");
const trainingNameInput = document.getElementById("training-name-input");
const trainingNameNote = document.getElementById("training-name-note");
const trainingStartButton = document.getElementById("training-start-btn");
const trainingAvatarOpenButton = document.getElementById("training-avatar-open-btn");
const trainingAvatarGrid = document.getElementById("training-avatar-grid");
const trainingWelcomeTitle = document.getElementById("training-welcome-title");
const avatarModal = document.getElementById("avatar-modal");
const avatarModalClose = document.getElementById("avatar-modal-close");
const avatarModalCloseButton = document.getElementById("avatar-modal-close-btn");
const trainingMenuPage = document.getElementById("training-menu-page");
const trainingDetailPage = document.getElementById("training-detail-page");
const trainingTopicPreviewTitle = document.getElementById("training-topic-preview-title");
const trainingTopicPreviewText = document.getElementById("training-topic-preview-text");
const trainingLessonMeta = document.getElementById("training-lesson-meta");
const trainingMetaEditor = document.getElementById("training-meta-editor");
const trainingTopicOpenButton = document.getElementById("training-topic-open-btn");
const trainingTopicPrevButton = document.getElementById("training-topic-prev-btn");
const trainingTopicPreviewCard = document.getElementById("training-topic-preview");
const trainingTitleEditor = document.getElementById("training-title-editor");
const trainingLessonHelper = document.getElementById("training-lesson-helper");
const trainingHelperAvatar = document.getElementById("training-helper-avatar");
const trainingHelperTitle = document.getElementById("training-helper-title");
const trainingHelperToggleButton = document.getElementById("training-helper-toggle-btn");
const trainingHelperDrawer = document.getElementById("training-helper-drawer");
const trainingHelperResponse = document.getElementById("training-helper-response");
const trainingHelperInput = document.getElementById("training-helper-input");
const trainingHelperSendButton = document.getElementById("training-helper-send-btn");
const trainingHelperKeyButton = document.getElementById("training-helper-key-btn");
const trainingHelperClearKeyButton = document.getElementById("training-helper-clear-key-btn");
const trainingDetailBackButton = document.getElementById("training-detail-back-btn");
const trainingEditButton = document.getElementById("training-edit-btn");
const trainingSaveButton = document.getElementById("training-save-btn");
const trainingLessonEditor = document.getElementById("training-lesson-editor");
const trainingEditorTools = document.getElementById("training-editor-tools");
const trainingTextColor = document.getElementById("training-text-color");
const trainingHighlightColor = document.getElementById("training-highlight-color");
const trainingFormatBlock = document.getElementById("training-format-block");
const trainingFontFamily = document.getElementById("training-font-family");
const trainingFontSize = document.getElementById("training-font-size");
const trainingLineHeight = document.getElementById("training-line-height");
const trainingListStyle = document.getElementById("training-list-style");
const trainingTextAlign = document.getElementById("training-text-align");
const trainingClearEditorButton = document.getElementById("training-clear-editor-btn");
const trainingInsertImageButton = document.getElementById("training-insert-image-btn");
const trainingImageUpload = document.getElementById("training-image-upload");
const trainingInsertCodeButton = document.getElementById("training-insert-code-btn");
const trainingAdminActions = document.getElementById("training-admin-actions");
const trainingAddUnitButton = document.getElementById("training-add-unit-btn");
const trainingAddLessonButton = document.getElementById("training-add-lesson-btn");

let currentLanguage = "en";
let isDraggingConsoleDivider = false;
let previousHtmlValue = builderDefaultHtml;
let previousCssValue = builderDefaultCss;
let savedEditorRange = null;
let shouldCapitalizeNextEditorInput = false;

const helperSettings = {
  apiKeyStorageKey: "javascript-playground-helper-api-key",
  endpoint: "https://api.openai.com/v1/responses",
  model: "gpt-4.1-mini",
};

const trainingState = {
  name: "",
  avatarId: "",
  selectedLessonId: null,
  completedLessons: new Set(),
  isEditingLesson: false,
  hasStarted: false,
  draggedUnitId: null,
  draggedLessonId: null,
};

viewButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});

themeToggle.addEventListener("click", () => {
  toggleDropdown(themeToggle);
});

languageToggle.addEventListener("click", () => {
  toggleDropdown(languageToggle);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    closeDropdown(themeToggle);
    closeDropdown(languageToggle);
  }
});

themeItems.forEach((button) => {
  button.addEventListener("click", () => {
    themeItems.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.body.dataset.theme = button.dataset.themeValue;
    closeDropdown(themeToggle);
  });
});

languageItems.forEach((button) => {
  button.addEventListener("click", () => {
    languageItems.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyLanguage(button.dataset.languageValue || "en");
    closeDropdown(languageToggle);
  });
});

consoleRunButton.addEventListener("click", runConsoleCode);
consoleClearButton.addEventListener("click", () => {
  consoleInput.value = "";
  updateCodeEditor(consoleInput, consoleHighlight, consoleLineNumbers, highlightJavaScript);
  consoleInput.focus();
});
consoleResetButton.addEventListener("click", () => {
  consoleInput.value = consoleDefaultCode;
  updateCodeEditor(consoleInput, consoleHighlight, consoleLineNumbers, highlightJavaScript);
  runConsoleCode();
});

builderRunButton.addEventListener("click", renderPreview);

htmlInput.addEventListener("focus", () => {
  previousHtmlValue = htmlInput.value;
});

cssInput.addEventListener("focus", () => {
  previousCssValue = cssInput.value;
});

htmlResetButton.addEventListener("click", () => {
  previousHtmlValue = htmlInput.value;
  htmlInput.value = "";
  updateCodeEditor(htmlInput, htmlHighlight, htmlLineNumbers, highlightHtml);
});

htmlUndoButton.addEventListener("click", () => {
  const currentValue = htmlInput.value;
  htmlInput.value = previousHtmlValue;
  previousHtmlValue = currentValue;
  updateCodeEditor(htmlInput, htmlHighlight, htmlLineNumbers, highlightHtml);
});

cssResetButton.addEventListener("click", () => {
  previousCssValue = cssInput.value;
  cssInput.value = "";
  updateCodeEditor(cssInput, cssHighlight, cssLineNumbers, highlightCss);
});

cssUndoButton.addEventListener("click", () => {
  const currentValue = cssInput.value;
  cssInput.value = previousCssValue;
  previousCssValue = currentValue;
  updateCodeEditor(cssInput, cssHighlight, cssLineNumbers, highlightCss);
});

consoleDivider.addEventListener("pointerdown", (event) => {
  if (window.innerWidth <= 1080) {
    return;
  }

  isDraggingConsoleDivider = true;
  consoleDivider.classList.add("is-dragging");
  consoleDivider.setPointerCapture(event.pointerId);
});

consoleDivider.addEventListener("pointermove", (event) => {
  if (!isDraggingConsoleDivider || window.innerWidth <= 1080) {
    return;
  }

  const bounds = consoleWorkspace.getBoundingClientRect();
  const leftWidth = Math.min(Math.max(event.clientX - bounds.left, 320), bounds.width - 320);
  consoleWorkspace.style.gridTemplateColumns = `${leftWidth}px 2px minmax(320px, 1fr)`;
});

function stopDraggingDivider(event) {
  isDraggingConsoleDivider = false;
  consoleDivider.classList.remove("is-dragging");

  if (consoleDivider.hasPointerCapture(event.pointerId)) {
    consoleDivider.releasePointerCapture(event.pointerId);
  }
}

consoleDivider.addEventListener("pointerup", stopDraggingDivider);
consoleDivider.addEventListener("pointercancel", stopDraggingDivider);

trainingStartButton.addEventListener("click", startTraining);
trainingNameInput.addEventListener("input", () => {
  trainingNameNote.textContent = "";
});
trainingAvatarOpenButton.addEventListener("click", openAvatarModal);
avatarModalClose.addEventListener("click", closeAvatarModal);
avatarModalCloseButton.addEventListener("click", closeAvatarModal);
trainingAvatarGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".avatar-btn");
  if (!button) {
    return;
  }

  trainingState.avatarId = button.dataset.avatarId || "cat";
  updateSelectedAvatar();
  renderAvatarModal();
  closeAvatarModal();
});

trainingTopicOpenButton.addEventListener("click", () => {
  completeAndGoNext();
});
trainingTopicPrevButton.addEventListener("click", goPreviousLesson);
trainingHelperToggleButton.addEventListener("click", () => {
  trainingHelperDrawer.classList.toggle("is-hidden");
});
trainingHelperSendButton.addEventListener("click", async () => {
  await askTrainingHelper();
});
trainingHelperKeyButton.addEventListener("click", async () => {
  const key = window.prompt(
    "Enter or replace your OpenAI API key for the helper. It will be stored only in this browser.",
    window.localStorage.getItem(helperSettings.apiKeyStorageKey) || "",
  );

  if (!key || !key.trim()) {
    return;
  }

  window.localStorage.setItem(helperSettings.apiKeyStorageKey, key.trim());
  trainingHelperResponse.textContent = "Helper key saved.";
  trainingHelperResponse.classList.remove("is-hidden");
});
trainingHelperClearKeyButton.addEventListener("click", () => {
  window.localStorage.removeItem(helperSettings.apiKeyStorageKey);
  trainingHelperResponse.textContent = "Helper key removed.";
  trainingHelperResponse.classList.remove("is-hidden");
});
trainingDetailBackButton.addEventListener("click", () => {
  trainingState.selectedLessonId = null;
  trainingState.isEditingLesson = false;
  renderTraining();
});
trainingEditButton.addEventListener("click", () => {
  trainingState.isEditingLesson = true;
  renderLessonView();
});
trainingSaveButton.addEventListener("click", saveEditedLesson);
trainingLessonEditor.addEventListener("keydown", handleEditorTabKey);
trainingLessonEditor.addEventListener("mouseup", handleEditorSelectionUpdate);
trainingLessonEditor.addEventListener("keyup", handleEditorSelectionUpdate);
trainingLessonEditor.addEventListener("focus", handleEditorSelectionUpdate);
trainingLessonEditor.addEventListener("click", handleEditorClick);
trainingLessonEditor.addEventListener("input", handleEditorInput);
document.addEventListener("selectionchange", () => {
  if (trainingState.isEditingLesson) {
    handleEditorSelectionUpdate();
  }
});
trainingEditorTools.addEventListener("click", handleEditorToolbarClick);
trainingEditorTools.addEventListener("mousedown", (event) => {
  if (event.target.closest(".editor-tool-btn, .editor-select, .editor-color-control")) {
    saveEditorSelection();
  }
  if (event.target.closest(".editor-tool-btn") && !event.target.closest(".editor-color-control")) {
    event.preventDefault();
  }
});
trainingEditorTools.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".editor-tool-btn, .editor-select, .editor-color-control")) {
    saveEditorSelection();
  }
});
trainingTextColor.addEventListener("input", () => {
  applyEditorColor("foreColor", trainingTextColor.value);
});
trainingHighlightColor.addEventListener("input", () => {
  applyEditorColor("hiliteColor", trainingHighlightColor.value);
});
trainingFormatBlock.addEventListener("change", () => {
  applyBlockFormat(trainingFormatBlock.value);
});
trainingFontFamily.addEventListener("change", () => {
  applyEditorFont(trainingFontFamily.value);
});
trainingFontSize.addEventListener("change", () => {
  applyFontSize(trainingFontSize.value);
});
trainingLineHeight.addEventListener("change", () => {
  applyLineHeight(trainingLineHeight.value);
});
trainingListStyle.addEventListener("change", () => {
  if (trainingListStyle.value) {
    applyListStyle(trainingListStyle.value);
    trainingListStyle.value = "";
  }
});
trainingTextAlign.addEventListener("change", () => {
  if (trainingTextAlign.value) {
    applyEditorCommand(trainingTextAlign.value);
    trainingTextAlign.value = "";
  }
});
trainingClearEditorButton.addEventListener("click", () => {
  trainingLessonEditor.innerHTML = "<p><br></p>";
  placeCaretInsideElement(trainingLessonEditor.firstElementChild || trainingLessonEditor);
});
trainingInsertImageButton.addEventListener("click", () => {
  trainingImageUpload.click();
});
trainingImageUpload.addEventListener("change", insertUploadedImage);
trainingInsertCodeButton.addEventListener("click", insertCodeBlock);
trainingAddUnitButton.addEventListener("click", addTrainingUnit);
trainingAddLessonButton.addEventListener("click", addTrainingLesson);

attachEditor(consoleInput, consoleHighlight, consoleLineNumbers, highlightJavaScript);
attachEditor(htmlInput, htmlHighlight, htmlLineNumbers, highlightHtml);
attachEditor(cssInput, cssHighlight, cssLineNumbers, highlightCss);

function showView(targetId) {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.id === targetId);
  });

  menuButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === targetId);
  });
}

function toggleDropdown(toggle) {
  const dropdown = toggle.closest(".dropdown");
  const isOpen = dropdown.classList.contains("is-open");

  closeDropdown(themeToggle);
  closeDropdown(languageToggle);

  if (!isOpen) {
    dropdown.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }
}

function closeDropdown(toggle) {
  const dropdown = toggle.closest(".dropdown");
  dropdown.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

function getText(key, replacements = {}) {
  const directDictionary = translations[currentLanguage] || translations.en;
  const fallbackDictionary = translations[languageFallbacks[currentLanguage]] || translations.en;
  let value = directDictionary[key] || fallbackDictionary[key] || translations.en[key] || key;

  Object.entries(replacements).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, replacement);
  });

  return value;
}

function applyLanguage(languageCode) {
  currentLanguage = languageCode;
  document.documentElement.lang = languageCode;

  i18nNodes.forEach((node) => {
    node.textContent = getText(node.dataset.i18n);
  });

  i18nPlaceholderNodes.forEach((node) => {
    node.setAttribute("placeholder", getText(node.dataset.i18nPlaceholder));
  });

  i18nAriaNodes.forEach((node) => {
    node.setAttribute("aria-label", getText(node.dataset.i18nAriaLabel));
  });

  renderTopbarProfile();
  renderTraining();
}

function attachEditor(textarea, highlightLayer, lineNumbers, highlighter) {
  textarea.addEventListener("input", () => {
    updateCodeEditor(textarea, highlightLayer, lineNumbers, highlighter);
  });

  textarea.addEventListener("scroll", () => {
    highlightLayer.scrollTop = textarea.scrollTop;
    highlightLayer.scrollLeft = textarea.scrollLeft;
    lineNumbers.scrollTop = textarea.scrollTop;
  });
}

function updateCodeEditor(textarea, highlightLayer, lineNumbers, highlighter) {
  highlightLayer.innerHTML = highlighter(textarea.value);
  updateLineNumbers(textarea, lineNumbers);
}

function updateLineNumbers(textarea, lineNumbers) {
  const total = Math.max(textarea.value.split("\n").length, 1);
  lineNumbers.innerHTML = "";

  for (let index = 1; index <= total; index += 1) {
    const line = document.createElement("span");
    line.textContent = `${index}`;
    lineNumbers.appendChild(line);
  }
}

function runConsoleCode() {
  const source = consoleInput.value.trim();

  if (!source) {
    consoleOutput.innerHTML = "";
    return;
  }

  const execution = executeCode(source);
  renderConsoleOutput(execution.ok ? execution.logs.length ? execution.logs : ["Done"] : [execution.error.message]);
}

function executeCode(source) {
  try {
    const logs = [];
    const captureConsole = {
      log: (...args) => {
        logs.push(args.map(String).join(" "));
      },
    };

    const runner = new Function("console", `"use strict";\n${source}`);
    runner(captureConsole);
    return { ok: true, logs };
  } catch (error) {
    return { ok: false, error };
  }
}

function runTaskWithReturn(source, returnStatement) {
  try {
    const logs = [];
    const captureConsole = {
      log: (...args) => {
        logs.push(args.map(String).join(" "));
      },
    };

    const runner = new Function("console", `"use strict";\n${source}\n${returnStatement}`);
    const value = runner(captureConsole);
    return { ok: true, value, logs };
  } catch (error) {
    return { ok: false, error };
  }
}

function renderConsoleOutput(lines) {
  consoleOutput.innerHTML = lines
    .map(
      (line) =>
        `<span class="terminal-line"><span class="terminal-prompt">&gt;</span> <span class="terminal-text">${escapeHtml(
          line,
        )}</span></span>`,
    )
    .join("");
}

function renderPreview() {
  const documentContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${cssInput.value}</style>
  </head>
  <body>
    ${htmlInput.value}
  </body>
</html>`;

  previewFrame.srcdoc = documentContent;
}

function startTraining() {
  const name = trainingNameInput.value.trim();

  if (!name) {
    trainingNameNote.textContent = getText("training_name_error");
    showView("training-view");
    trainingNameInput.focus();
    return;
  }

  trainingNameNote.textContent = "";
  trainingState.name = name;
  trainingState.hasStarted = true;
  trainingEntry.classList.add("is-hidden");
  trainingCampus.classList.remove("is-hidden");
  renderTopbarProfile();
  renderTraining();
}

function renderTraining() {
  renderAvatarModal();
  renderTopbarProfile();
  trainingAdminActions.classList.toggle("is-hidden", !IS_DEVELOPER);
  trainingWelcomeTitle.textContent = trainingState.name
    ? getText("training_welcome", { name: trainingState.name })
    : getText("training_topic_preview_title");

  renderTrainingTopics();

  if (trainingState.selectedLessonId) {
    trainingMenuPage.classList.add("is-hidden");
    trainingDetailPage.classList.remove("is-hidden");
    renderLessonView();
  } else {
    trainingMenuPage.classList.remove("is-hidden");
    trainingDetailPage.classList.add("is-hidden");
  }
}

function renderTrainingTopics() {
  const lessons = getLessonItems();
  const items = getCourseItems();

  trainingTopics.innerHTML = items
    .map((item) => {
      if (item.kind === "divider") {
        return `<div class="training-menu-row training-menu-row-divider ${IS_DEVELOPER ? "training-unit-draggable" : ""}" ${
          IS_DEVELOPER ? `draggable="true" data-unit-block="${item.id}"` : ""
        }>
          <div class="training-lesson-divider">${escapeHtml(getDisplayTitle(item))}</div>
          ${
            IS_DEVELOPER
              ? `<div class="training-row-actions">
                  <button class="training-row-btn training-drag-btn" type="button" data-unit-drag-handle="${item.id}" aria-label="Drag unit">⋮⋮</button>
                  <button class="training-row-btn" type="button" data-add-after-unit="${item.id}" aria-label="Add lesson">+</button>
                  <button class="training-row-btn" type="button" data-edit-unit="${item.id}">Edit</button>
                  <button class="training-row-btn training-row-btn-danger" type="button" data-delete-unit="${item.id}">Delete</button>
                </div>`
              : ""
          }
        </div>`;
      }

      const lessonIndex = lessons.findIndex((lesson) => lesson.id === item.id);
      const active = trainingState.selectedLessonId === item.id;
      const unlocked = isLessonUnlocked(lessonIndex);

      return `<div class="training-menu-row ${IS_DEVELOPER ? "training-lesson-draggable" : ""}" ${
        IS_DEVELOPER ? `draggable="true" data-lesson-block="${item.id}"` : ""
      }>
        <button class="training-lesson-item ${active ? "is-active" : ""} ${!unlocked ? "is-locked" : ""}" data-lesson-open="${item.id}" ${
          unlocked ? "" : "disabled"
        }>
          <span class="training-lesson-copy">
            <strong>${escapeHtml(getDisplayTitle(item))}</strong>
            <small>${escapeHtml(unlocked ? getText("training_open") : getText("training_locked"))}</small>
          </span>
        </button>
        ${
          IS_DEVELOPER
            ? `<div class="training-row-actions">
                <button class="training-row-btn training-drag-btn" type="button" data-lesson-drag-handle="${item.id}" aria-label="Drag lesson">⋮⋮</button>
                <button class="training-row-btn" type="button" data-add-after-lesson="${item.id}" aria-label="Add lesson">+</button>
                <button class="training-row-btn" type="button" data-edit-lesson="${item.id}">Edit</button>
                <button class="training-row-btn training-row-btn-danger" type="button" data-delete-lesson="${item.id}">Delete</button>
              </div>`
            : ""
        }
      </div>`;
    })
    .join("");

  trainingTopics.querySelectorAll("[data-lesson-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const lesson = lessons.find((item) => item.id === button.dataset.lessonOpen);
      if (!lesson) {
        return;
      }

      trainingState.selectedLessonId = lesson.id;
      trainingState.isEditingLesson = false;
      renderTraining();
    });
  });

  trainingTopics.querySelectorAll("[data-edit-unit]").forEach((button) => {
    button.addEventListener("click", () => editCourseItem(button.dataset.editUnit, "divider"));
  });

  trainingTopics.querySelectorAll("[data-delete-unit]").forEach((button) => {
    button.addEventListener("click", () => deleteCourseItem(button.dataset.deleteUnit, "divider"));
  });

  trainingTopics.querySelectorAll("[data-add-after-unit]").forEach((button) => {
    button.addEventListener("click", () => addLessonNear(button.dataset.addAfterUnit, "divider"));
  });

  trainingTopics.querySelectorAll("[data-edit-lesson]").forEach((button) => {
    button.addEventListener("click", () => editCourseItem(button.dataset.editLesson, "lesson"));
  });

  trainingTopics.querySelectorAll("[data-delete-lesson]").forEach((button) => {
    button.addEventListener("click", () => deleteCourseItem(button.dataset.deleteLesson, "lesson"));
  });

  trainingTopics.querySelectorAll("[data-add-after-lesson]").forEach((button) => {
    button.addEventListener("click", () => addLessonNear(button.dataset.addAfterLesson, "lesson"));
  });

  if (IS_DEVELOPER) {
    trainingTopics.querySelectorAll("[data-unit-block]").forEach((row) => {
      row.addEventListener("dragstart", handleUnitDragStart);
      row.addEventListener("dragover", handleUnitDragOver);
      row.addEventListener("drop", handleUnitDrop);
      row.addEventListener("dragend", clearDraggedUnitState);
      row.addEventListener("dragleave", handleUnitDragLeave);
    });

    trainingTopics.querySelectorAll("[data-lesson-block]").forEach((row) => {
      row.addEventListener("dragstart", handleLessonDragStart);
      row.addEventListener("dragover", handleLessonDragOver);
      row.addEventListener("drop", handleLessonDrop);
      row.addEventListener("dragend", clearDraggedLessonState);
      row.addEventListener("dragleave", handleLessonDragLeave);
    });
  }
}

function renderLessonView() {
  const lesson = getSelectedLesson();
  const index = getSelectedLessonIndex();
  const hasPrevious = index > 0;
  const hasNext = index < getLessonItems().length - 1;
  const avatar = getAvatarDisplay();

  trainingLessonMeta.textContent = getDisplaySection(lesson);
  trainingTopicPreviewTitle.textContent = getDisplayTitle(lesson);
  trainingTopicPreviewText.innerHTML = getLessonHtml(lesson);
  decorateLessonCodeBlocks(trainingTopicPreviewText);
  trainingHelperAvatar.textContent = avatar.badge;
  trainingHelperAvatar.className = `training-helper-avatar ${avatar.className}`;
  trainingHelperTitle.textContent = getText("training_helper_title");
  trainingHelperDrawer.classList.add("is-hidden");
  trainingHelperInput.value = "";
  trainingHelperResponse.textContent = "";
  trainingHelperResponse.classList.add("is-hidden");
  trainingLessonMeta.classList.toggle("is-hidden", trainingState.isEditingLesson);
  trainingMetaEditor.classList.toggle("is-hidden", !trainingState.isEditingLesson);
  trainingTopicPreviewTitle.classList.toggle("is-hidden", trainingState.isEditingLesson);
  trainingTitleEditor.classList.toggle("is-hidden", !trainingState.isEditingLesson);
  trainingTopicPreviewText.classList.toggle("is-hidden", trainingState.isEditingLesson);
  trainingLessonEditor.classList.toggle("is-hidden", !trainingState.isEditingLesson);
  trainingEditorTools.classList.toggle("is-hidden", !trainingState.isEditingLesson);
  trainingEditButton.classList.toggle("is-hidden", trainingState.isEditingLesson || !IS_DEVELOPER);
  trainingSaveButton.classList.toggle("is-hidden", !trainingState.isEditingLesson || !IS_DEVELOPER);
  trainingMetaEditor.value = getDisplaySection(lesson);
  trainingTitleEditor.value = getDisplayTitle(lesson);
  trainingLessonEditor.innerHTML = getLessonHtml(lesson);

  trainingTopicPrevButton.disabled = false;
  trainingTopicOpenButton.textContent = getText(hasNext ? "training_next" : "training_open");
}

function completeAndGoNext() {
  const currentIndex = getSelectedLessonIndex();
  trainingState.completedLessons.add(trainingState.selectedLessonId);

  const lessons = getLessonItems();
  if (currentIndex < lessons.length - 1) {
    trainingState.selectedLessonId = lessons[currentIndex + 1].id;
  }

  renderTraining();
}

function goPreviousLesson() {
  const currentIndex = getSelectedLessonIndex();
  if (currentIndex === 0) {
    trainingState.selectedLessonId = null;
    renderTraining();
    return;
  }

  trainingState.selectedLessonId = getLessonItems()[currentIndex - 1].id;
  renderTraining();
}

function isLessonUnlocked(index) {
  if (IS_DEVELOPER) {
    return true;
  }

  if (index === 0) {
    return true;
  }

  return trainingState.completedLessons.has(getLessonItems()[index - 1].id);
}

function getSelectedLesson() {
  return getLessonItems().find((lesson) => lesson.id === trainingState.selectedLessonId) || getLessonItems()[0];
}

function getSelectedLessonIndex() {
  return getLessonItems().findIndex((lesson) => lesson.id === trainingState.selectedLessonId);
}

function getCourseItems() {
  return courseContent[currentLanguage] || courseContent[languageFallbacks[currentLanguage]] || courseContent.en;
}

function getLessonItems() {
  return getCourseItems().filter((item) => item.kind === "lesson");
}

function saveEditedLesson() {
  const lesson = getSelectedLesson();
  const updatedHtml = trainingLessonEditor.innerHTML.trim();

  lesson.section = trainingMetaEditor.value.trim();
  lesson.title = trainingTitleEditor.value.trim() || lesson.title;
  lesson.customSection = true;
  lesson.customTitle = true;
  lesson.html = updatedHtml;
  lesson.content = [];
  persistCourseContent();
  trainingState.isEditingLesson = false;
  renderTraining();
}

function getDisplayTitle(item) {
  const localized = defaultCourseLabels[currentLanguage]?.[item.id]?.title;
  if (!item.customTitle && localized) {
    return localized;
  }

  return item.title;
}

function getDisplaySection(item) {
  const localized = defaultCourseLabels[currentLanguage]?.[item.id]?.section;
  if (!item.customSection && localized) {
    return localized;
  }

  return item.section || "";
}

function editCourseItem(itemId, kind) {
  if (!IS_DEVELOPER) {
    return;
  }

  const item = getCourseItems().find((entry) => entry.id === itemId && entry.kind === kind);
  if (!item) {
    return;
  }

  const nextTitle = window.prompt(kind === "divider" ? "Unit name" : "Lesson name", getDisplayTitle(item));
  if (!nextTitle || !nextTitle.trim()) {
    return;
  }

  item.title = nextTitle.trim();
  item.customTitle = true;

  if (kind === "lesson") {
    const nextSection = window.prompt("Section", getDisplaySection(item));
    if (nextSection !== null) {
      item.section = nextSection.trim();
      item.customSection = true;
    }
  }

  persistCourseContent();
  renderTraining();
}

function deleteCourseItem(itemId, kind) {
  if (!IS_DEVELOPER) {
    return;
  }

  const items = getCourseItems();
  const index = items.findIndex((entry) => entry.id === itemId && entry.kind === kind);
  if (index === -1) {
    return;
  }

  if (kind === "divider") {
    let deleteCount = 1;
    for (let pointer = index + 1; pointer < items.length; pointer += 1) {
      if (items[pointer].kind === "divider") {
        break;
      }
      deleteCount += 1;
    }
    items.splice(index, deleteCount);
  } else {
    items.splice(index, 1);
  }

  if (trainingState.selectedLessonId === itemId) {
    trainingState.selectedLessonId = null;
  }

  persistCourseContent();
  renderTraining();
}

function handleUnitDragStart(event) {
  const unitId = event.currentTarget.dataset.unitBlock;
  if (!unitId) {
    return;
  }

  trainingState.draggedUnitId = unitId;
  event.currentTarget.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", unitId);
  }
}

function handleUnitDragOver(event) {
  if (!trainingState.draggedUnitId && !trainingState.draggedLessonId) {
    return;
  }

  event.preventDefault();
  const row = event.currentTarget;
  if (row.dataset.unitBlock !== trainingState.draggedUnitId) {
    row.classList.add("is-drop-target");
  }
}

function handleUnitDragLeave(event) {
  event.currentTarget.classList.remove("is-drop-target");
}

function handleUnitDrop(event) {
  event.preventDefault();
  const targetUnitId = event.currentTarget.dataset.unitBlock;
  const sourceUnitId = trainingState.draggedUnitId;
  const sourceLessonId = trainingState.draggedLessonId;

  if (sourceLessonId) {
    clearDraggedLessonState();
    event.currentTarget.classList.remove("is-drop-target");
    if (!targetUnitId) {
      return;
    }
    moveLessonToUnit(sourceLessonId, targetUnitId);
    return;
  }

  clearDraggedUnitState();

  if (!sourceUnitId || !targetUnitId || sourceUnitId === targetUnitId) {
    return;
  }

  moveUnitBlock(sourceUnitId, targetUnitId);
}

function clearDraggedUnitState() {
  trainingTopics.querySelectorAll(".training-unit-draggable").forEach((row) => {
    row.classList.remove("is-dragging", "is-drop-target");
  });
  trainingState.draggedUnitId = null;
}

function handleLessonDragStart(event) {
  const lessonId = event.currentTarget.dataset.lessonBlock;
  if (!lessonId) {
    return;
  }

  trainingState.draggedLessonId = lessonId;
  event.currentTarget.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", lessonId);
  }
}

function handleLessonDragOver(event) {
  if (!trainingState.draggedLessonId) {
    return;
  }

  event.preventDefault();
  const row = event.currentTarget;
  if (row.dataset.lessonBlock !== trainingState.draggedLessonId) {
    row.classList.add("is-drop-target");
  }
}

function handleLessonDragLeave(event) {
  event.currentTarget.classList.remove("is-drop-target");
}

function handleLessonDrop(event) {
  event.preventDefault();
  const targetLessonId = event.currentTarget.dataset.lessonBlock;
  const sourceLessonId = trainingState.draggedLessonId;
  const dropAfter = isDropAfter(event.currentTarget, event.clientY);

  clearDraggedLessonState();

  if (!sourceLessonId || !targetLessonId || sourceLessonId === targetLessonId) {
    return;
  }

  moveLessonItem(sourceLessonId, targetLessonId, dropAfter ? "after" : "before");
}

function clearDraggedLessonState() {
  trainingTopics.querySelectorAll(".training-lesson-draggable").forEach((row) => {
    row.classList.remove("is-dragging", "is-drop-target");
  });
  trainingState.draggedLessonId = null;
}

function moveUnitBlock(sourceUnitId, targetUnitId) {
  const items = getCourseItems();
  const sourceRange = getUnitBlockRange(items, sourceUnitId);
  const targetRange = getUnitBlockRange(items, targetUnitId);

  if (!sourceRange || !targetRange) {
    return;
  }

  const sourceBlock = items.splice(sourceRange.start, sourceRange.end - sourceRange.start + 1);
  let insertIndex = targetRange.start;

  if (sourceRange.start < targetRange.start) {
    insertIndex -= sourceBlock.length;
  }

  items.splice(insertIndex, 0, ...sourceBlock);
  persistCourseContent();
  renderTraining();
}

function moveLessonItem(sourceLessonId, targetLessonId, position = "before") {
  const items = getCourseItems();
  const sourceIndex = items.findIndex((item) => item.id === sourceLessonId && item.kind === "lesson");
  const targetIndex = items.findIndex((item) => item.id === targetLessonId && item.kind === "lesson");

  if (sourceIndex === -1 || targetIndex === -1) {
    return;
  }

  const [lesson] = items.splice(sourceIndex, 1);
  let insertIndex = targetIndex + (position === "after" ? 1 : 0);
  if (sourceIndex < targetIndex) {
    insertIndex -= 1;
  }

  items.splice(insertIndex, 0, lesson);

  const resolvedSection = getSectionForLessonIndex(items, insertIndex);
  if (!lesson.customSection) {
    lesson.section = resolvedSection;
  } else if (!lesson.section) {
    lesson.section = resolvedSection;
  }

  persistCourseContent();
  renderTraining();
}

function moveLessonToUnit(sourceLessonId, targetUnitId) {
  const items = getCourseItems();
  const sourceIndex = items.findIndex((item) => item.id === sourceLessonId && item.kind === "lesson");
  const targetRange = getUnitBlockRange(items, targetUnitId);

  if (sourceIndex === -1 || !targetRange) {
    return;
  }

  const [lesson] = items.splice(sourceIndex, 1);
  let insertIndex = targetRange.start + 1;
  if (sourceIndex < insertIndex) {
    insertIndex -= 1;
  }

  items.splice(insertIndex, 0, lesson);

  const divider = items.find((item) => item.id === targetUnitId && item.kind === "divider");
  if (divider) {
    lesson.section = divider.title;
    if (!lesson.customSection) {
      lesson.section = divider.title;
    }
  }

  persistCourseContent();
  renderTraining();
}

function isDropAfter(element, clientY) {
  const bounds = element.getBoundingClientRect();
  return clientY > bounds.top + bounds.height / 2;
}

function getUnitBlockRange(items, dividerId) {
  const start = items.findIndex((item) => item.id === dividerId && item.kind === "divider");
  if (start === -1) {
    return null;
  }

  let end = items.length - 1;
  for (let index = start + 1; index < items.length; index += 1) {
    if (items[index].kind === "divider") {
      end = index - 1;
      break;
    }
  }

  return { start, end };
}

function getSectionForLessonIndex(items, lessonIndex) {
  for (let index = lessonIndex; index >= 0; index -= 1) {
    if (items[index].kind === "divider") {
      return items[index].title;
    }
  }

  return "";
}

function persistCourseContent() {
  try {
    window.localStorage.setItem("javascript-playground-course-content", JSON.stringify(courseContent));
  } catch (error) {
    console.warn("Could not save course content", error);
  }
}

function hydrateCourseContent() {
  try {
    const saved = window.localStorage.getItem("javascript-playground-course-content");
    if (!saved) {
      return;
    }

    const parsed = JSON.parse(saved);
    if (parsed && typeof parsed === "object") {
      Object.keys(parsed).forEach((language) => {
        if (Array.isArray(parsed[language])) {
          courseContent[language] = parsed[language];
        }
      });
    }
  } catch (error) {
    console.warn("Could not load saved course content", error);
  }

  ensureCourseLanguages();
}

function ensureCourseLanguages() {
  Object.keys(defaultCourseLabels).forEach((language) => {
    if (!Array.isArray(courseContent[language])) {
      courseContent[language] = cloneLessonsForLanguage("en", {});
    }
  });
}

function handleEditorTabKey(event) {
  if (event.key === "Enter" && !event.shiftKey && isCaretInsideCodeBlock()) {
    event.preventDefault();
    exitCodeBlock();
    return;
  }

  if (event.key === "Enter" && !event.shiftKey) {
    shouldCapitalizeNextEditorInput = true;
  }

  if (event.key !== "Tab") {
    return;
  }

  event.preventDefault();
  document.execCommand("insertHTML", false, "&nbsp;&nbsp;&nbsp;&nbsp;");
}

function isCaretInsideCodeBlock() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) {
    return false;
  }

  return Boolean(getActiveCodeBlock(selection.anchorNode));
}

function getActiveCodeBlock(node) {
  let current = node instanceof Node ? node : null;

  while (current && current !== trainingLessonEditor) {
    if (current.nodeType === Node.ELEMENT_NODE && current.classList?.contains("lesson-code-block")) {
      return current;
    }
    current = current.parentNode;
  }

  return null;
}

function exitCodeBlock() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return;
  }

  const codeBlock = getActiveCodeBlock(selection.anchorNode);
  if (!codeBlock) {
    return;
  }

  const paragraph = createEditorParagraph();
  codeBlock.insertAdjacentElement("afterend", paragraph);

  const range = document.createRange();
  range.setStart(paragraph, 0);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  saveEditorSelection();
}

function createEditorParagraph() {
  const paragraph = document.createElement("p");
  paragraph.className = "editor-text-paragraph";
  paragraph.innerHTML = "<br>";
  return paragraph;
}

function handleEditorClick(event) {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
    handleEditorSelectionUpdate();
    return;
  }

  const codeBlock = getActiveCodeBlock(event.target);

  if (codeBlock) {
    ensureParagraphAfterCodeBlock(codeBlock);
    return;
  }

  if (event.target === trainingLessonEditor) {
    const paragraph = ensureEditableParagraph();
    placeCaretInsideElement(paragraph);
    handleEditorSelectionUpdate();
  }
}

function handleEditorInput() {
  autoCapitalizeEditorText();
  handleEditorSelectionUpdate();
}

function autoCapitalizeEditorText() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) {
    return;
  }

  const textNode = selection.anchorNode;
  if (!(textNode instanceof Text) || !trainingLessonEditor.contains(textNode)) {
    return;
  }

  if (getActiveCodeBlock(textNode)) {
    return;
  }

  const offset = selection.anchorOffset;
  const beforeCaret = textNode.textContent.slice(0, offset);
  const afterCaret = textNode.textContent.slice(offset);
  const normalizedBefore = normalizeEditorTypedText(
    beforeCaret,
    shouldCapitalizeNextEditorInput || isAtStartOfEditorBlock(textNode, offset),
  );

  if (normalizedBefore === beforeCaret) {
    shouldCapitalizeNextEditorInput = false;
    return;
  }

  textNode.textContent = normalizedBefore + afterCaret;

  const range = document.createRange();
  range.setStart(textNode, normalizedBefore.length);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  savedEditorRange = range.cloneRange();
  shouldCapitalizeNextEditorInput = false;
}

function normalizeEditorTypedText(text, capitalizeAtStart = false) {
  let normalized = text
    .replace(/(^|[\s([{'"“‘-])i(?=\s+am\b)/g, (match, prefix) => `${prefix}I`)
    .replace(/([.!?]\s+)([a-z])/g, (_, prefix, letter) => `${prefix}${letter.toUpperCase()}`);

  if (capitalizeAtStart) {
    normalized = normalized.replace(/^(\s*)([a-z])/, (_, spaces, letter) => `${spaces}${letter.toUpperCase()}`);
  }

  return normalized;
}

function isAtStartOfEditorBlock(textNode, offset) {
  const parentElement = textNode.parentElement;
  if (!parentElement || !trainingLessonEditor.contains(parentElement)) {
    return false;
  }

  const block = findClosestMatchingNode(parentElement, (node) =>
    node instanceof HTMLElement && (
      node.tagName === "P" ||
      node.tagName === "DIV" ||
      node.tagName === "LI" ||
      node.tagName === "BLOCKQUOTE" ||
      node.tagName === "H2" ||
      node.tagName === "H3"
    ));

  if (!(block instanceof HTMLElement)) {
    return false;
  }

  const range = document.createRange();
  range.setStart(block, 0);
  range.setEnd(textNode, offset);
  const textBeforeCaret = range.toString();
  return textBeforeCaret.trim().length <= 1;
}

function ensureEditableParagraph() {
  const lastElement = trainingLessonEditor.lastElementChild;

  if (!lastElement || lastElement.classList?.contains("lesson-code-block")) {
    const paragraph = createEditorParagraph();
    trainingLessonEditor.appendChild(paragraph);
    return paragraph;
  }

  if (lastElement.tagName === "P") {
    return lastElement;
  }

  const paragraph = createEditorParagraph();
  lastElement.insertAdjacentElement("afterend", paragraph);
  return paragraph;
}

function ensureParagraphAfterCodeBlock(codeBlock) {
  const nextElement = codeBlock.nextElementSibling;
  if (nextElement?.tagName === "P") {
    return nextElement;
  }

  const paragraph = createEditorParagraph();
  codeBlock.insertAdjacentElement("afterend", paragraph);
  return paragraph;
}

function placeCaretInsideElement(element) {
  const selection = window.getSelection();
  if (!selection) {
    return;
  }

  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function saveEditorSelection() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return;
  }

  const range = selection.getRangeAt(0);
  const commonAncestor = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentNode
    : range.commonAncestorContainer;

  if (commonAncestor && trainingLessonEditor.contains(commonAncestor)) {
    savedEditorRange = range.cloneRange();
  }
}

function handleEditorSelectionUpdate() {
  saveEditorSelection();
  syncEditorToolbarState();
}

function syncEditorToolbarState() {
  const targetElement = getSelectionStyleElement();
  if (!targetElement) {
    return;
  }

  const styles = window.getComputedStyle(targetElement);
  const normalizedFontFamily = normalizeFontFamily(styles.fontFamily);
  const normalizedTextAlign = normalizeTextAlign(styles.textAlign);
  const normalizedLineHeight = normalizeLineHeight(styles.lineHeight, styles.fontSize);
  const normalizedFontSize = normalizeFontSize(styles.fontSize);
  const normalizedColor = rgbToHex(styles.color);
  const normalizedHighlight = rgbToHex(styles.backgroundColor);

  if (normalizedFontFamily) {
    setSelectToMatchingValue(trainingFontFamily, normalizedFontFamily, (optionValue) =>
      normalizeFontFamily(optionValue) === normalizedFontFamily);
  }

  if (normalizedFontSize) {
    setSelectToMatchingValue(trainingFontSize, normalizedFontSize, (optionValue) =>
      normalizeFontSize(optionValue) === normalizedFontSize);
  }

  if (normalizedLineHeight) {
    setSelectToMatchingValue(trainingLineHeight, normalizedLineHeight, (optionValue) =>
      optionValue === normalizedLineHeight);
  }

  if (normalizedTextAlign) {
    setSelectToMatchingValue(trainingTextAlign, normalizedTextAlign, (optionValue) =>
      optionValue === normalizedTextAlign);
  }

  if (normalizedColor) {
    trainingTextColor.value = normalizedColor;
  }

  if (normalizedHighlight) {
    trainingHighlightColor.value = normalizedHighlight;
  }
}

function getSelectionStyleElement() {
  const range = getEditorRange();
  if (!range) {
    return null;
  }

  let node = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentNode;
  }

  return node instanceof HTMLElement ? node : null;
}

function setSelectToMatchingValue(select, normalizedValue, matcher) {
  const options = Array.from(select.options);
  const match = options.find((option) => matcher(option.value));
  if (match) {
    select.value = match.value;
  }
}

function normalizeFontFamily(value) {
  return String(value || "")
    .replace(/["']/g, "")
    .split(",")
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean)[0] || "";
}

function normalizeFontSize(value) {
  const parsed = Number.parseFloat(String(value || ""));
  if (!Number.isFinite(parsed)) {
    return "";
  }
  return `${Math.round(parsed)}px`;
}

function normalizeLineHeight(lineHeight, fontSize) {
  const lineHeightValue = Number.parseFloat(String(lineHeight || ""));
  const fontSizeValue = Number.parseFloat(String(fontSize || ""));

  if (!Number.isFinite(lineHeightValue) || !Number.isFinite(fontSizeValue) || fontSizeValue === 0) {
    return "";
  }

  const ratio = (lineHeightValue / fontSizeValue).toFixed(1);
  return ratio;
}

function normalizeTextAlign(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "start") {
    return "left";
  }
  if (normalized === "end") {
    return "right";
  }
  return normalized;
}

function rgbToHex(value) {
  const text = String(value || "").trim().toLowerCase();
  if (!text || text === "transparent" || text === "rgba(0, 0, 0, 0)") {
    return "";
  }

  if (text.startsWith("#")) {
    return text;
  }

  const match = text.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) {
    return "";
  }

  const [, r, g, b] = match;
  return `#${[r, g, b].map((part) => Number(part).toString(16).padStart(2, "0")).join("")}`;
}

function restoreEditorSelection() {
  if (!savedEditorRange) {
    trainingLessonEditor.focus();
    return false;
  }

  const selection = window.getSelection();
  if (!selection) {
    return false;
  }

  trainingLessonEditor.focus();
  selection.removeAllRanges();
  selection.addRange(savedEditorRange);
  return true;
}

function generateHelperReply(question) {
  const text = question.trim();
  if (!text) {
    return getText("training_helper_reply");
  }

  const normalized = text.toLowerCase();

  if (/(weather|погода)/.test(normalized)) {
    return "I can talk about weather in general, but in this internal helper I do not fetch live forecasts. If you want, ask about seasons, climate, or how to describe weather in English or JavaScript examples.";
  }

  if (/(javascript|js|код|ошибка|error|function|let|const|variable)/.test(normalized)) {
    return "This sounds like a JavaScript question. I can help explain the idea step by step, point out likely mistakes, or help you think through the logic without using external links.";
  }

  if (/(course|lesson|topic|урок|тема|курс)/.test(normalized)) {
    return "For the course structure, we can shape this lesson into theory, then add questions, then unlock practice. Tell me what text or task you want to add, and I can help organize it.";
  }

  return "I can answer general questions here in a simple internal format without links. If you want, ask me to explain, summarize, rewrite, or help structure the lesson content.";
}

async function askTrainingHelper() {
  const question = trainingHelperInput.value.trim();
  if (!question) {
    trainingHelperResponse.textContent = getText("training_helper_reply");
    trainingHelperResponse.classList.remove("is-hidden");
    return;
  }

  trainingHelperSendButton.disabled = true;
  trainingHelperResponse.textContent = "Thinking...";
  trainingHelperResponse.classList.remove("is-hidden");

  try {
    const apiKey = await getHelperApiKey();
    if (!apiKey) {
      trainingHelperResponse.textContent = generateHelperReply(question);
      return;
    }

    const answer = await requestHelperAnswer(question, apiKey);
    trainingHelperResponse.textContent = answer || generateHelperReply(question);
  } catch (error) {
    trainingHelperResponse.textContent = generateHelperReply(question);
  } finally {
    trainingHelperSendButton.disabled = false;
  }
}

async function getHelperApiKey() {
  const saved = window.localStorage.getItem(helperSettings.apiKeyStorageKey);
  if (saved) {
    return saved;
  }

  const provided = window.prompt(
    "Enter your OpenAI API key for the AI helper. It will be stored only in this browser.",
  );

  if (!provided || !provided.trim()) {
    return "";
  }

  const normalized = provided.trim();
  window.localStorage.setItem(helperSettings.apiKeyStorageKey, normalized);
  return normalized;
}

async function requestHelperAnswer(question, apiKey) {
  const lesson = getSelectedLesson();
  const lessonTitle = lesson ? getDisplayTitle(lesson) : "Current lesson";
  const lessonContext = lesson ? stripHtml(getLessonHtml(lesson)).slice(0, 3000) : "";

  const response = await fetch(helperSettings.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: helperSettings.model,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are a friendly training helper inside a JavaScript learning platform. Answer naturally like an AI assistant. You may answer general questions, coding questions, and lesson questions. Do not include links. Keep answers clear and supportive.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Lesson: ${lessonTitle}\n\nLesson context:\n${lessonContext}\n\nQuestion:\n${question}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Helper request failed with ${response.status}`);
  }

  const data = await response.json();
  return extractResponseText(data);
}

function extractResponseText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const items = Array.isArray(data.output) ? data.output : [];
  for (const item of items) {
    const content = Array.isArray(item.content) ? item.content : [];
    for (const part of content) {
      if (typeof part.text === "string" && part.text.trim()) {
        return part.text.trim();
      }
    }
  }

  return "";
}

function stripHtml(value) {
  const temp = document.createElement("div");
  temp.innerHTML = value;
  return temp.textContent || temp.innerText || "";
}

function getLessonHtml(lesson) {
  if (typeof lesson.html === "string") {
    return lesson.html;
  }

  return lesson.content.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
}

function handleEditorToolbarClick(event) {
  const button = event.target.closest("[data-editor-command]");
  if (!button) {
    return;
  }

  const command = button.dataset.editorCommand;
  applyEditorCommand(command);
}

function applyEditorColor(command, value) {
  if (!value) {
    return;
  }

  const styles = command === "hiliteColor"
    ? { backgroundColor: value }
    : { color: value };
  applyInlineStyle(styles);
}

function applyBlockFormat(value) {
  restoreEditorSelection();
  document.execCommand("formatBlock", false, value);
  saveEditorSelection();
}

function applyEditorFont(value) {
  if (!value) {
    return;
  }

  applyInlineStyle({ fontFamily: value });
}

function applyFontSize(value) {
  if (!value) {
    return;
  }

  applyInlineStyle({ fontSize: value });
}

function applyLineHeight(value) {
  if (!value) {
    return;
  }

  applyBlockStyle({ lineHeight: value });
}

function applyListStyle(value) {
  const listType = ["decimal", "lower-alpha", "lower-roman"].includes(value)
    ? "insertOrderedList"
    : "insertUnorderedList";

  restoreEditorSelection();
  document.execCommand(listType, false);

  const range = getEditorRange();
  if (!range) {
    return;
  }

  const listNode = findClosestMatchingNode(range.commonAncestorContainer, (node) =>
    node instanceof HTMLElement && (node.tagName === "UL" || node.tagName === "OL"));

  if (listNode instanceof HTMLElement) {
    listNode.style.listStyleType = value;
    if (listNode.tagName === "OL") {
      listNode.style.paddingInlineStart = "1.8rem";
    }
    if (listNode.tagName === "UL") {
      listNode.style.paddingInlineStart = "1.5rem";
    }
  }

  saveEditorSelection();
}

function applyEditorCommand(command) {
  if (command === "left" || command === "center" || command === "right") {
    applyBlockStyle({ textAlign: command });
    return;
  }

  restoreEditorSelection();
  document.execCommand(command, false);
  saveEditorSelection();
}

function insertUploadedImage() {
  const file = trainingImageUpload.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    trainingLessonEditor.focus();
    document.execCommand("insertImage", false, String(reader.result));
    trainingImageUpload.value = "";
  };
  reader.readAsDataURL(file);
}

function insertCodeBlock() {
  trainingLessonEditor.focus();
  const selection = window.getSelection();
  const selectedText = selection ? selection.toString().trim() : "";
  const code = escapeHtml(selectedText || "// code\nconst value = 1;\nconsole.log(value);");
  document.execCommand(
    "insertHTML",
    false,
    `<pre class="lesson-code-block"><code>${code}</code></pre><p></p>`,
  );
}

function getEditorRange() {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const liveRange = selection.getRangeAt(0);
    const liveCommonAncestor = liveRange.commonAncestorContainer.nodeType === Node.TEXT_NODE
      ? liveRange.commonAncestorContainer.parentNode
      : liveRange.commonAncestorContainer;

    if (liveCommonAncestor && trainingLessonEditor.contains(liveCommonAncestor)) {
      savedEditorRange = liveRange.cloneRange();
      return liveRange;
    }
  }

  if (!restoreEditorSelection()) {
    return null;
  }

  const restoredSelection = window.getSelection();
  if (!restoredSelection || restoredSelection.rangeCount === 0) {
    return null;
  }

  const range = restoredSelection.getRangeAt(0);
  const commonAncestor = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentNode
    : range.commonAncestorContainer;

  if (!commonAncestor || !trainingLessonEditor.contains(commonAncestor)) {
    return null;
  }

  return range;
}

function applyInlineStyle(styles) {
  const range = getEditorRange();
  if (!range) {
    return;
  }

  if (range.collapsed) {
    const span = document.createElement("span");
    Object.assign(span.style, styles);
    span.appendChild(document.createTextNode("\u200b"));
    range.insertNode(span);

    const selection = window.getSelection();
    const textNode = span.firstChild;
    if (selection && textNode) {
      const caretRange = document.createRange();
      caretRange.setStart(textNode, textNode.textContent.length);
      caretRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(caretRange);
      savedEditorRange = caretRange.cloneRange();
    }
    return;
  }

  const span = document.createElement("span");
  Object.assign(span.style, styles);
  const fragment = range.extractContents();
  span.appendChild(fragment);
  range.insertNode(span);

  const selection = window.getSelection();
  if (selection) {
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    newRange.collapse(false);
    selection.removeAllRanges();
    selection.addRange(newRange);
    savedEditorRange = newRange.cloneRange();
  }
}

function applyBlockStyle(styles) {
  const range = getEditorRange();
  if (!range) {
    return;
  }

  const block = findClosestMatchingNode(range.commonAncestorContainer, (node) =>
    node instanceof HTMLElement && (
      node.tagName === "P" ||
      node.tagName === "DIV" ||
      node.tagName === "LI" ||
      node.tagName === "BLOCKQUOTE" ||
      node.tagName === "H2" ||
      node.tagName === "H3"
    ));

  if (block instanceof HTMLElement) {
    Object.assign(block.style, styles);
    placeCaretInsideElement(block);
  }
}

function findClosestMatchingNode(node, predicate) {
  let current = node instanceof Node ? node : null;
  while (current && current !== trainingLessonEditor) {
    if (predicate(current)) {
      return current;
    }
    current = current.parentNode;
  }
  return null;
}

function openAvatarModal() {
  avatarModal.classList.remove("is-hidden");
}

function closeAvatarModal() {
  avatarModal.classList.add("is-hidden");
}

function renderAvatarModal() {
  trainingAvatarGrid.innerHTML = trainingAvatars
    .map((avatar) => {
      const active = trainingState.avatarId === avatar.id;
      return `<button class="avatar-btn avatar-card ${avatar.className} ${active ? "is-active" : ""}" data-avatar-id="${avatar.id}" type="button">
        <span class="avatar-preview-badge ${avatar.className}">${escapeHtml(avatar.badge)}</span>
        <span class="avatar-preview-name">${escapeHtml(getText(avatar.nameKey))}</span>
      </button>`;
    })
    .join("");
}

function addTrainingUnit() {
  if (!IS_DEVELOPER) {
    return;
  }

  const title = window.prompt("Unit title");
  if (!title || !title.trim()) {
    return;
  }

  const items = getCourseItems();
  items.push({
    id: `unit-${Date.now()}`,
    kind: "divider",
    title: title.trim(),
    customTitle: true,
  });
  persistCourseContent();
  renderTraining();
}

function addTrainingLesson() {
  if (!IS_DEVELOPER) {
    return;
  }

  const title = window.prompt("Lesson title");
  if (!title || !title.trim()) {
    return;
  }

  const section = window.prompt("Section name", getCurrentSectionName());
  const items = getCourseItems();
  items.push({
    id: `lesson-${Date.now()}`,
    kind: "lesson",
    title: title.trim(),
    section: (section || "").trim(),
    content: [],
    html: "",
    customTitle: true,
    customSection: true,
  });
  persistCourseContent();
  renderTraining();
}

function addLessonNear(itemId, kind) {
  if (!IS_DEVELOPER) {
    return;
  }

  const title = window.prompt("Lesson title");
  if (!title || !title.trim()) {
    return;
  }

  const items = getCourseItems();
  const insertIndex = getInsertIndexForLesson(items, itemId, kind);
  const section = getSectionForInsert(items, itemId, kind);
  const lessonId = `lesson-${Date.now()}`;

  items.splice(insertIndex, 0, {
    id: lessonId,
    kind: "lesson",
    title: title.trim(),
    section,
    content: [],
    html: "",
    customTitle: true,
    customSection: true,
  });

  trainingState.selectedLessonId = lessonId;
  persistCourseContent();
  renderTraining();
}

function getInsertIndexForLesson(items, itemId, kind) {
  const index = items.findIndex((entry) => entry.id === itemId && entry.kind === kind);
  if (index === -1) {
    return items.length;
  }

  if (kind === "lesson") {
    return index + 1;
  }

  let pointer = index + 1;
  while (pointer < items.length && items[pointer].kind !== "divider") {
    pointer += 1;
  }
  return pointer;
}

function getSectionForInsert(items, itemId, kind) {
  if (kind === "lesson") {
    return items.find((entry) => entry.id === itemId)?.section || "";
  }

  return items.find((entry) => entry.id === itemId)?.title || "";
}

function getCurrentSectionName() {
  const selectedLesson = getSelectedLesson();
  if (selectedLesson?.section) {
    return selectedLesson.section;
  }

  const items = getCourseItems();
  for (let index = items.length - 1; index >= 0; index -= 1) {
    if (items[index].kind === "divider") {
      return items[index].title;
    }
  }

  return "";
}

function updateSelectedAvatar() {
  renderTopbarProfile();
  return getAvatarDisplay();
}

function getAvatarById(avatarId) {
  return trainingAvatars.find((avatar) => avatar.id === avatarId) || trainingAvatars[0];
}

function getAvatarDisplay() {
  if (trainingState.avatarId) {
    const avatar = getAvatarById(trainingState.avatarId);
    return {
      badge: avatar.badge,
      className: avatar.className,
      label: getText(avatar.nameKey),
    };
  }

  const initial = trainingState.name.trim().charAt(0).toUpperCase() || "J";
  return {
    badge: initial,
    className: "avatar-theme-initial",
    label: trainingState.name || "J",
  };
}

function decorateLessonCodeBlocks(container) {
  container.querySelectorAll(".lesson-code-block code").forEach((codeBlock) => {
    const source = codeBlock.textContent || "";
    codeBlock.innerHTML = highlightJavaScript(source);
  });
}

function renderTopbarProfile() {
  if (!topbarProfile || !topbarProfileAvatar || !topbarProfileName) {
    return;
  }

  const shouldShow = trainingState.hasStarted && Boolean(trainingState.name.trim());
  topbarProfile.classList.toggle("is-hidden", !shouldShow);

  if (!shouldShow) {
    return;
  }

  const avatar = getAvatarDisplay();
  topbarProfileAvatar.textContent = avatar.badge;
  topbarProfileAvatar.className = `topbar-profile-avatar ${avatar.className}`;
  topbarProfileName.textContent = trainingState.name;
}

function highlightJavaScript(source) {
  const pattern =
    /\/\/.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:const|let|var|return|if|else|for|while|function|new)\b|\b(?:console|Math|Number|String|Boolean|Array|Object)\b|\b(?:log)\b|\b\d+\b|[=+\-*/]|[{}()[\].,;:]|\b[a-zA-Z_$][\w$]*(?=\s*\()/gm;
  return highlightByPattern(source, pattern, getJavaScriptTokenClass);
}

function highlightHtml(source) {
  const pattern =
    /<!--.*?-->|<\/?[a-zA-Z][^>\s]*|[a-zA-Z-:]+(?==)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[<>/=]/gm;
  return highlightByPattern(source, pattern, getHtmlTokenClass);
}

function highlightCss(source) {
  const pattern =
    /\/\*.*?\*\/|#[0-9a-fA-F]{3,6}|\.[a-zA-Z_-][\w-]*|[a-zA-Z-]+(?=\s*:)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:px|rem|em|%|vh|vw)?\b|[{}:;(),.]/gm;
  return highlightByPattern(source, pattern, getCssTokenClass);
}

function highlightByPattern(source, pattern, classifier) {
  let result = "";
  let lastIndex = 0;

  for (const match of source.matchAll(pattern)) {
    const value = match[0];
    const index = match.index ?? 0;
    result += escapeHtml(source.slice(lastIndex, index));
    result += `<span class="${classifier(value)}">${escapeHtml(value)}</span>`;
    lastIndex = index + value.length;
  }

  result += escapeHtml(source.slice(lastIndex));
  return result;
}

function getJavaScriptTokenClass(value) {
  if (value.startsWith("//")) return "token-comment";
  if (/^["'`]/.test(value)) return "token-string";
  if (/^(const|let|var|return|if|else|for|while|function|new)$/.test(value)) return "token-keyword";
  if (/^(console|Math|Number|String|Boolean|Array|Object)$/.test(value)) return "token-const";
  if (value === "log") return "token-property";
  if (/^\d+$/.test(value)) return "token-number";
  if (/^[=+\-*/]$/.test(value)) return "token-operator";
  if (/^[{}()[\].,;:]$/.test(value)) return "token-punctuation";
  return "token-function";
}

function getHtmlTokenClass(value) {
  if (value.startsWith("<!--")) return "token-comment";
  if (/^<\/?[a-zA-Z]/.test(value)) return "token-tag";
  if (/^["']/.test(value)) return "token-string";
  if (/^[<>/=]$/.test(value)) return "token-punctuation";
  return "token-attr";
}

function getCssTokenClass(value) {
  if (value.startsWith("/*")) return "token-comment";
  if (value.startsWith(".")) return "token-selector";
  if (/^#([0-9a-fA-F]{3,6})$/.test(value)) return "token-value";
  if (/^["']/.test(value)) return "token-string";
  if (/^\d/.test(value)) return "token-number";
  if (/^[{}:;(),.]$/.test(value)) return "token-brace";
  return "token-attr";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

consoleInput.value = consoleDefaultCode;
htmlInput.value = builderDefaultHtml;
cssInput.value = builderDefaultCss;
hydrateCourseContent();

updateCodeEditor(consoleInput, consoleHighlight, consoleLineNumbers, highlightJavaScript);
updateCodeEditor(htmlInput, htmlHighlight, htmlLineNumbers, highlightHtml);
updateCodeEditor(cssInput, cssHighlight, cssLineNumbers, highlightCss);

runConsoleCode();
renderPreview();
renderTraining();
applyLanguage("en");
