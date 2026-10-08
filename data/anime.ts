export type Anime = {
  slug: string;
  title: string;
  original: string;
  year: number;
  format: "Сериал" | "Фильм";
  genre: string;
  trailerUrl: string;
  description: string;
  cover: string;
};

export const animeList: Anime[] = [
  {
    slug: "attack-on-titan",
    title: "Атака титанов",
    original: "Attack on Titan",
    year: 2013,
    format: "Сериал",
    genre: "Экшен · Драма · Тёмное фэнтези",
    trailerUrl: "https://rutube.ru/video/dbe0f3bf1aab168ab4d7d207f7321f05/",
    description:
      "Люди укрываются за огромными стенами от титанов. Когда привычная защита рушится, Эрен и его друзья вступают в борьбу, которая меняет их представление о мире.",
    cover: "/anime/attack-on-titan.jpg",
  },
  {
    slug: "death-note",
    title: "Тетрадь смерти",
    original: "Death Note",
    year: 2006,
    format: "Сериал",
    genre: "Триллер · Детектив · Мистика",
    trailerUrl: "https://www.kinopoisk.ru/film/406148/video/163539/",
    description:
      "Школьник Лайт Ягами находит тетрадь, способную убивать людей, чьи имена в неё записаны. Его действия привлекают внимание загадочного детектива L, и между ними начинается интеллектуальное противостояние.",
    cover: "/anime/death-note.jpg",
  },
  {
    slug: "your-name",
    title: "Твоё имя",
    original: "Your Name",
    year: 2016,
    format: "Фильм",
    genre: "Романтика · Драма · Фэнтези",
    trailerUrl: "https://rutube.ru/video/0ae79d1eefaa1fce86a07b67d86576b6/",
    description:
      "Парень из Токио и девушка из провинциального городка неожиданно начинают меняться телами. Они пытаются найти друг друга и понять, что связывает их жизни.",
    cover: "/anime/your-name.jpeg",
  },
  {
    slug: "one-punch-man",
    title: "Ванпанчмен",
    original: "One Punch Man",
    year: 2015,
    format: "Сериал",
    genre: "Экшен · Комедия · Фантастика",
    trailerUrl: "https://kino.mail.ru/series_916719_vanpanchmen/trailers/",
    description:
      "Сайтама стал настолько сильным, что побеждает любого противника одним ударом. Вместе с киборгом Гэносом он вступает в мир профессиональных героев, пытаясь найти достойный вызов и не потерять интерес к своей необычной повседневности.",
    cover: "/anime/one-punch-man.jpg",
  },
  {
    slug: "mob-psycho-100",
    title: "Моб Психо 100",
    original: "Mob Psycho 100",
    year: 2016,
    format: "Сериал",
    genre: "Экшен · Комедия · Мистика",
    trailerUrl: "https://kino.mail.ru/series_921077_mob_psiho_100/trailers/",
    description:
      "Школьник Сигэо по прозвищу Моб обладает огромной психической силой, но хочет обычной жизни. Подрабатывая у самоуверенного наставника, он встречает духов и других экстрасенсов, учится общаться с людьми и понимать собственные эмоции.",
    cover: "/anime/mob-psycho-100.jpg",
  },
  {
    slug: "fullmetal-alchemist-brotherhood",
    title: "Стальной алхимик: Братство",
    original: "Fullmetal Alchemist: Brotherhood",
    year: 2009,
    format: "Сериал",
    genre: "Приключения · Фэнтези · Драма",
    trailerUrl:
      "https://kino.mail.ru/series_790962_stalnoi_alhimik_bratstvo/trailers/",
    description:
      "Братья Эдвард и Альфонс Элрики ищут способ исправить последствия опасного алхимического эксперимента. Их путешествие за философским камнем ведёт к тайнам государства и заставляет задуматься о цене знаний, ответственности и человеческой жизни.",
    cover: "/anime/fullmetal-alchemist-brotherhood.jpg",
  },
  {
    slug: "bleach",
    title: "Блич",
    original: "Bleach",
    year: 2004,
    format: "Сериал",
    genre: "Экшен · Мистика · Приключения",
    trailerUrl: "https://kino.mail.ru/series_778011_blich/trailers/",
    description:
      "Итиго Куросаки умеет видеть духов и неожиданно получает обязанности проводника душ. Защищая родных от опасных существ, он знакомится с устройством потустороннего мира и оказывается втянут в конфликты, выходящие далеко за пределы его города.",
    cover: "/anime/bleach.jpg",
  },
  {
    slug: "sword-art-online",
    title: "Мастера меча онлайн",
    original: "Sword Art Online",
    year: 2012,
    format: "Сериал",
    genre: "Экшен · Приключения · Фантастика",
    trailerUrl:
      "https://kino.mail.ru/series_788328_mastera_mecha_onlain/trailers/",
    description:
      "Игроки новой виртуальной онлайн-игры обнаруживают, что не могут выйти из неё. Кирито пытается разобраться в правилах смертельно опасного мира, встретить надёжных союзников и найти путь домой, сохраняя человечность среди цифровых испытаний.",
    cover: "/anime/sword-art-online.jpg",
  },
  {
    slug: "re-zero",
    title: "Re:Zero — жизнь с нуля в другом мире",
    original: "Re:Zero",
    year: 2016,
    format: "Сериал",
    genre: "Фэнтези · Драма · Приключения",
    trailerUrl:
      "https://kino.mail.ru/series_936018_re_zero_zhizn_s_nulya_v_drugom_mire/trailers/",
    description:
      "Субару внезапно переносится в незнакомый мир и обнаруживает способность возвращаться к определённому моменту после гибели. Он пытается помочь новым знакомым, разобраться в происходящем и найти решения там, где одной смелости недостаточно.",
    cover: "/anime/re-zero.jpg",
  },
  {
    slug: "slime",
    title: "О моём перерождении в слизь",
    original: "That Time I Got Reincarnated as a Slime",
    year: 2018,
    format: "Сериал",
    genre: "Фэнтези · Приключения · Комедия",
    trailerUrl:
      "https://kino.mail.ru/series_936024_o_moem_pererozhdenii_v_sliz/trailers/",
    description:
      "После перерождения в другом мире обычный человек становится слизью по имени Римуру. Необычные способности помогают ему знакомиться с разными народами, находить союзников и строить место, где даже бывшие противники смогут жить вместе.",
    cover: "/anime/slime.jpg",
  },
  {
    slug: "shield-hero",
    title: "Восхождение героя щита",
    original: "The Rising of the Shield Hero",
    year: 2019,
    format: "Сериал",
    genre: "Фэнтези · Экшен · Приключения",
    trailerUrl:
      "https://kino.mail.ru/series_936047_voshozhdenie_geroya_schita_/trailers/",
    description:
      "Наофуми призывают в другой мир в качестве одного из четырёх героев. Получив щит вместо оружия, он сталкивается с недоверием и тяжёлыми испытаниями. Новые спутники помогают ему найти собственный способ бороться и защищать людей.",
    cover: "/anime/shield-hero.jpg",
  },
  {
    slug: "konosuba",
    title: "Этот замечательный мир!",
    original: "KonoSuba",
    year: 2016,
    format: "Сериал",
    genre: "Комедия · Фэнтези · Приключения",
    trailerUrl:
      "https://kino.mail.ru/series_914306_boginya_blagoslovlyaet_etot_prekrasnii_mir/trailers/",
    description:
      "Кадзума попадает в фэнтезийный мир и собирает отряд для приключений. Богиня, волшебница и рыцарь оказываются куда проблемнее обычных спутников. Вместо героических побед команду часто ждут долги, нелепые задания и комичные неудачи.",
    cover: "/anime/konosuba.jpg",
  },
  {
    slug: "delicious-in-dungeon",
    title: "Подземелье вкусностей",
    original: "Delicious in Dungeon",
    year: 2024,
    format: "Сериал",
    genre: "Фэнтези · Приключения · Комедия",
    trailerUrl:
      "https://kino.mail.ru/series_945622_podzemele_vkusnostei/trailers/",
    description:
      "Отряд Лайоса возвращается в подземелье, чтобы спасти товарища, но денег на припасы почти нет. Выход находится в необычной кухне: героям предстоит готовить блюда из монстров и заново открывать устройство мира, который они привыкли считать враждебным.",
    cover: "/anime/delicious-in-dungeon.jpg",
  },
  {
    slug: "blue-lock",
    title: "Синяя тюрьма: Блю Лок",
    original: "Blue Lock",
    year: 2022,
    format: "Сериал",
    genre: "Спорт · Драма · Экшен",
    trailerUrl: "https://rutube.ru/video/c6d2f312b80c4ec5e4e4942afcfae1c8/",
    description:
      "Молодых нападающих собирают в закрытом тренировочном центре, чтобы создать нового лидера японского футбола. Исаги должен научиться замечать возможности на поле, доверять собственным решениям и выдерживать жёсткую конкуренцию с другими талантливыми игроками.",
    cover: "/anime/blue-lock.jpg",
  },
  {
    slug: "kuroko-basketball",
    title: "Баскетбол Куроко",
    original: "Kuroko's Basketball",
    year: 2012,
    format: "Сериал",
    genre: "Спорт · Комедия · Драма",
    trailerUrl: "https://kino.mail.ru/series_811710_basketbol_kuroko/trailers/",
    description:
      "Незаметный Куроко и сильный новичок Кагами объединяются в школьной баскетбольной команде. Необычный стиль передач превращает скромного игрока в важного союзника, а встречи с бывшими товарищами поднимают вопрос о командной игре и личном таланте.",
    cover: "/anime/kuroko-basketball.jpg",
  },
  {
    slug: "horimiya",
    title: "Хоримия",
    original: "Horimiya",
    year: 2021,
    format: "Сериал",
    genre: "Романтика · Повседневность · Комедия",
    trailerUrl: "https://kino.mail.ru/series_936155_horimiya/trailers/",
    description:
      "Популярная Хори и тихий Миямура случайно узнают друг друга с неожиданной стороны. Общение за пределами школы помогает им сблизиться и увидеть, сколько важных черт скрывается за привычными образами одноклассников.",
    cover: "/anime/horimiya.jpg",
  },
  {
    slug: "your-lie-in-april",
    title: "Твоя апрельская ложь",
    original: "Your Lie in April",
    year: 2014,
    format: "Сериал",
    genre: "Музыка · Драма · Романтика",
    trailerUrl:
      "https://kino.mail.ru/series_936113_tvoya_aprelskaya_lozh/trailers/",
    description:
      "Юный пианист Косэй перестал выступать после тяжёлых событий в семье. Знакомство с энергичной скрипачкой Каори возвращает его в мир музыки. Репетиции и конкурсы становятся для него поиском собственного звучания и смелости жить дальше.",
    cover: "/anime/your-lie-in-april.jpg",
  },
  {
    slug: "violet-evergarden",
    title: "Вайолет Эвергарден",
    original: "Violet Evergarden",
    year: 2018,
    format: "Сериал",
    genre: "Драма · Повседневность · История",
    trailerUrl:
      "https://kino.mail.ru/series_921172_vaiolet_evergarden/trailers/",
    description:
      "После войны Вайолет начинает писать письма за тех, кто не может выразить свои чувства. Каждая встреча помогает ей лучше понимать любовь, утрату и надежду, одновременно приближая к ответам на вопросы о собственном прошлом.",
    cover: "/anime/violet-evergarden.jpg",
  },
  {
    slug: "a-silent-voice",
    title: "Форма голоса",
    original: "A Silent Voice",
    year: 2016,
    format: "Фильм",
    genre: "Драма · Повседневность",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/918219_forma_golosa/trailers/",
    description:
      "Сёя пытается исправить последствия жестокого поведения в школьные годы и вновь встречает глухую девушку Сёко. Их общение становится трудным поиском доверия, прощения и способа услышать человека, которого когда-то не хотели понимать.",
    cover: "/anime/a-silent-voice.jpg",
  },
  {
    slug: "suzume",
    title: "Судзумэ, закрывающая двери",
    original: "Suzume",
    year: 2022,
    format: "Фильм",
    genre: "Приключения · Фэнтези · Драма",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/933369_sudzume_zakrivaet_dveri/trailers/",
    description:
      "Судзумэ встречает странника, который закрывает опасные двери в заброшенных местах. Неожиданное происшествие отправляет её в путешествие по Японии. За фантастической задачей постепенно проступают воспоминания, утраты и желание защитить близких.",
    cover: "/anime/suzume.jpg",
  },
  {
    slug: "totoro",
    title: "Мой сосед Тоторо",
    original: "My Neighbor Totoro",
    year: 1988,
    format: "Фильм",
    genre: "Фэнтези · Повседневность · Приключения",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/425512_moj_sosed_totoro/trailers/",
    description:
      "Сёстры Сацуки и Мэй переезжают с отцом в деревенский дом и исследуют его окрестности. Знакомство с добрым лесным существом Тоторо превращает обычные дни в тихое приключение о семье, воображении и маленьких чудесах рядом.",
    cover: "/anime/totoro.jpg",
  },
  {
    slug: "howls-moving-castle",
    title: "Ходячий замок",
    original: "Howl's Moving Castle",
    year: 2004,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Романтика",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/319835_hodjachij_zamok/trailers/",
    description:
      "После встречи с ведьмой юная Софи оказывается под необычным проклятием и покидает дом. В странствующем замке волшебника Хаула она находит новых знакомых, а забота о них постепенно придаёт ей смелость менять собственную судьбу.",
    cover: "/anime/howls-moving-castle.jpg",
  },
  {
    slug: "made-in-abyss",
    title: "Созданный в Бездне",
    original: "Made in Abyss",
    year: 2017,
    format: "Сериал",
    genre: "Приключения · Фэнтези · Драма",
    trailerUrl:
      "https://kino.mail.ru/series_917880_sozdannii_v_bezdne/trailers/",
    description:
      "Рико мечтает исследовать огромную Бездну, скрывающую древние артефакты и неизвестных существ. Вместе с загадочным мальчиком-роботом она отправляется вниз. Удивительная красота этого мира соседствует с опасностями, которые становятся серьёзнее с каждым шагом.",
    cover: "/anime/made-in-abyss.jpg",
  },
  {
    slug: "oshi-no-ko",
    title: "Звёздное дитя",
    original: "Oshi no Ko",
    year: 2023,
    format: "Сериал",
    genre: "Драма · Детектив · Музыка",
    trailerUrl: "https://rutube.ru/video/78f8ca39e840d4cabb0bfdf1dd0554aa/",
    description:
      "История молодой певицы Ай и связанных с ней людей открывает закулисье индустрии развлечений. За яркими выступлениями и популярностью скрываются сложные отношения, профессиональные амбиции и вопросы о том, где заканчивается сценический образ.",
    cover: "/anime/oshi-no-ko.jpg",
  },
  {
    slug: "cyberpunk-edgerunners",
    title: "Киберпанк: Бегущие по краю",
    original: "Cyberpunk: Edgerunners",
    year: 2022,
    format: "Сериал",
    genre: "Фантастика · Экшен · Драма",
    trailerUrl:
      "https://kino.mail.ru/series_935132_kiberpank_beguschie_po_krayu/trailers/",
    description:
      "Дэвид пытается выжить в Найт-Сити, где технологии и большие деньги определяют положение человека. Неожиданная находка сближает его с командой наёмников. Быстрый путь к силе требует решений, цену которых трудно оценить заранее.",
    cover: "/anime/cyberpunk-edgerunners.jpg",
  },
  {
    slug: "jujutsu-kaisen",
    title: "Магическая битва",
    original: "Jujutsu Kaisen",
    year: 2020,
    format: "Сериал",
    genre: "Экшен · Мистика · Фэнтези",
    trailerUrl:
      "https://kino.mail.ru/series_939115_magicheskaya_bitva/trailers/",
    description:
      "Юдзи Итадори оказывается втянут в мир проклятий, рождающихся из человеческих страхов. В школе магов он учится управлять опасной силой, защищать людей и работать в команде, где у каждого свои причины вступать в бой.",
    cover: "/anime/jujutsu-kaisen.jpg",
  },
  {
    slug: "spy-family",
    title: "Семья шпиона",
    original: "Spy x Family",
    year: 2022,
    format: "Сериал",
    genre: "Комедия · Экшен · Повседневность",
    trailerUrl: "https://kino.mail.ru/series_941308_semya_shpiona/trailers/",
    description:
      "Шпион Лойд Форджер должен создать семью ради секретной операции. Его приёмная дочь умеет читать мысли, а жена скрывает собственную опасную профессию. Сохранять прикрытие оказывается особенно трудно, когда все хотят обычного семейного счастья.",
    cover: "/anime/spy-family.jpg",
  },
  {
    slug: "frieren",
    title: "Провожающая в последний путь Фрирен",
    original: "Frieren: Beyond Journey's End",
    year: 2023,
    format: "Сериал",
    genre: "Приключения · Фэнтези · Драма",
    trailerUrl:
      "https://kino.mail.ru/series_943081_provozhayuschaya_v_poslednii_put_friren/trailers/",
    description:
      "После победы над королём демонов эльфийская волшебница Фрирен продолжает долгую жизнь. Новое путешествие заставляет её внимательнее относиться к коротким человеческим судьбам, вспоминать старых друзей и учиться понимать тех, кто идёт рядом.",
    cover: "/anime/frieren.jpg",
  },
  {
    slug: "apothecary-diaries",
    title: "Монолог фармацевта",
    original: "The Apothecary Diaries",
    year: 2023,
    format: "Сериал",
    genre: "Детектив · Драма · История",
    trailerUrl:
      "https://kino.mail.ru/series_943034_monolog_farmatsevta/trailers/",
    description:
      "Маомао, знакомая с лекарствами и ядами, попадает на службу в императорский дворец. Наблюдательность помогает ей разбираться в загадочных происшествиях, но каждое расследование приближает её к тайнам придворной жизни и влиятельным людям.",
    cover: "/anime/apothecary-diaries.jpg",
  },
  {
    slug: "kaiju-no-8",
    title: "Кайдзю № 8",
    original: "Kaiju No. 8",
    year: 2024,
    format: "Сериал",
    genre: "Экшен · Фантастика · Приключения",
    trailerUrl: "https://kino.mail.ru/series_941307_kaidzyu_8/trailers/",
    description:
      "Кафка Хибино убирает последствия нападений гигантских чудовищ и мечтает присоединиться к силам обороны. Необычное происшествие даёт ему пугающую способность, которую приходится скрывать, пока он пытается исполнить давнее обещание и защитить людей.",
    cover: "/anime/kaiju-no-8.jpg",
  },
  {
    slug: "vinland-saga",
    title: "Сага о Винланде",
    original: "Vinland Saga",
    year: 2019,
    format: "Сериал",
    genre: "Экшен · Драма · История",
    trailerUrl: "https://rutube.ru/video/f3111b2105aba56ddea422926c920935/",
    description:
      "В эпоху викингов юный Торфинн оказывается среди воинов, живущих походами и сражениями. Его путь проходит через суровые земли и встречи с людьми, чьи представления о силе, свободе и настоящем воине заметно отличаются.",
    cover: "/anime/vinland-saga.jpg",
  },
  {
    slug: "dr-stone",
    title: "Доктор Стоун",
    original: "Dr. Stone",
    year: 2019,
    format: "Сериал",
    genre: "Приключения · Фантастика · Комедия",
    trailerUrl: "https://kino.mail.ru/series_943005_doktor_stoun/trailers/",
    description:
      "Таинственная вспышка превращает человечество в камень. Спустя тысячелетия школьник Сэнку просыпается среди дикой природы и решает восстановить цивилизацию с помощью науки. Каждый инструмент и изобретение становятся шагом к возвращению привычного мира.",
    cover: "/anime/dr-stone.jpg",
  },
  {
    slug: "my-hero-academia",
    title: "Моя геройская академия",
    original: "My Hero Academia",
    year: 2016,
    format: "Сериал",
    genre: "Экшен · Фантастика · Приключения",
    trailerUrl:
      "https://kino.mail.ru/series_914607_moya_geroiskaya_akademiya/trailers/",
    description:
      "Идзуку Мидория мечтает стать героем в обществе, где большинство людей обладает сверхспособностями. Неожиданная встреча открывает ему путь в престижную академию, где тренировки, дружба и настоящие угрозы проверяют готовность помогать другим.",
    cover: "/anime/my-hero-academia.jpg",
  },
  {
    slug: "solo-leveling",
    title: "Поднятие уровня в одиночку",
    original: "Solo Leveling",
    year: 2024,
    format: "Сериал",
    genre: "Экшен · Приключения · Фэнтези",
    trailerUrl: "https://rutube.ru/video/dbe61af869e062cb50d17f76b47c2352/",
    description:
      "Слабый охотник Сон Джин-у зарабатывает на жизнь опасными вылазками в подземелья. После необычного испытания он получает возможность развивать свои способности, словно персонаж игры, и начинает путь к силе, о которой прежде не мог мечтать.",
    cover: "/anime/solo-leveling.jpg",
  },
  {
    slug: "chainsaw-man",
    title: "Человек-бензопила",
    original: "Chainsaw Man",
    year: 2022,
    format: "Сериал",
    genre: "Экшен · Тёмное фэнтези · Драма",
    trailerUrl: "https://rutube.ru/video/5fdbe5f496265acf02ccb8c748a6bb41/",
    description:
      "Дэндзи живёт в долгах и вместе с маленьким демоном Почитой выполняет опасную работу. Неожиданный поворот даёт ему силу человека-бензопилы и шанс на новую жизнь, но простые мечты сталкиваются с жестокими правилами охотников на демонов.",
    cover: "/anime/chainsaw-man.jpg",
  },
  {
    slug: "dandadan",
    title: "Дандадан",
    original: "Dandadan",
    year: 2024,
    format: "Сериал",
    genre: "Экшен · Комедия · Мистика",
    trailerUrl: "https://rutube.ru/video/7e829efd78195bf5932a301c7cd4e759/",
    description:
      "Момо верит в призраков, а Окарун — в пришельцев. Решив проверить убеждения друг друга, школьники сталкиваются сразу с двумя невероятными мирами. Теперь им предстоит справляться со странными способностями, опасностями и собственными чувствами.",
    cover: "/anime/dandadan.jpg",
  },
  {
    slug: "hells-paradise",
    title: "Адский рай",
    original: "Hell's Paradise",
    year: 2023,
    format: "Сериал",
    genre: "Экшен · Тёмное фэнтези · Приключения",
    trailerUrl: "https://rutube.ru/video/3c31982b17794abbb5503f1a39ecb4cf/",
    description:
      "Осуждённому ниндзя Габимару предлагают шанс на помилование: найти эликсир бессмертия на загадочном острове. Вместе с надзирательницей он вступает в мир прекрасной и смертельно опасной природы, где за каждым открытием скрывается новое испытание.",
    cover: "/anime/hells-paradise.jpg",
  },
  {
    slug: "mushoku-tensei",
    title: "Реинкарнация безработного",
    original: "Mushoku Tensei",
    year: 2021,
    format: "Сериал",
    genre: "Фэнтези · Приключения · Драма",
    trailerUrl: "https://rutube.ru/video/44dd547b49f1196f1bc8351c43169f0d/",
    description:
      "Получив вторую жизнь в мире магии, Рудеус решает использовать новый шанс с большей ответственностью. Учёба, путешествия и встречи с необычными людьми помогают ему расти, хотя прежние привычки и страхи не исчезают сами собой.",
    cover: "/anime/mushoku-tensei.jpg",
  },
  {
    slug: "eminence-in-shadow",
    title: "Восхождение в тени",
    original: "The Eminence in Shadow",
    year: 2022,
    format: "Сериал",
    genre: "Экшен · Фэнтези · Комедия",
    trailerUrl: "https://rutube.ru/video/b3dbd42c59dafc1c88f6b338f7282439/",
    description:
      "Сид мечтает быть таинственным властителем, действующим за кулисами больших событий. После перерождения он создаёт тайную организацию и придумывает ей врагов, не подозревая, насколько близко его фантазии подходят к реальным опасностям нового мира.",
    cover: "/anime/eminence-in-shadow.jpg",
  },
  {
    slug: "spirited-away",
    title: "Унесённые призраками",
    original: "Spirited Away",
    year: 2001,
    format: "Фильм",
    genre: "Приключения · Фэнтези",
    trailerUrl: "https://rutube.ru/video/08d98de452ad9af2a69dcebbd793808c/",
    description:
      "Тихиро вместе с родителями оказывается в загадочном мире духов. Чтобы найти путь домой, девочке приходится работать в необычной купальне, заводить друзей и учиться смелости среди правил, которые совсем не похожи на человеческие.",
    cover: "/anime/spirited-away.jpg",
  },
  {
    slug: "princess-mononoke",
    title: "Принцесса Мононоке",
    original: "Princess Mononoke",
    year: 1997,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Драма",
    trailerUrl: "https://rutube.ru/video/f8106443a1b11afc208f7445e113b9cb/",
    description:
      "Аситака отправляется искать лекарство от проклятия и оказывается между жителями промышленного поселения и духами леса. Встреча с девушкой Сан заставляет его искать путь к взаимопониманию там, где каждый уверен в своей правоте.",
    cover: "/anime/princess-mononoke.jpg",
  },
  {
    slug: "promised-neverland",
    title: "Обещанный Неверленд",
    original: "The Promised Neverland",
    year: 2019,
    format: "Сериал",
    genre: "Триллер · Детектив · Фэнтези",
    trailerUrl: "https://rutube.ru/video/330aa912bba5012ece77569b1f5397a9/",
    description:
      "Эмма, Норман и Рэй счастливо живут в приюте среди друзей. Неожиданное открытие заставляет их усомниться в привычном порядке. Теперь наблюдательность, взаимное доверие и умение планировать становятся важнее любого детского беззаботного дня.",
    cover: "/anime/promised-neverland.jpg",
  },
  {
    slug: "hunter-x-hunter",
    title: "Охотник × Охотник",
    original: "Hunter x Hunter",
    year: 2011,
    format: "Сериал",
    genre: "Экшен · Приключения · Фэнтези",
    trailerUrl:
      "https://kino.mail.ru/series_939120_ohotnik_h_ohotnik/trailers/",
    description:
      "Гон отправляется на экзамен охотников, надеясь больше узнать об отце. Испытания знакомят его с необычными друзьями и открывают мир редких профессий, опасных противников и способностей, освоить которые можно только упорным трудом.",
    cover: "/anime/hunter-x-hunter.jpg",
  },
  {
    slug: "code-geass",
    title: "Код Гиас",
    original: "Code Geass",
    year: 2006,
    format: "Сериал",
    genre: "Фантастика · Экшен · Драма",
    trailerUrl:
      "https://kino.mail.ru/series_788234_kod_gias_vosstavshii_lelush/trailers/",
    description:
      "Лелуш живёт на территории, захваченной могущественной империей, и получает способность отдавать неотразимые приказы. Используя интеллект и новое оружие, он начинает опасную борьбу, в которой стратегические победы тесно связаны с личной ответственностью.",
    cover: "/anime/code-geass.jpg",
  },
  {
    slug: "erased",
    title: "Город, в котором меня нет",
    original: "Erased",
    year: 2016,
    format: "Сериал",
    genre: "Детектив · Драма · Фантастика",
    trailerUrl:
      "https://kino.mail.ru/series_908415_gorod_v_kotorom_menya_net/trailers/",
    description:
      "Сатору иногда оказывается отброшен назад во времени перед опасным событием. Однажды эта способность возвращает его в школьные годы. Он пытается понять связь между прошлым и настоящим и помочь людям, которых раньше не сумел защитить.",
    cover: "/anime/erased.jpg",
  },
  {
    slug: "kikis-delivery-service",
    title: "Ведьмина служба доставки",
    original: "Kiki's Delivery Service",
    year: 1989,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Семейное",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/403750_vedmina_sluzhba_dostavki/trailers/",
    description:
      "Юная ведьма Кики переезжает в приморский город вместе со своим котом. Умение летать на метле помогает ей открыть службу доставки, а новые знакомства учат самостоятельности и вере в собственные силы.",
    cover: "/anime/kikis-delivery-service.jpg",
  },
  {
    slug: "ponyo",
    title: "Рыбка Поньо на утёсе",
    original: "Ponyo",
    year: 2008,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Семейное",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/498915_rybka_pono_na_utese/trailers/",
    description:
      "Маленький Сосукэ встречает необычную рыбку и даёт ей имя Поньо. Мечтая стать человеком, она покидает подводный дом, и их дружба оказывается связана с чудесами океана.",
    cover: "/anime/ponyo.jpg",
  },
  {
    slug: "arrietty",
    title: "Ариэтти из страны лилипутов",
    original: "The Secret World of Arrietty",
    year: 2010,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Семейное",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/620123_arietti_iz_strany_liliputov/trailers/",
    description:
      "Под полом обычного дома живёт семья крошечных людей. Когда Ариэтти знакомится с мальчиком из большого мира, ей приходится выбирать между любопытством и правилами, которые защищают её близких.",
    cover: "/anime/arrietty.jpg",
  },
  {
    slug: "the-wind-rises",
    title: "Ветер крепчает",
    original: "The Wind Rises",
    year: 2013,
    format: "Фильм",
    genre: "Драма · Историческое · Романтика",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/785505_veter_krepchaet/trailers/",
    description:
      "Дзиро с детства мечтает создавать самолёты. На фоне перемен в Японии он ищет своё место в авиации, встречает любовь и размышляет о том, что значит воплощать красивую мечту в непростое время.",
    cover: "/anime/the-wind-rises.jpg",
  },
  {
    slug: "when-marnie-was-there",
    title: "Воспоминания о Марни",
    original: "When Marnie Was There",
    year: 2014,
    format: "Фильм",
    genre: "Драма · Мистика · Повседневность",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/842253_vospominaniya_marni/trailers/",
    description:
      "Замкнутая Анна приезжает в небольшой приморский город. В старом особняке она знакомится с Марни, и эта неожиданная дружба помогает ей разобраться в своих чувствах и тайнах прошлого.",
    cover: "/anime/when-marnie-was-there.jpg",
  },
  {
    slug: "wolf-children",
    title: "Волчьи дети Амэ и Юки",
    original: "Wolf Children",
    year: 2012,
    format: "Фильм",
    genre: "Драма · Фэнтези · Семейное",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/758507_volchi_deti_ame_i_juki/trailers/",
    description:
      "Хана растит двоих детей, унаследовавших способность превращаться в волков. Переезд в деревню даёт семье возможность начать заново, а детям — постепенно понять, какой путь они хотят выбрать.",
    cover: "/anime/wolf-children.jpg",
  },
  {
    slug: "the-boy-and-the-beast",
    title: "Ученик чудовища",
    original: "The Boy and the Beast",
    year: 2015,
    format: "Фильм",
    genre: "Экшен · Фэнтези · Приключения",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/920199_ditya_chudovischa/trailers/",
    description:
      "Одинокий мальчик попадает в мир зверей и становится учеником вспыльчивого воина Куматэцу. Их обучение полно ссор и открытий, но постепенно наставник и ученик находят друг в друге настоящую семью.",
    cover: "/anime/the-boy-and-the-beast.jpg",
  },
  {
    slug: "redline",
    title: "Красная черта",
    original: "Redline",
    year: 2009,
    format: "Фильм",
    genre: "Экшен · Фантастика · Спорт",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/654167_krasnaja_cherta/trailers/",
    description:
      "Гонщик Джей Пи получает шанс выступить в самой опасной гонке галактики. Среди необычных соперников и невероятных машин он рассчитывает на собственное мастерство, упрямство и любовь к скорости.",
    cover: "/anime/redline.jpg",
  },
  {
    slug: "patema-inverted",
    title: "Патэма наоборот",
    original: "Patema Inverted",
    year: 2013,
    format: "Фильм",
    genre: "Фантастика · Приключения · Романтика",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/815964_patema_naoborot/trailers/",
    description:
      "Патэма покидает подземный мир и встречает юношу, для которого сила тяжести действует в противоположную сторону. Чтобы понять устройство своих миров, им придётся научиться доверять друг другу.",
    cover: "/anime/patema-inverted.jpg",
  },
  {
    slug: "belle",
    title: "Красавица и дракон",
    original: "Belle",
    year: 2021,
    format: "Фильм",
    genre: "Фантастика · Драма · Музыка",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/930020_drakon_i_printsessa_s_vesnushkami/trailers/",
    description:
      "Стеснительная Судзу становится популярной певицей в огромном виртуальном мире. За образом Белль она пытается вновь обрести собственный голос и понять, кто скрывается за пугающим аватаром Дракона.",
    cover: "/anime/belle.jpg",
  },
  {
    slug: "mirai",
    title: "Мирай из будущего",
    original: "Mirai",
    year: 2018,
    format: "Фильм",
    genre: "Фэнтези · Повседневность · Семейное",
    trailerUrl: "https://kino.mail.ru/cinema/movies/916873_buduschee/trailers/",
    description:
      "После рождения сестры маленький Кун ревнует родителей и чувствует себя забытым. Необычные встречи в саду открывают ему историю семьи и помогают по-новому взглянуть на близких.",
    cover: "/anime/mirai.jpg",
  },
  {
    slug: "princess-kaguya",
    title: "Сказание о принцессе Кагуя",
    original: "The Tale of the Princess Kaguya",
    year: 2013,
    format: "Фильм",
    genre: "Фэнтези · Драма · Историческое",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/869023_skazanie_o_printsesse_kaguya/trailers/",
    description:
      "Старик находит в бамбуке крошечную девочку и вместе с женой воспитывает её как дочь. Кагуя быстро взрослеет, а жизнь среди знати ставит перед ней вопросы о свободе, счастье и собственном предназначении.",
    cover: "/anime/princess-kaguya.jpg",
  },
  {
    slug: "mary-and-the-witchs-flower",
    title: "Мэри и ведьмин цветок",
    original: "Mary and the Witch's Flower",
    year: 2017,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Семейное",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/917506_meari_i_tsvetok_vedmi/trailers/",
    description:
      "Мэри находит необычный цветок и старую метлу, которые приводят её в школу магии. За блеском волшебного мира скрываются опасные секреты, и девочке предстоит проявить смелость без помощи чудес.",
    cover: "/anime/mary-and-the-witchs-flower.jpg",
  },
  {
    slug: "castle-in-the-sky",
    title: "Небесный замок Лапута",
    original: "Castle in the Sky",
    year: 1986,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Семейное",
    trailerUrl: "https://www.kinopoisk.ru/film/1846/video/type/0/",
    description:
      "Сита хранит камень, за которым охотятся пираты и правительственные агенты. Вместе с мальчиком Падзу она отправляется на поиски легендарного города, скрытого среди облаков.",
    cover: "/anime/castle-in-the-sky.jpg",
  },
  {
    slug: "the-girl-who-leapt-through-time",
    title: "Девочка, покорившая время",
    original: "The Girl Who Leapt Through Time",
    year: 2006,
    format: "Фильм",
    genre: "Фантастика · Романтика · Драма",
    trailerUrl: "https://rutube.ru/video/4fa64fcc2cd79c7be6dd73870017517a/",
    description:
      "Макото обнаруживает, что умеет перескакивать во времени. Сначала она исправляет мелкие неприятности и продлевает весёлые моменты, но вскоре замечает, как её решения влияют на друзей и отношения.",
    cover: "/anime/the-girl-who-leapt-through-time.jpg",
  },
  {
    slug: "summer-wars",
    title: "Летние войны",
    original: "Summer Wars",
    year: 2009,
    format: "Фильм",
    genre: "Фантастика · Комедия · Семейное",
    trailerUrl: "https://rutube.ru/video/f059a642b09ededd0e7aaf83488af4d0/",
    description:
      "Школьник Кэндзи приезжает на семейный праздник своей знакомой и получает загадочное сообщение. Пока большая семья разбирается в собственных делах, в виртуальном мире начинается кризис, затрагивающий реальную жизнь.",
    cover: "/anime/summer-wars.jpg",
  },
  {
    slug: "the-boy-and-the-heron",
    title: "Мальчик и птица",
    original: "The Boy and the Heron",
    year: 2023,
    format: "Фильм",
    genre: "Фэнтези · Драма · Приключения",
    trailerUrl: "https://rutube.ru/video/6979d32f356a2d270f0ba063a7a6b827/",
    description:
      "После переезда Махито замечает странную цаплю и заброшенную башню возле нового дома. Поиски ответов приводят его в необычный мир, где переплетаются память, фантазия и семейные связи.",
    cover: "/anime/the-boy-and-the-heron.jpg",
  },
  {
    slug: "the-cat-returns",
    title: "Возвращение кота",
    original: "The Cat Returns",
    year: 2002,
    format: "Фильм",
    genre: "Фэнтези · Приключения · Комедия",
    trailerUrl:
      "https://kino.mail.ru/cinema/movies/720742_vozvraschenie_kota/trailers/",
    description:
      "Школьница Хару спасает кота и неожиданно получает приглашение в кошачье королевство. Благодарность его обитателей оборачивается удивительным приключением, в котором ей помогают загадочный Барон и его друзья.",
    cover: "/anime/the-cat-returns.jpg",
  },
];
