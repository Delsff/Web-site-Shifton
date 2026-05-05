// prettier-ignore
const langArr = {
  "mainburger": {
    'ru': 'главная',
    'en': 'home',
    'cz': 'Domov'
  },
  "tarifburger": {
    'ru': 'тарифы',
    'en': 'tariffs',
    'cz': 'tarify'
  },
  "chanceburger": {
    'ru': 'возможности',
    'en': 'possibilities',
    'cz': 'možnosti'
  },
  "blogburger": {
    'ru': 'блог',
    'en': 'blog',
    'cz': 'blog'
  },
  "chavoburger": {
    'ru': 'чаво',
    'en': 'FAQ',
    'cz': 'FAQ'
  },
  "startburger": {
    'ru': 'вход',
    'en': 'entrance',
    "cz": 'vjezd'
  },
  "navregisterburger": {
    'ru': 'Регистрация',
    'en': 'Registration',
    'cz': 'Registrace'
  },
    "main": {
    'ru': 'главная',
    'en': 'home',
    'cz': 'Domov'
  },
    "tarif": {
    'ru': 'тарифы',
    'en': 'tariffs',
    'cz': 'tarify'
  },
  "chance": {
    'ru': 'возможности',
    'en': 'possibilities',
    'cz': 'možnosti'
  },
  "blog": {
    'ru': 'блог',
    'en': 'blog',
    'cz': 'blog'
  },
  "chavo": {
    'ru': 'чаво',
    'en': 'FAQ',
    'cz': 'FAQ'
  },
  "start": {
    'ru': 'вход',
    'en': 'entrance',
    "cz": 'vjezd'
  },
  "navregister": {
    'ru': 'Регистрация',
    'en': 'Registration',
    'cz': 'Registrace'
  },
  "title": {
    'ru': 'Автоматизированное составление <br />рабочих расписаний онлайн',
    'en': 'Automated online <br /> work scheduling',
    'cz': 'Automatizované online <br /> plánování práce'
  },
  "money": {
    'ru': 'Экономия времени и денег',
    'en': 'Saving time and money',
    'cz': 'Úspora času a peněz'
  },
  "work": {
    'ru': 'Грамотное распределение рабочей нагрузки',
    'en': 'Proper distribution of workload',
    'cz': 'Správné rozložení pracovní zátěže'
  },
  "optimal": {
    'ru': 'Построение оптимального сменного рабочего <br /> расписания для любого количества сотрудников',
    'en': 'Developing an optimal shift work <br /> schedule for any number of employees',
    'cz': 'Vytvoření optimálního rozvrhu pracovních <br /> směn pro libovolný počet zaměstnanců'
  },
  "free": {
    'ru': 'Попробовать бесплатно',
    'en': 'Try for free',
    'cz': 'Vyzkoušejte zdarma'
  },
  "shifton": {
    'ru': 'Возможности',
    'en': 'Possibilities',
    'cz': 'Možnosti'
  },
  "worker": {
    'ru': 'Распределяй <br /> работу',
    'en': 'Distribute <br /> work',
    'cz': 'Distribuce <br /> práce'
  },
  "exchange": {
    'ru': 'Планирование смен',
    'en': 'Shift planning',
    'cz': 'Plánování směn'
  },
  "template": {
    'ru': 'Настраиваемые шаблоны смен',
    'en': 'Customizable shift templates',
    'cz': 'Přizpůsobitelné šablony směn'
  },
  "swap": {
    'ru': 'Обмен сменами между сотрудниками',
    'en': 'Swapping shifts between employees',
    'cz': 'Střídání směn mezi zaměstnanci'
  },
  "days": {
    'ru': 'Праздничные и особые дни',
    'en': 'Holidays and special days',
    'cz': 'Svátky a zvláštní dny'
  },
  "freechange": {
    'ru': 'Свободные смены',
    'en': 'Free shifts',
    'cz': 'Volné směny'
  },
  "equarement": {
    'ru': 'Соблюдение трудового законодательства',
    'en': 'Compliance with labor laws',
    'cz': 'Dodržování pracovního práva'
  },
  "synch": {
    'ru': 'Синхронизация с календарем',
    'en': 'Synchronization with the calendar',
    'cz': 'Synchronizace s kalendářem'
  },
  "pop": {
    'ru': 'Подробнее',
    'en': 'More details',
    'cz': 'Další podrobnosti'
  },
  "control": {
    'ru': 'Управляй и <br /> контролируй',
    'en': 'Manage and <br /> control',
    'cz': 'Spravovat a <br /> kontrolovat'
  },
  "employees": {
    'ru': 'Контроль сотрудников',
    'en': 'Employee control',
    'cz': 'Kontrola zaměstnanců'
  },
  "tasks": {
    'ru': 'Назначение задач',
    'en': 'Assigning tasks',
    'cz': 'Přidělování úkolů'
  },
  "controlul": {
    'ru': 'Создание контрольных списков',
    'en': 'Creating checklists',
    'cz': 'Vytváření kontrolních seznamů'
  },
  "tracker": {
    'ru': 'Отслеживание опозданий',
    'en': 'Tracking late arrivals',
    'cz': 'Sledování pozdních příchodů'
  },
  "finish": {
    'ru': 'Сравнение запланированных и <br /> завершенных задач',
    'en': 'Comparison of planned and <br />  completed tasks',
    'cz': 'Porovnání plánovaných a  <br /> dokončených úkolů'
  },
  "hours": {
    'ru': 'Отчеты об отработанных часах,<br />зарплатах сотрудников и <br />отпускным/больничным дням',
    'en': 'Reports on hours worked,<br />employees salaries, and <br />vacation/sick days',
    'cz': 'Zprávy o odpracovaných hodinách,<br />mzdách zaměstnanců a<br />dovolených/nemocných'
  },
  "detailsec": {
    'ru': 'Подробнее',
    'en': 'More details',
    'cz': 'Další podrobnosti'
  },
  "mashtab": {
    'ru': 'Масштабируй',
    'en': 'Scale up',
    'cz': 'Zvětšit'
  },
  "accept": {
    'ru': 'Интеграции и <br /> неограниченный доступ',
    'en': 'Integrations and <br /> unlimited access',
    'cz': 'Integrace a <br /> neomezený přístup'
  },
  "integrations": {
    'ru': 'Возможность интеграции',
    'en': 'Possibility of integration',
    'cz': 'Možnost integrace'
  },
  "device": {
    'ru': 'Доступ 24/7 с любого <br /> устройства с выходом в <br />Интернет',
    'en': '24/7 access from any <br /> device with Internet access',
    'cz': 'Přístup 24 hodin denně, 7 dní v týdnu z jakéhokoli <br /> zařízení s přístupem k internetu'
  },
  "message": {
    'ru': 'Система уведомлений',
    'en': 'Notification system',
    'cz': 'Notifikační systém'
  },
  "universal": {
    'ru': 'Универсальность',
    'en': 'Versatility',
    'cz': 'Všestrannost'
  },
  "detailthree": {
    'ru': 'Подробнее',
    "en": 'More details',
    'cz': 'Další podrobnosti'
  },
  "weather": {
    'ru': 'Планируй и<br /> составляй прогнозы',
    'en': 'Plan and<br /> make forecasts',
    'cz': 'Plánujte a<br /> vytvářejte předpovědi'
  },
  "prognoz": {
    'ru': 'Оценки и прогнозы',
    'en': 'Estimates and forecasts',
    'cz': 'Odhady a prognózy'
  },
  "cardfour": {
  'ru': ' <li>Планирование перерывов</li><li>Планирование отпусков</li><li>Безопасное хранение документов</li>',
  'en': '<li>Planning Breaks</li><li>Planning Vacations</li><li>Secure Document Storage</li>',
  'cz': '<li>Plánování přestávek</li><li>Plánování dovolených</li><li>Bezpečné úložiště dokumentů</li>'
},
  "detailfour": {
  'ru': 'Подробнее',
  'en': 'More details',
  'cz': 'Další podrobnosti'
},
  "schedules": {
    'ru': 'Автоматизированное создание онлайн расписаний',
    'en': 'Automated creation of online schedules',
    'cz': 'Automatické vytváření online rozvrhů'
  },
   "infomain": {
    'ru': 'Онлайн-система Shifton разработана для <br />оптимизации времени и ресурсов в создании <br />рабочих расписаний сотрудников. Shifton - <br />прекрасное решение для компаний любых сфер <br /> деятельности и размеров.',
    'en': 'The Shifton online system is designed to <br /> optimize time and resources in creating employee <br /> work schedules. Shifton is <br /> an excellent solution for companies <br /> of any industry and size.',
    'cz': 'Online systém Shifton je navržen tak, <br /> aby optimalizoval čas a zdroje při tvorbě <br /> pracovních rozvrhů zaměstnanců. Shifton je <br /> vynikajícím řešením pro firmy <br /> všech odvětví a velikostí.'
   },
  "zaregistr": {
  'ru': 'Зарегистирироваться',
  'en': 'Register',
  'cz': 'Rejstřík'
},
"optimization": {
  'ru': 'Оптимизация командной работы',
  'en': 'Optimizing teamwork',
  'cz': 'Optimalizace týmové práce'
},
"secondmaininfo": {
  'ru': 'Shifton поможет компании сэкономить <br />средства, минимизировав время простоев в <br />работе. Система автоматически назначает <br />смены сотрудникам, обеспечивая плавный и <br />бесперебойный рабочий процесс на <br />предприятии.',
  'en': 'Shifton will help companies save money by <br /> minimizing downtime. The system automatically assigns <br /> shifts to employees, ensuring a smooth <br /> and uninterrupted workflow across <br /> the enterprise.',
  'cz': 'Shifton pomůže firmám ušetřit peníze <br /> minimalizací prostojů.Systém automaticky přiřazuje směny <br /> zaměstnancům, čímž zajišťuje plynulý <br /> a nepřerušovaný pracovní postup <br /> v celém podniku.'
},
"startwork": {
  'ru': 'Начать работу',
  'en': 'Get started',
  'cz': 'Začněte'
},
"confused": {
  'ru': 'Управление сменами и перерывами',
  'en': 'Shift and Break Management',
  'cz': 'Řízení směn a přestávek'
},
"maininfothree": {
  'ru': 'Создавайте комфортные рабочие графики с <br />учетом личных обстоятельств сотрудников. <br />Работники оценят возможность обмениваться <br />сменами или перерывами с коллегами, а в <br />случае замены сотрудника Shifton мгновенно <br />скорректирует любой график.',
  'en': 'Create flexible work schedules that <br />take into account employees personal circumstances. <br />Employees will appreciate the ability to swap shifts or <br /> breaks with colleagues, and if an employee <br /> changes, Shifton will instantly <br />adjust any schedule.',
  'cz': 'Vytvořte flexibilní pracovní rozvrhy, které zohledňují <br /> osobní okolnosti zaměstnanců. Zaměstnanci ocení možnost <br /> vyměňovat si směny nebo přestávky  s kolegy a pokud se <br /> zaměstnanec změní, Shifton okamžitě upraví jakýkoli rozvrh.'
},
"startfreesec": {
  'ru': 'Попробовать бесплатно',
  'en': 'Try for free',
  'cz': 'Vyzkoušejte zdarma'
},
"titlefoot": {
  'ru': 'Shifton - автоматизированный <br />сервис планирования расписаний',
  'en': 'Shifton - automated  <br /> scheduling service',
  'cz': 'Shifton - automatizovaná  <br /> plánovací služba'
},
"infofoot": {
  'ru': ' <p>Остались вопросы? С радостью на них ответим! <br />Пишите в чат или на почту<span class="email__span"><a href="#">support@shifton.com</a></span></p>',
  'en': '<p>Any questions? Well be happy to answer them! <br />Contact us via chat or email.<span class="email__span"><a href="#">support@shifton.com</a></span></p>',
  'cz': '<p>Máte nějaké otázky? Rádi vám na ně odpovíme! <br />Kontaktujte nás prostřednictvím chatu nebo e-mailu.<span class="email__span"><a href="#">support@shifton.com</a></span></p>'
},
"footinfor": {
  'ru': ' <p>Возможности</p><p>Блог</p><p>ЧАВО</p>',
  'en': '<p>Features</p><p>Blog</p><p>FAQ</p>',
  'cz': '<p>Funkce</p><p>Blog</p><p>Často kladené otázky</p>'
},
"windowregistr": {
  'ru': 'Регистрация',
  'en': 'Registration',
  'cz': 'Registrace'
},
"windowbtn": {
  'ru': 'Зарегестрироваться',
  'en': 'Register',
  'cz': 'Rejstřík'
}
};
