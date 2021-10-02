-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 02 2021 г., 08:42
-- Версия сервера: 8.0.15
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `newstest`
--

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `title`, `text`, `image`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Изменения в законодательстве. Медиасообщество просит не трогать законы о СМИ//', '<p>Как сообщает представительство Европейского партнерства за демократию в Кыргызстане, медиасообщество страны в лице средств массовой информации, журналистов и медиаорганизаций обратилось к президенту, торага Жогорку Кенеша, председателю кабинета министров, председателю межведомственной экспертной группы &ndash; министру экономики и финансов, министру юстиции</p>', 'photo/2021-10/1110645202.jpg', 1, '2021-10-01 12:38:59', '2021-10-01 23:26:26'),
(2, 'Мобильный оператор О! расширяет сеть 4G во всех регионах страны', '<p>Регулярно проводимые работы позволяют оператору оставаться лидером по покрытию и емкости сетей 4G/3G/2G в Кыргызстане с охватом более 99% населенной территории страны. Расширение оборудования проведено в следующих населенных пунктах:</p>', 'photo/2021-10/1320829923.jpg', 1, '2021-10-01 12:40:54', '2021-10-01 13:08:33'),
(3, 'ЗАО \"Кумтор голд компани\" оказало гуманитарную помощь Нижне-Серафимовскому дому', '<p>В День пожилых людей, 1 октября, представители ЗАО &quot;Кумтор голд компани&quot; (КГК) доставили в Нижне-Серафимовский дом для пожилых нескоропортящиеся продукты питания на месяц. Кумторовцы привезли дому-интернату продукты в виде муки (800 кг), сахара (600 кг), гречки (620 кг), риса (620 кг), пшена (620 кг), макарон (620 кг), растительного масла (300 литров), чая (20 кг), рыбных консервов (330 шт.) и тушенки (332 банки) на общую сумму 324 тыс. сомов.</p>', 'photo/2021-10/302519476.jpg', 1, '2021-10-01 12:41:25', '2021-10-01 12:41:25'),
(4, 'В Токтогульском водохранилище недостаточно воды. Что это значит для нас с вами?', '<p>Министерство энергетики и промышленности планировало к 1 октября накопить в Токтогульском водохранилище 13,2 млрд кубометров воды. По данным ОАО &quot;Электрические станции&quot;, на сегодняшний день собрано 12,303 млрд кубометров. Разница составляет около 900 млн..</p>', 'photo/2021-10/1606917920.jpg', 1, '2021-10-01 12:42:59', '2021-10-01 23:06:10'),
(5, 'Кабмин: Веерных отключений не будет, только плановые', '<p>Сегодня, 1 октября, кабмин провел разъяснительную работу по новой тарифной политике на электричество и рассказал, что надо экономить электроэнергию, которую в большом количестве импортируют в страну.</p>\r\n\r\n<p>Первый заместитель главы кабмина Азиз Аалиев рассказал о сложной ситуации на Токтогульском водохранилище, где уровень воды близок к мертвому.</p>', NULL, 1, '2021-10-01 12:47:21', '2021-10-01 23:06:02'),
(6, 'ГКНБ выявил две компании, которые продавали просроченное детское питание и сладости', '<p>Сотрудники ГКНБ провели вчера, 30 сентября, обыск складов. Установили, что товары с истекшим сроком годности принадлежат двум компаниям - ОсОО R.G. Company и ОсОО &quot;М. И. Компани&quot;. Их сотрудники перебивали данные о сроке годности продуктов с помощью специальных химических средств, а при получении просроченных товаров составляли фиктивные акты приема-передачи для утилизации.</p>', 'photo/2021-10/948187739.jpg', 1, '2021-10-01 23:21:31', '2021-10-01 23:21:31');

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Батыркул Тыныстанов', 'batukgss@gmail.com', NULL, '$2y$10$OBwKQKOM7RLaW3aYk1HJWOTT1JUbRQQ7AFCgdNP.9zSLdCiwvjVVu', NULL, '2021-10-01 09:51:05', '2021-10-01 09:51:05');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
