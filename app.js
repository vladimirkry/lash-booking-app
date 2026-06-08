const STORAGE = {
  bookings: "lashAtelierBookingsV2",
  settings: "lashAtelierSettingsV2",
  requests: "lashAtelierRequestsV2",
  publicLink: "lashAtelierPublicLink",
  language: "lashAtelierLanguage",
};

const WEEK_DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const SUPPORTED_LANGS = ["uk", "pl", "nl", "en"];

const SERVICES = [
  {
    id: "lashes-2d",
    duration: 105,
    price: "45",
    names: {
      uk: "Нарощення вій 2D",
      pl: "Przedłużanie rzęs 2D",
      nl: "Wimperextensions 2D",
      en: "Eyelash extensions 2D",
    },
    descriptions: {
      uk: "Натуральний об'єм для щоденного образу",
      pl: "Naturalna objętość na co dzień",
      nl: "Natuurlijk volume voor elke dag",
      en: "Natural volume for everyday wear",
    },
  },
  {
    id: "lashes-3d",
    duration: 120,
    price: "55",
    names: {
      uk: "Нарощення вій 3D",
      pl: "Przedłużanie rzęs 3D",
      nl: "Wimperextensions 3D",
      en: "Eyelash extensions 3D",
    },
    descriptions: {
      uk: "Виразний, але м'який акцент на погляді",
      pl: "Wyrazisty, ale delikatny efekt spojrzenia",
      nl: "Zichtbare maar zachte nadruk op de ogen",
      en: "Defined yet soft emphasis on the eyes",
    },
  },
  {
    id: "lashes-4d",
    duration: 135,
    price: "65",
    names: {
      uk: "Нарощення вій 4D",
      pl: "Przedłużanie rzęs 4D",
      nl: "Wimperextensions 4D",
      en: "Eyelash extensions 4D",
    },
    descriptions: {
      uk: "Щільніший об'єм для яскравого ефекту",
      pl: "Gęstsza objętość dla mocniejszego efektu",
      nl: "Voller volume voor een opvallender effect",
      en: "Fuller volume for a more striking effect",
    },
  },
  {
    id: "lashes-5d",
    duration: 150,
    price: "75",
    names: {
      uk: "Нарощення вій 5D",
      pl: "Przedłużanie rzęs 5D",
      nl: "Wimperextensions 5D",
      en: "Eyelash extensions 5D",
    },
    descriptions: {
      uk: "Максимальний об'єм для вечірнього образу",
      pl: "Maksymalna objętość na wyjątkowy look",
      nl: "Maximaal volume voor een glamoureuze look",
      en: "Maximum volume for a glamorous look",
    },
  },
];

const I18N = {
  uk: {
    brandSubtitle: "онлайн-запис на нарощення вій",
    language: "Мова",
    navBooking: "Запис",
    navAdmin: "Кабінет",
    navShare: "QR / Посилання",
    heroEyebrow: "Lash studio booking",
    heroTitle: "Обери час - ми подбаємо про погляд",
    heroCopy: "Онлайн-запис на нарощення вій 2D-5D. Зручний час, охайна робота і результат, який підкреслює саме вас.",
    heroBadgeOne: "2D-5D об'єми",
    heroBadgeTwo: "від 45 €",
    heroBadgeThree: "акуратний натуральний ефект",
    heroNoteTitle: "Lash Atelier",
    heroNoteCopy: "Підберемо вигин, довжину та щільність під форму очей.",
    bookingEyebrow: "Онлайн-запис",
    bookingTitle: "Забронюйте свій візит",
    bookingCopy: "Кілька деталей - і ваш час зарезервовано для красивого, чистого результату.",
    stepOneTitle: "Бажаний ефект",
    stepOneCopy: "Натуральний, виразний або максимально об'ємний погляд.",
    stepTwoTitle: "Зручний слот",
    stepTwoCopy: "Оберіть час, який уже вільний у графіку майстра.",
    stepThreeTitle: "Підтвердження",
    stepThreeCopy: "Після бронювання адміністратор бачить ваш запис.",
    visualTitle: "Охайна лінія, м'який об'єм",
    visualCopy: "Підберемо ефект так, щоб вії виглядали доглянуто і не перевантажували погляд.",
    name: "Ім'я",
    phone: "Телефон",
    service: "Послуга",
    date: "Дата",
    time: "Час",
    comment: "Коментар",
    confirmBooking: "Підтвердити запис",
    requestEyebrow: "Зміни запису",
    requestTitle: "Потрібно змінити або скасувати?",
    requestCopy: "Напишіть нам, що потрібно змінити, і адміністратор узгодить деталі.",
    requestType: "Тип заявки",
    requestChange: "Змінити запис",
    requestCancel: "Скасувати запис",
    requestMessage: "Повідомлення",
    sendRequest: "Надіслати адміністратору",
    adminEyebrow: "Кабінет адміністратора",
    adminTitle: "Повний контроль записів",
    adminCopy: "Налаштовуйте робочі дні, години прийому, вихідні, записи та заявки клієнтів.",
    enableNotifications: "Увімкнути сповіщення",
    today: "сьогодні",
    next7Days: "на 7 днів",
    pendingRequests: "заявки",
    total: "усього",
    scheduleEyebrow: "Графік",
    scheduleTitle: "Робочі дні та години",
    saveSchedule: "Зберегти графік",
    daysOffEyebrow: "Вихідні",
    daysOffTitle: "Закриті дати",
    reason: "Причина",
    addDayOff: "Додати вихідний",
    manualBookingEyebrow: "Адміністратор",
    manualBookingTitle: "Створити запис вручну",
    createBooking: "Створити запис",
    clientRequestsEyebrow: "Заявки клієнтів",
    clientRequestsTitle: "Вхідні повідомлення",
    bookingsEyebrow: "Календар",
    bookingsTitle: "Усі записи",
    filterByDate: "Фільтр за датою",
    showAll: "Показати всі",
    clearAll: "Очистити все",
    shareEyebrow: "Для Instagram, сайту та візиток",
    shareTitle: "Посилання та QR-код",
    shareCopy:
      "Після публікації вставте сюди публічне посилання. QR-код можна розмістити в сторіс, на рецепції або в друкованих матеріалах.",
    publicLink: "Публічне посилання на запис",
    useCurrentLink: "Взяти поточне",
    copyLink: "Скопіювати",
    downloadQr: "Завантажити QR",
    duration: "Тривалість",
    price: "Вартість",
    effect: "Ефект",
    min: "хв",
    currency: "€",
    open: "Відкрито",
    closed: "Закрито",
    noSlots: "Немає вільного часу",
    chooseDate: "Спочатку оберіть дату",
    scheduleSaved: "Графік збережено.",
    dayOffAdded: "Вихідний додано.",
    bookingCreated: "Запис створено",
    requestSent: "Заявку надіслано адміністратору.",
    copied: "Посилання скопійовано.",
    manualCopy: "Скопіюйте посилання вручну з поля вище.",
    addLinkFirst: "Спочатку додайте посилання.",
    currentLinkAdded: "Поточне посилання додано.",
    notificationsEnabled: "Сповіщення увімкнені для цього браузера.",
    notificationsUnavailable: "Сповіщення недоступні або заблоковані.",
    delete: "Видалити",
    cancel: "Скасувати",
    confirm: "Підтвердити",
    complete: "Завершити",
    statusPending: "очікує",
    statusConfirmed: "підтверджено",
    statusCompleted: "завершено",
    statusCancelled: "скасовано",
    emptyBookings: "Записів поки немає.",
    emptyRequests: "Нових заявок немає.",
    emptyDaysOff: "Вихідних дат поки немає.",
    requestFrom: "Заявка від",
    adminNotice: "Нова заявка клієнта",
    unavailableDate: "Ця дата закрита або не є робочою.",
    slotTaken: "Цей час вже зайнятий. Оберіть інший слот.",
    clearConfirm: "Видалити всі записи?",
  },
  pl: {
    brandSubtitle: "rezerwacja online przedłużania rzęs",
    language: "Język",
    navBooking: "Rezerwacja",
    navAdmin: "Panel",
    navShare: "QR / Link",
    heroEyebrow: "Lash studio booking",
    heroTitle: "Wybierz termin - my zadbamy o spojrzenie",
    heroCopy: "Rezerwacja online przedłużania rzęs 2D-5D. Wygodny termin, staranna praca i efekt dopasowany do Ciebie.",
    heroBadgeOne: "objętości 2D-5D",
    heroBadgeTwo: "od 45 €",
    heroBadgeThree: "czysty naturalny efekt",
    heroNoteTitle: "Lash Atelier",
    heroNoteCopy: "Dobierzemy skręt, długość i gęstość do kształtu oka.",
    bookingEyebrow: "Rezerwacja online",
    bookingTitle: "Zarezerwuj wizytę",
    bookingCopy: "Kilka szczegółów i Twój termin jest zarezerwowany dla pięknego, czystego efektu.",
    stepOneTitle: "Wybrany efekt",
    stepOneCopy: "Naturalne, wyraziste albo maksymalnie pełne spojrzenie.",
    stepTwoTitle: "Wolny termin",
    stepTwoCopy: "Wybierz godzinę, która jest dostępna w grafiku stylistki.",
    stepThreeTitle: "Potwierdzenie",
    stepThreeCopy: "Po rezerwacji administrator widzi Twoją wizytę.",
    visualTitle: "Czysta linia, miękka objętość",
    visualCopy: "Dobierzemy efekt tak, aby rzęsy wyglądały zadbanie i nie obciążały spojrzenia.",
    name: "Imię",
    phone: "Telefon",
    service: "Usługa",
    date: "Data",
    time: "Godzina",
    comment: "Komentarz",
    confirmBooking: "Potwierdź rezerwację",
    requestEyebrow: "Zmiany wizyty",
    requestTitle: "Chcesz zmienić lub anulować?",
    requestCopy: "Napisz, co chcesz zmienić, a administrator uzgodni szczegóły.",
    requestType: "Typ prośby",
    requestChange: "Zmień wizytę",
    requestCancel: "Anuluj wizytę",
    requestMessage: "Wiadomość",
    sendRequest: "Wyślij do administratora",
    adminEyebrow: "Panel administratora",
    adminTitle: "Pełna kontrola rezerwacji",
    adminCopy: "Ustawiaj dni pracy, godziny przyjęć, dni wolne, wizyty i prośby klientów.",
    enableNotifications: "Włącz powiadomienia",
    today: "dzisiaj",
    next7Days: "7 dni",
    pendingRequests: "prośby",
    total: "razem",
    scheduleEyebrow: "Grafik",
    scheduleTitle: "Dni i godziny pracy",
    saveSchedule: "Zapisz grafik",
    daysOffEyebrow: "Dni wolne",
    daysOffTitle: "Zamkniete daty",
    reason: "Powód",
    addDayOff: "Dodaj dzień wolny",
    manualBookingEyebrow: "Administrator",
    manualBookingTitle: "Utwórz wizytę ręcznie",
    createBooking: "Utwórz wizytę",
    clientRequestsEyebrow: "Prośby klientów",
    clientRequestsTitle: "Wiadomości",
    bookingsEyebrow: "Kalendarz",
    bookingsTitle: "Wszystkie wizyty",
    filterByDate: "Filtruj po dacie",
    showAll: "Pokaż wszystkie",
    clearAll: "Wyczyść wszystko",
    shareEyebrow: "Do Instagramu, strony i wizytówek",
    shareTitle: "Link i kod QR",
    shareCopy: "Po publikacji wklej tutaj publiczny link. Kod QR możesz umieścić w stories, recepcji lub druku.",
    publicLink: "Publiczny link do rezerwacji",
    useCurrentLink: "Użyj obecnego",
    copyLink: "Kopiuj",
    downloadQr: "Pobierz QR",
    duration: "Czas",
    price: "Cena",
    effect: "Efekt",
    min: "min",
    currency: "€",
    open: "Otwarte",
    closed: "Zamknięte",
    noSlots: "Brak wolnych terminów",
    chooseDate: "Najpierw wybierz datę",
    scheduleSaved: "Grafik zapisany.",
    dayOffAdded: "Dzień wolny dodany.",
    bookingCreated: "Wizyta utworzona",
    requestSent: "Prośba wysłana do administratora.",
    copied: "Link skopiowany.",
    manualCopy: "Skopiuj link recznie z pola powyzej.",
    addLinkFirst: "Najpierw dodaj link.",
    currentLinkAdded: "Obecny link dodany.",
    notificationsEnabled: "Powiadomienia włączone w tej przeglądarce.",
    notificationsUnavailable: "Powiadomienia niedostępne lub zablokowane.",
    delete: "Usuń",
    cancel: "Anuluj",
    confirm: "Potwierdz",
    complete: "Zakończ",
    statusPending: "oczekuje",
    statusConfirmed: "potwierdzona",
    statusCompleted: "zakończona",
    statusCancelled: "anulowana",
    emptyBookings: "Nie ma jeszcze wizyt.",
    emptyRequests: "Brak nowych próśb.",
    emptyDaysOff: "Brak dni wolnych.",
    requestFrom: "Prosba od",
    adminNotice: "Nowa prośba klienta",
    unavailableDate: "Ta data jest zamknięta albo nie jest dniem pracy.",
    slotTaken: "Ten termin jest już zajęty. Wybierz inny.",
    clearConfirm: "Usunąć wszystkie wizyty?",
  },
  nl: {
    brandSubtitle: "online boeken voor wimperextensions",
    language: "Taal",
    navBooking: "Boeken",
    navAdmin: "Beheer",
    navShare: "QR / Link",
    heroEyebrow: "Lash studio booking",
    heroTitle: "Kies je tijd - wij zorgen voor je blik",
    heroCopy: "Online boeken voor wimperextensions 2D-5D. Een passend moment, zorgvuldig werk en een resultaat dat bij jou past.",
    heroBadgeOne: "2D-5D volumes",
    heroBadgeTwo: "vanaf 45 €",
    heroBadgeThree: "net natuurlijk effect",
    heroNoteTitle: "Lash Atelier",
    heroNoteCopy: "We stemmen krul, lengte en dichtheid af op je oogvorm.",
    bookingEyebrow: "Online boeken",
    bookingTitle: "Reserveer je bezoek",
    bookingCopy: "Een paar details en je tijd is gereserveerd voor een mooie, schone finish.",
    stepOneTitle: "Gewenst effect",
    stepOneCopy: "Natuurlijk, expressief of maximaal volle wimpers.",
    stepTwoTitle: "Vrij moment",
    stepTwoCopy: "Kies een tijd die beschikbaar is in de planning.",
    stepThreeTitle: "Bevestiging",
    stepThreeCopy: "Na het boeken ziet de beheerder je afspraak.",
    visualTitle: "Strakke lijn, zacht volume",
    visualCopy: "We kiezen het effect zodat je wimpers verzorgd ogen zonder je blik te verzwaren.",
    name: "Naam",
    phone: "Telefoon",
    service: "Behandeling",
    date: "Datum",
    time: "Tijd",
    comment: "Opmerking",
    confirmBooking: "Boeking bevestigen",
    requestEyebrow: "Afspraak wijzigen",
    requestTitle: "Wijzigen of annuleren?",
    requestCopy: "Schrijf wat je wilt wijzigen, dan stemt de beheerder de details af.",
    requestType: "Type aanvraag",
    requestChange: "Afspraak wijzigen",
    requestCancel: "Afspraak annuleren",
    requestMessage: "Bericht",
    sendRequest: "Naar beheerder sturen",
    adminEyebrow: "Beheerderspaneel",
    adminTitle: "Volledige controle over afspraken",
    adminCopy: "Beheer werkdagen, werktijden, vrije dagen, afspraken en klantaanvragen.",
    enableNotifications: "Meldingen inschakelen",
    today: "vandaag",
    next7Days: "7 dagen",
    pendingRequests: "aanvragen",
    total: "totaal",
    scheduleEyebrow: "Planning",
    scheduleTitle: "Werkdagen en uren",
    saveSchedule: "Planning opslaan",
    daysOffEyebrow: "Vrije dagen",
    daysOffTitle: "Gesloten datums",
    reason: "Reden",
    addDayOff: "Vrije dag toevoegen",
    manualBookingEyebrow: "Beheerder",
    manualBookingTitle: "Handmatig afspraak maken",
    createBooking: "Afspraak maken",
    clientRequestsEyebrow: "Klantaanvragen",
    clientRequestsTitle: "Inbox",
    bookingsEyebrow: "Kalender",
    bookingsTitle: "Alle afspraken",
    filterByDate: "Filter op datum",
    showAll: "Alles tonen",
    clearAll: "Alles wissen",
    shareEyebrow: "Voor Instagram, website en kaartjes",
    shareTitle: "Link en QR-code",
    shareCopy: "Plak na publicatie de publieke link hier. De QR-code kan in stories, receptie of drukwerk.",
    publicLink: "Publieke boekingslink",
    useCurrentLink: "Huidige gebruiken",
    copyLink: "Kopieren",
    downloadQr: "QR downloaden",
    duration: "Duur",
    price: "Prijs",
    effect: "Effect",
    min: "min",
    currency: "€",
    open: "Open",
    closed: "Gesloten",
    noSlots: "Geen vrije tijden",
    chooseDate: "Kies eerst een datum",
    scheduleSaved: "Planning opgeslagen.",
    dayOffAdded: "Vrije dag toegevoegd.",
    bookingCreated: "Afspraak gemaakt",
    requestSent: "Aanvraag naar beheerder gestuurd.",
    copied: "Link gekopieerd.",
    manualCopy: "Kopieer de link handmatig uit het veld hierboven.",
    addLinkFirst: "Voeg eerst een link toe.",
    currentLinkAdded: "Huidige link toegevoegd.",
    notificationsEnabled: "Meldingen ingeschakeld voor deze browser.",
    notificationsUnavailable: "Meldingen zijn niet beschikbaar of geblokkeerd.",
    delete: "Verwijderen",
    cancel: "Annuleren",
    confirm: "Bevestigen",
    complete: "Afronden",
    statusPending: "wachtend",
    statusConfirmed: "bevestigd",
    statusCompleted: "afgerond",
    statusCancelled: "geannuleerd",
    emptyBookings: "Nog geen afspraken.",
    emptyRequests: "Geen nieuwe aanvragen.",
    emptyDaysOff: "Nog geen vrije dagen.",
    requestFrom: "Aanvraag van",
    adminNotice: "Nieuwe klantaanvraag",
    unavailableDate: "Deze datum is gesloten of geen werkdag.",
    slotTaken: "Deze tijd is al bezet. Kies een andere tijd.",
    clearConfirm: "Alle afspraken verwijderen?",
  },
  en: {
    brandSubtitle: "online booking for eyelash extensions",
    language: "Language",
    navBooking: "Booking",
    navAdmin: "Admin",
    navShare: "QR / Link",
    heroEyebrow: "Lash studio booking",
    heroTitle: "Choose a time - we will take care of the look",
    heroCopy: "Online booking for 2D-5D eyelash extensions. A convenient time, precise work, and a result made for you.",
    heroBadgeOne: "2D-5D volumes",
    heroBadgeTwo: "from 45 €",
    heroBadgeThree: "clean natural effect",
    heroNoteTitle: "Lash Atelier",
    heroNoteCopy: "We match curl, length, and density to your eye shape.",
    bookingEyebrow: "Online booking",
    bookingTitle: "Reserve your visit",
    bookingCopy: "A few details and your time is reserved for a beautiful, clean finish.",
    stepOneTitle: "Desired effect",
    stepOneCopy: "Natural, defined, or maximum-volume lashes.",
    stepTwoTitle: "Open slot",
    stepTwoCopy: "Choose a time that is already available in the schedule.",
    stepThreeTitle: "Confirmation",
    stepThreeCopy: "After booking, the admin sees your appointment.",
    visualTitle: "Clean line, soft volume",
    visualCopy: "We choose the effect so your lashes look polished without weighing down your eyes.",
    name: "Name",
    phone: "Phone",
    service: "Service",
    date: "Date",
    time: "Time",
    comment: "Comment",
    confirmBooking: "Confirm booking",
    requestEyebrow: "Booking changes",
    requestTitle: "Need to change or cancel?",
    requestCopy: "Tell us what needs to change, and the admin will arrange the details.",
    requestType: "Request type",
    requestChange: "Change booking",
    requestCancel: "Cancel booking",
    requestMessage: "Message",
    sendRequest: "Send to admin",
    adminEyebrow: "Admin dashboard",
    adminTitle: "Full booking control",
    adminCopy: "Manage working days, appointment hours, days off, bookings, and client requests.",
    enableNotifications: "Enable notifications",
    today: "today",
    next7Days: "next 7 days",
    pendingRequests: "requests",
    total: "total",
    scheduleEyebrow: "Schedule",
    scheduleTitle: "Working days and hours",
    saveSchedule: "Save schedule",
    daysOffEyebrow: "Days off",
    daysOffTitle: "Closed dates",
    reason: "Reason",
    addDayOff: "Add day off",
    manualBookingEyebrow: "Admin",
    manualBookingTitle: "Create booking manually",
    createBooking: "Create booking",
    clientRequestsEyebrow: "Client requests",
    clientRequestsTitle: "Inbox",
    bookingsEyebrow: "Calendar",
    bookingsTitle: "All bookings",
    filterByDate: "Filter by date",
    showAll: "Show all",
    clearAll: "Clear all",
    shareEyebrow: "For Instagram, website, and cards",
    shareTitle: "Link and QR code",
    shareCopy: "After publishing, paste the public link here. Use the QR code in stories, reception, or print.",
    publicLink: "Public booking link",
    useCurrentLink: "Use current",
    copyLink: "Copy",
    downloadQr: "Download QR",
    duration: "Duration",
    price: "Price",
    effect: "Effect",
    min: "min",
    currency: "€",
    open: "Open",
    closed: "Closed",
    noSlots: "No available times",
    chooseDate: "Choose a date first",
    scheduleSaved: "Schedule saved.",
    dayOffAdded: "Day off added.",
    bookingCreated: "Booking created",
    requestSent: "Request sent to admin.",
    copied: "Link copied.",
    manualCopy: "Copy the link manually from the field above.",
    addLinkFirst: "Add a link first.",
    currentLinkAdded: "Current link added.",
    notificationsEnabled: "Notifications enabled for this browser.",
    notificationsUnavailable: "Notifications are unavailable or blocked.",
    delete: "Delete",
    cancel: "Cancel",
    confirm: "Confirm",
    complete: "Complete",
    statusPending: "pending",
    statusConfirmed: "confirmed",
    statusCompleted: "completed",
    statusCancelled: "cancelled",
    emptyBookings: "No bookings yet.",
    emptyRequests: "No new requests.",
    emptyDaysOff: "No days off yet.",
    requestFrom: "Request from",
    adminNotice: "New client request",
    unavailableDate: "This date is closed or not a working day.",
    slotTaken: "This time is already taken. Choose another slot.",
    clearConfirm: "Delete all bookings?",
  },
};

const form = document.querySelector("#booking-form");
const requestForm = document.querySelector("#request-form");
const adminBookingForm = document.querySelector("#admin-booking-form");
const dayOffForm = document.querySelector("#day-off-form");
const scheduleForm = document.querySelector("#schedule-form");
const clientName = document.querySelector("#client-name");
const clientPhone = document.querySelector("#client-phone");
const service = document.querySelector("#service");
const serviceDetails = document.querySelector("#service-details");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const note = document.querySelector("#note");
const message = document.querySelector("#form-message");
const requestName = document.querySelector("#request-name");
const requestPhone = document.querySelector("#request-phone");
const requestType = document.querySelector("#request-type");
const requestMessage = document.querySelector("#request-message");
const requestStatus = document.querySelector("#request-status");
const adminClientName = document.querySelector("#admin-client-name");
const adminClientPhone = document.querySelector("#admin-client-phone");
const adminService = document.querySelector("#admin-service");
const adminDate = document.querySelector("#admin-date");
const adminTime = document.querySelector("#admin-time");
const adminNote = document.querySelector("#admin-note");
const adminBookingMessage = document.querySelector("#admin-booking-message");
const scheduleMessage = document.querySelector("#schedule-message");
const dayOffDate = document.querySelector("#day-off-date");
const dayOffReason = document.querySelector("#day-off-reason");
const daysOffList = document.querySelector("#days-off-list");
const bookingsList = document.querySelector("#bookings-list");
const requestsList = document.querySelector("#requests-list");
const requestBadge = document.querySelector("#request-badge");
const filterDate = document.querySelector("#filter-date");
const resetFilter = document.querySelector("#reset-filter");
const clearBookings = document.querySelector("#clear-bookings");
const todayCount = document.querySelector("#today-count");
const weekCount = document.querySelector("#week-count");
const pendingCount = document.querySelector("#pending-count");
const totalCount = document.querySelector("#total-count");
const publicLink = document.querySelector("#public-link");
const useCurrentLink = document.querySelector("#use-current-link");
const copyLink = document.querySelector("#copy-link");
const qrCode = document.querySelector("#qr-code");
const downloadQr = document.querySelector("#download-qr");
const shareMessage = document.querySelector("#share-message");
const navLinks = document.querySelectorAll("[data-route]");
const languageSelect = document.querySelector("#language-select");
const enableNotifications = document.querySelector("#enable-notifications");
const views = {
  client: document.querySelector("#client-view"),
  admin: document.querySelector("#admin-view"),
  share: document.querySelector("#share-view"),
};
const appMode = getAppMode();
const allowedRoutes = {
  client: ["client"],
  admin: ["admin", "share"],
  full: ["client", "admin", "share"],
}[appMode];

const today = new Date();
const todayIso = toIsoDate(today);

let currentLang = getInitialLanguage();
let settings = loadSettings();
let bookings = loadArray(STORAGE.bookings);
let clientRequests = loadArray(STORAGE.requests);

date.min = todayIso;
date.value = todayIso;
adminDate.min = todayIso;
adminDate.value = todayIso;
dayOffDate.min = todayIso;
languageSelect.value = currentLang;

seedDemoData();
renderAll();
registerServiceWorker();

window.addEventListener("hashchange", renderRoute);
languageSelect.addEventListener("change", () => {
  currentLang = languageSelect.value;
  localStorage.setItem(STORAGE.language, currentLang);
  document.documentElement.lang = currentLang;
  renderAll();
});

service.addEventListener("change", () => {
  renderServiceDetails(service, serviceDetails);
  renderTimeOptions(date, time, service.value);
});

adminService.addEventListener("change", () => {
  renderTimeOptions(adminDate, adminTime, adminService.value);
});

date.addEventListener("change", () => renderTimeOptions(date, time, service.value));
adminDate.addEventListener("change", () => renderTimeOptions(adminDate, adminTime, adminService.value));
filterDate.addEventListener("change", renderBookings);
publicLink.addEventListener("input", () => {
  localStorage.setItem(STORAGE.publicLink, publicLink.value.trim());
  renderQr();
});

resetFilter.addEventListener("click", () => {
  filterDate.value = "";
  renderBookings();
});

useCurrentLink.addEventListener("click", () => {
  const url = new URL("client.html", window.location.href);
  publicLink.value = url.toString();
  localStorage.setItem(STORAGE.publicLink, publicLink.value);
  renderQr();
  showInlineMessage(shareMessage, t("currentLinkAdded"));
});

copyLink.addEventListener("click", async () => {
  const value = publicLink.value.trim();
  if (!value) {
    showInlineMessage(shareMessage, t("addLinkFirst"), true);
    return;
  }

  try {
    await navigator.clipboard.writeText(value);
    showInlineMessage(shareMessage, t("copied"));
  } catch {
    showInlineMessage(shareMessage, t("manualCopy"), true);
  }
});

enableNotifications.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    showInlineMessage(scheduleMessage, t("notificationsUnavailable"), true);
    return;
  }

  const permission = await Notification.requestPermission();
  showInlineMessage(
    scheduleMessage,
    permission === "granted" ? t("notificationsEnabled") : t("notificationsUnavailable"),
    permission !== "granted",
  );
});

clearBookings.addEventListener("click", () => {
  if (!bookings.length) return;
  if (!window.confirm(t("clearConfirm"))) return;

  bookings = [];
  saveArray(STORAGE.bookings, bookings);
  renderAll();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = createBooking({
    clientName: clientName.value.trim(),
    clientPhone: clientPhone.value.trim(),
    serviceId: service.value,
    date: date.value,
    time: time.value,
    note: note.value.trim(),
    source: "client",
    status: "pending",
  });

  if (!result.ok) {
    showInlineMessage(message, result.message, true);
    return;
  }

  form.reset();
  date.value = todayIso;
  service.value = SERVICES[0].id;
  renderAll();
  showInlineMessage(message, `${t("bookingCreated")}: ${formatDate(result.booking.date)} ${result.booking.time}`);
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const request = {
    id: createId(),
    name: requestName.value.trim(),
    phone: requestPhone.value.trim(),
    type: requestType.value,
    message: requestMessage.value.trim(),
    status: "new",
    createdAt: new Date().toISOString(),
  };

  clientRequests.unshift(request);
  saveArray(STORAGE.requests, clientRequests);
  requestForm.reset();
  renderRequests();
  updateStats();
  notifyAdmin(`${t("adminNotice")}: ${request.name}`);
  showInlineMessage(requestStatus, t("requestSent"));
});

adminBookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = createBooking({
    clientName: adminClientName.value.trim(),
    clientPhone: adminClientPhone.value.trim(),
    serviceId: adminService.value,
    date: adminDate.value,
    time: adminTime.value,
    note: adminNote.value.trim(),
    source: "admin",
    status: "confirmed",
  });

  if (!result.ok) {
    showInlineMessage(adminBookingMessage, result.message, true);
    return;
  }

  adminBookingForm.reset();
  adminDate.value = todayIso;
  adminService.value = SERVICES[0].id;
  renderAll();
  showInlineMessage(adminBookingMessage, `${t("bookingCreated")}: ${formatDate(result.booking.date)} ${result.booking.time}`);
});

dayOffForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const existing = settings.daysOff.some((item) => item.date === dayOffDate.value);
  if (!existing) {
    settings.daysOff.push({
      id: createId(),
      date: dayOffDate.value,
      reason: dayOffReason.value.trim(),
    });
  }

  saveSettings();
  dayOffForm.reset();
  renderAll();
  showInlineMessage(scheduleMessage, t("dayOffAdded"));
});

document.querySelector("#save-schedule").addEventListener("click", () => {
  WEEK_DAYS.forEach((day) => {
    const enabled = document.querySelector(`[data-schedule-enabled="${day}"]`);
    const start = document.querySelector(`[data-schedule-start="${day}"]`);
    const end = document.querySelector(`[data-schedule-end="${day}"]`);
    settings.weeklyHours[day] = {
      enabled: enabled.checked,
      start: start.value,
      end: end.value,
    };
  });

  saveSettings();
  renderAll();
  showInlineMessage(scheduleMessage, t("scheduleSaved"));
});

bookingsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const booking = bookings.find((item) => item.id === button.dataset.id);
  if (!booking) return;

  if (button.dataset.action === "delete") {
    bookings = bookings.filter((item) => item.id !== booking.id);
  } else {
    booking.status = button.dataset.action;
  }

  saveArray(STORAGE.bookings, bookings);
  renderAll();
});

requestsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-request-action]");
  if (!button) return;

  const request = clientRequests.find((item) => item.id === button.dataset.id);
  if (!request) return;

  if (button.dataset.requestAction === "delete") {
    clientRequests = clientRequests.filter((item) => item.id !== request.id);
  } else {
    request.status = "done";
  }

  saveArray(STORAGE.requests, clientRequests);
  renderRequests();
  updateStats();
});

daysOffList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-day-off]");
  if (!button) return;

  settings.daysOff = settings.daysOff.filter((item) => item.id !== button.dataset.dayOff);
  saveSettings();
  renderAll();
});

function renderAll() {
  document.documentElement.lang = currentLang;
  translateStaticText();
  renderServices(service);
  renderServices(adminService);
  renderServiceDetails(service, serviceDetails);
  renderScheduleForm();
  renderDaysOff();
  renderTimeOptions(date, time, service.value);
  renderTimeOptions(adminDate, adminTime, adminService.value);
  renderBookings();
  renderRequests();
  restorePublicLink();
  renderRoute();
}

function translateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (value) node.textContent = value;
  });

  note.placeholder = placeholderText("note");
  requestMessage.placeholder = placeholderText("request");
  adminNote.placeholder = placeholderText("adminNote");
}

function renderServices(selectNode) {
  const selected = selectNode.value || SERVICES[0].id;
  selectNode.innerHTML = "";

  SERVICES.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${serviceName(item)} - ${item.duration} ${t("min")}`;
    selectNode.append(option);
  });

  selectNode.value = SERVICES.some((item) => item.id === selected) ? selected : SERVICES[0].id;
}

function renderServiceDetails(selectNode, target) {
  const item = serviceById(selectNode.value);
  target.innerHTML = `
    <div>
      <strong>${escapeHtml(t("duration"))}</strong>
      <span>${item.duration} ${escapeHtml(t("min"))}</span>
    </div>
    <div>
      <strong>${escapeHtml(t("price"))}</strong>
      <span>${item.price} ${escapeHtml(t("currency"))}</span>
    </div>
    <div>
      <strong>${escapeHtml(t("effect"))}</strong>
      <span>${escapeHtml(serviceDescription(item))}</span>
    </div>
  `;
}

function renderScheduleForm() {
  scheduleForm.innerHTML = "";

  WEEK_DAYS.forEach((day) => {
    const hours = settings.weeklyHours[day];
    const row = document.createElement("div");
    row.className = "schedule-row";
    row.innerHTML = `
      <label class="switch-line">
        <input type="checkbox" data-schedule-enabled="${day}" ${hours.enabled ? "checked" : ""} />
        <span>${escapeHtml(dayLabel(day))}</span>
      </label>
      <label>
        <span>${escapeHtml(t("open"))}</span>
        <input type="time" data-schedule-start="${day}" value="${hours.start}" />
      </label>
      <label>
        <span>${escapeHtml(t("closed"))}</span>
        <input type="time" data-schedule-end="${day}" value="${hours.end}" />
      </label>
    `;
    scheduleForm.append(row);
  });
}

function renderDaysOff() {
  const sorted = [...settings.daysOff].sort((a, b) => a.date.localeCompare(b.date));
  daysOffList.innerHTML = "";

  if (!sorted.length) {
    daysOffList.innerHTML = `<div class="empty-state mini">${escapeHtml(t("emptyDaysOff"))}</div>`;
    return;
  }

  sorted.forEach((item) => {
    const row = document.createElement("article");
    row.className = "mini-item";
    row.innerHTML = `
      <div>
        <strong>${formatDate(item.date)}</strong>
        <p>${escapeHtml(item.reason || t("closed"))}</p>
      </div>
      <button type="button" data-day-off="${item.id}">${escapeHtml(t("delete"))}</button>
    `;
    daysOffList.append(row);
  });
}

function renderTimeOptions(dateNode, timeNode, serviceId) {
  timeNode.innerHTML = "";

  if (!dateNode.value) {
    timeNode.add(new Option(t("chooseDate"), ""));
    return;
  }

  const slots = getAvailableSlots(dateNode.value, serviceId);
  if (!slots.length) {
    timeNode.add(new Option(t("noSlots"), ""));
    return;
  }

  slots.forEach((slot) => {
    timeNode.add(new Option(slot, slot));
  });
}

function renderBookings() {
  const visibleBookings = bookings
    .filter((booking) => !filterDate.value || booking.date === filterDate.value)
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

  bookingsList.innerHTML = "";

  if (!visibleBookings.length) {
    bookingsList.innerHTML = `<div class="empty-state">${escapeHtml(t("emptyBookings"))}</div>`;
  } else {
    visibleBookings.forEach((booking) => {
      const item = serviceById(booking.serviceId);
      const card = document.createElement("article");
      card.className = "appointment";
      card.innerHTML = `
        <div>
          <span class="time-pill">${formatDate(booking.date)} · ${booking.time}</span>
          <h3>${escapeHtml(booking.clientName)} · ${escapeHtml(serviceName(item))}</h3>
          <p>${escapeHtml(booking.clientPhone)}</p>
          <p>${item.duration} ${escapeHtml(t("min"))} · ${item.price} ${escapeHtml(t("currency"))}</p>
          ${booking.note ? `<p>${escapeHtml(booking.note)}</p>` : ""}
          <span class="status ${booking.status}">${escapeHtml(statusLabel(booking.status))}</span>
        </div>
        <div class="card-actions">
          <button type="button" data-action="confirmed" data-id="${booking.id}">${escapeHtml(t("confirm"))}</button>
          <button type="button" data-action="completed" data-id="${booking.id}">${escapeHtml(t("complete"))}</button>
          <button type="button" data-action="cancelled" data-id="${booking.id}">${escapeHtml(t("cancel"))}</button>
          <button type="button" data-action="delete" data-id="${booking.id}">${escapeHtml(t("delete"))}</button>
        </div>
      `;
      bookingsList.append(card);
    });
  }

  updateStats();
}

function renderRequests() {
  const openRequests = clientRequests.filter((item) => item.status !== "done");
  requestsList.innerHTML = "";
  requestBadge.textContent = openRequests.length;

  if (!clientRequests.length) {
    requestsList.innerHTML = `<div class="empty-state mini">${escapeHtml(t("emptyRequests"))}</div>`;
    return;
  }

  clientRequests.forEach((request) => {
    const item = document.createElement("article");
    item.className = `mini-item request-item ${request.status === "done" ? "done" : ""}`;
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(t("requestFrom"))} ${escapeHtml(request.name)}</strong>
        <p>${escapeHtml(request.phone)} · ${escapeHtml(request.type === "cancel" ? t("requestCancel") : t("requestChange"))}</p>
        <p>${escapeHtml(request.message)}</p>
        <small>${formatDateTime(request.createdAt)}</small>
      </div>
      <div class="mini-actions">
        <button type="button" data-request-action="done" data-id="${request.id}">${escapeHtml(t("complete"))}</button>
        <button type="button" data-request-action="delete" data-id="${request.id}">${escapeHtml(t("delete"))}</button>
      </div>
    `;
    requestsList.append(item);
  });
}

function updateStats() {
  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() + 7);

  todayCount.textContent = bookings.filter((booking) => booking.date === todayIso).length;
  weekCount.textContent = bookings.filter((booking) => {
    const bookingDate = new Date(`${booking.date}T00:00:00`);
    return bookingDate >= startOfDay(today) && bookingDate <= weekEnd;
  }).length;
  pendingCount.textContent = clientRequests.filter((request) => request.status !== "done").length;
  totalCount.textContent = bookings.length;
}

function restorePublicLink() {
  const storedLink = localStorage.getItem(STORAGE.publicLink);
  if (storedLink) {
    publicLink.value = storedLink;
  } else if (!publicLink.value) {
    const url = new URL("client.html", window.location.href);
    publicLink.value = url.toString();
  }

  renderQr();
}

function renderQr() {
  const value = publicLink.value.trim() || window.location.href;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=18&data=${encodeURIComponent(value)}`;
  qrCode.src = qrUrl;
  downloadQr.href = qrUrl;
}

function renderRoute() {
  const route = window.location.hash.replace("#", "") || "client";
  const activeRoute = views[route] && allowedRoutes.includes(route) ? route : allowedRoutes[0];

  if (route !== activeRoute) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${activeRoute}`);
  }

  Object.entries(views).forEach(([name, view]) => {
    view.hidden = name !== activeRoute;
  });

  navLinks.forEach((link) => {
    link.hidden = !allowedRoutes.includes(link.dataset.route);
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });

  const visibleNavLinks = [...navLinks].filter((link) => !link.hidden);
  const nav = document.querySelector(".nav-tabs");
  nav.hidden = visibleNavLinks.length <= 1;

  const brand = document.querySelector(".brand");
  brand.href = `#${allowedRoutes[0]}`;
}

function createBooking(input) {
  const item = serviceById(input.serviceId);

  if (!getAvailableSlots(input.date, input.serviceId).includes(input.time)) {
    return { ok: false, message: isWorkingDate(input.date) ? t("slotTaken") : t("unavailableDate") };
  }

  const booking = {
    id: createId(),
    clientName: input.clientName,
    clientPhone: input.clientPhone,
    serviceId: input.serviceId,
    duration: item.duration,
    date: input.date,
    time: input.time,
    note: input.note,
    source: input.source,
    status: input.status,
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  saveArray(STORAGE.bookings, bookings);
  notifyAdmin(`${t("bookingCreated")}: ${booking.clientName}, ${formatDate(booking.date)} ${booking.time}`);
  return { ok: true, booking };
}

function getAvailableSlots(dateValue, serviceId) {
  if (!isWorkingDate(dateValue)) return [];

  const item = serviceById(serviceId);
  const day = WEEK_DAYS[new Date(`${dateValue}T00:00:00`).getDay()];
  const hours = settings.weeklyHours[day];
  const start = toMinutes(hours.start);
  const end = toMinutes(hours.end);
  const latestStart = end - item.duration;
  const slots = [];

  for (let cursor = start; cursor <= latestStart; cursor += settings.slotStep) {
    const candidateEnd = cursor + item.duration;
    const hasOverlap = bookings.some((booking) => {
      if (booking.date !== dateValue || booking.status === "cancelled") return false;
      const bookingStart = toMinutes(booking.time);
      const bookingEnd = bookingStart + (booking.duration || serviceById(booking.serviceId).duration);
      return cursor < bookingEnd && candidateEnd > bookingStart;
    });

    if (!hasOverlap) slots.push(fromMinutes(cursor));
  }

  return slots;
}

function isWorkingDate(dateValue) {
  const dateObject = new Date(`${dateValue}T00:00:00`);
  const day = WEEK_DAYS[dateObject.getDay()];
  const hours = settings.weeklyHours[day];
  const closedDate = settings.daysOff.some((item) => item.date === dateValue);
  return Boolean(hours?.enabled && !closedDate);
}

function loadSettings() {
  const defaultSettings = {
    slotStep: 30,
    weeklyHours: {
      sun: { enabled: false, start: "10:00", end: "16:00" },
      mon: { enabled: true, start: "09:00", end: "18:00" },
      tue: { enabled: true, start: "09:00", end: "18:00" },
      wed: { enabled: true, start: "09:00", end: "18:00" },
      thu: { enabled: true, start: "09:00", end: "18:00" },
      fri: { enabled: true, start: "09:00", end: "18:00" },
      sat: { enabled: true, start: "10:00", end: "16:00" },
    },
    daysOff: [],
  };

  try {
    return { ...defaultSettings, ...(JSON.parse(localStorage.getItem(STORAGE.settings)) ?? {}) };
  } catch {
    return defaultSettings;
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE.settings, JSON.stringify(settings));
}

function loadArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  } catch {
    return [];
  }
}

function saveArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedDemoData() {
  if (!bookings.length) {
    bookings = [
      {
        id: createId(),
        clientName: "Олена Коваль",
        clientPhone: "+380671112233",
        serviceId: "lashes-2d",
        duration: 105,
        date: todayIso,
        time: "10:30",
        note: "Натуральний ефект",
        source: "client",
        status: "confirmed",
        createdAt: new Date().toISOString(),
      },
      {
        id: createId(),
        clientName: "Марія Шевченко",
        clientPhone: "+380501234567",
        serviceId: "lashes-4d",
        duration: 135,
        date: addDays(today, 1),
        time: "15:00",
        note: "Лисичий ефект",
        source: "admin",
        status: "pending",
        createdAt: new Date().toISOString(),
      },
    ];
    saveArray(STORAGE.bookings, bookings);
  }
}

function notifyAdmin(text) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Lash Atelier", { body: text, icon: "icon.svg" });
  }
}

function t(key) {
  return I18N[currentLang]?.[key] ?? I18N.uk[key] ?? key;
}

function placeholderText(type) {
  const map = {
    uk: {
      note: "Побажання щодо ефекту, вигину або майстра",
      request: "Наприклад: хочу перенести запис на п'ятницю після 15:00",
      adminNote: "Внутрішній коментар адміністратора",
    },
    pl: {
      note: "Preferencje efektu, skrętu lub stylistki",
      request: "Np. chcę przenieść wizytę na piątek po 15:00",
      adminNote: "Wewnętrzna notatka administratora",
    },
    nl: {
      note: "Voorkeur voor effect, krul of stylist",
      request: "Bijv. ik wil mijn afspraak verplaatsen naar vrijdag na 15:00",
      adminNote: "Interne beheerdersnotitie",
    },
    en: {
      note: "Preferred effect, curl, or stylist",
      request: "For example: I want to move my booking to Friday after 15:00",
      adminNote: "Internal admin note",
    },
  };
  return map[currentLang]?.[type] ?? map.uk[type];
}

function serviceById(id) {
  return SERVICES.find((item) => item.id === id) ?? SERVICES[0];
}

function serviceName(item) {
  return item.names[currentLang] ?? item.names.uk;
}

function serviceDescription(item) {
  return item.descriptions[currentLang] ?? item.descriptions.uk;
}

function dayLabel(day) {
  const labels = {
    uk: { sun: "Неділя", mon: "Понеділок", tue: "Вівторок", wed: "Середа", thu: "Четвер", fri: "П'ятниця", sat: "Субота" },
    pl: { sun: "Niedziela", mon: "Poniedziałek", tue: "Wtorek", wed: "Środa", thu: "Czwartek", fri: "Piątek", sat: "Sobota" },
    nl: { sun: "Zondag", mon: "Maandag", tue: "Dinsdag", wed: "Woensdag", thu: "Donderdag", fri: "Vrijdag", sat: "Zaterdag" },
    en: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" },
  };
  return labels[currentLang]?.[day] ?? labels.uk[day];
}

function statusLabel(status) {
  const map = {
    pending: t("statusPending"),
    confirmed: t("statusConfirmed"),
    completed: t("statusCompleted"),
    cancelled: t("statusCancelled"),
  };
  return map[status] ?? status;
}

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE.language);
  if (SUPPORTED_LANGS.includes(stored)) return stored;

  const browserLang = navigator.language.slice(0, 2);
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : "uk";
}

function getAppMode() {
  const params = new URLSearchParams(window.location.search);
  const requestedMode = params.get("mode");
  if (["client", "admin", "full"].includes(requestedMode)) return requestedMode;

  const route = window.location.hash.replace("#", "");
  if (route === "admin" || route === "share") return "admin";
  return "client";
}

function showInlineMessage(target, text, isError = false) {
  target.textContent = text;
  target.classList.toggle("error", isError);
}

function toMinutes(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function fromMinutes(value) {
  const hours = String(Math.floor(value / 60)).padStart(2, "0");
  const minutes = String(value % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function toIsoDate(value) {
  const offset = value.getTimezoneOffset() * 60000;
  return new Date(value.getTime() - offset).toISOString().slice(0, 10);
}

function addDays(value, days) {
  const dateValue = new Date(value);
  dateValue.setDate(dateValue.getDate() + days);
  return toIsoDate(dateValue);
}

function startOfDay(value) {
  return new Date(value.getFullYear(), value.getMonth(), value.getDate());
}

function formatDate(value) {
  return new Intl.DateTimeFormat(localeForLang(), {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat(localeForLang(), {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function localeForLang() {
  return { uk: "uk-UA", pl: "pl-PL", nl: "nl-NL", en: "en-US" }[currentLang] ?? "uk-UA";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (symbol) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[symbol];
  });
}

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
