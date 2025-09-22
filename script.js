const translations = {
    ru: {
        title: "ИП ТехПомощь",
        subtitle: "Монтаж и обслуживание систем безопасности и автоматизации",
        about_title: "О компании",
        about_text: "Мы занимаемся проектированием, монтажом и обслуживанием систем видеонаблюдения, контроля доступа, пожарной сигнализации и автоматизации зданий. Работаем по всему Казахстану.",
        services_title: "Наши услуги",
        service1: "Видеонаблюдение (IP, Hikvision, Dahua)",
        service2: "СКУД (домофоны, контроль доступа)",
        service3: "Пожарная сигнализация и автоматика (С2000, Болид и др.)",
        service4: "Слаботочные системы (сети, Wi-Fi, серверы, роутеры)",
        service5: "Умный дом (автоматизация света, отопления, насосов)",
        service6: "Обслуживание объектов (контракты, выезды)",
        advantages_title: "Преимущества",
        adv1: "Оперативность и надёжность",
        adv2: "Современные технологии",
        adv3: "Гарантия качества",
        adv4: "Индивидуальный подход",
        contacts_title: "Контакты",
        phone: "Телефон",
        call: "Позвонить"
    },
    en: {
        title: "IP TechPomosh",
        subtitle: "Installation and maintenance of security and automation systems",
        about_title: "About Us",
        about_text: "We specialize in the design, installation and maintenance of video surveillance, access control, fire alarm and building automation systems throughout Kazakhstan.",
        services_title: "Our Services",
        service1: "Video Surveillance (IP, Hikvision, Dahua)",
        service2: "Access Control (intercoms, entry systems)",
        service3: "Fire Alarm and Automation (S2000, Bolid, etc.)",
        service4: "Low-current systems (networks, Wi-Fi, servers, routers)",
        service5: "Smart Home (lighting, heating, pumps automation)",
        service6: "Facility Maintenance (contracts, visits)",
        advantages_title: "Advantages",
        adv1: "Speed and reliability",
        adv2: "Modern technologies",
        adv3: "Quality guarantee",
        adv4: "Individual approach",
        contacts_title: "Contacts",
        phone: "Phone",
        call: "Call"
    },
    kz: {
        title: "ЖК ТехПомощь",
        subtitle: "Қауіпсіздік және автоматтандыру жүйелерін орнату және қызмет көрсету",
        about_title: "Компания туралы",
        about_text: "Біз Қазақстан бойынша бейнебақылау, кіруді бақылау, өрт дабылы және ғимараттарды автоматтандыру жүйелерін жобалау, орнату және қызмет көрсетумен айналысамыз.",
        services_title: "Қызметтеріміз",
        service1: "Бейнебақылау (IP, Hikvision, Dahua)",
        service2: "СКУД (домофондар, кіруді бақылау)",
        service3: "Өрт дабылы және автоматика (С2000, Bolid және т.б.)",
        service4: "Әлсіз ток жүйелері (желілер, Wi-Fi, серверлер, роутерлер)",
        service5: "Ақылды үй (жарық, жылыту, сорғыларды автоматтандыру)",
        service6: "Нысандарды қызмет көрсету (шарттар, шығулар)",
        advantages_title: "Артықшылықтар",
        adv1: "Жылдамдық және сенімділік",
        adv2: "Заманауи технологиялар",
        adv3: "Сапа кепілдігі",
        adv4: "Жеке тәсіл",
        contacts_title: "Байланыс",
        phone: "Телефон",
        call: "Қоңырау шалу"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
