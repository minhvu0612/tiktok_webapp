-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 07, 2022 lúc 05:24 AM
-- Phiên bản máy phục vụ: 10.4.20-MariaDB
-- Phiên bản PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tiktok`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `video_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `content`, `user_id`, `video_id`, `created_at`, `updated_at`) VALUES
(1, 'sdzgvsagvar', 1, 1, '2022-01-27 21:37:42', '2022-01-27 21:37:42'),
(2, 'hello bạn 😍😄😄😄😄😍😍😍😍', 2, 1, '2022-01-27 23:01:02', '2022-01-27 23:01:02'),
(3, 'hello cả nhà , chúc ngày mới vv 😍😍😍', 2, 2, '2022-01-27 23:16:10', '2022-01-27 23:16:10'),
(4, '@[hy112233](2) @[vuminhcong](3) hello', 1, 3, '2022-01-27 23:58:17', '2022-01-27 23:58:17'),
(5, 'hello cả nhà chúc mn ngày mới vui vẻ 👍👍👍👍👍', 1, 4, '2022-01-28 00:12:08', '2022-01-28 00:12:08'),
(6, 'các bạn thấy tsumugi-akari thế nào 😉😉😉?', 1, 6, '2022-01-28 00:33:19', '2022-01-28 00:33:19'),
(7, 'hello😧😧❤️❤️❤️', 4, 7, '2022-01-28 01:10:31', '2022-01-28 01:10:31'),
(8, '@[vuminhcong](3) này', 1, 7, '2022-01-28 01:12:14', '2022-01-28 01:12:14'),
(9, 'Xinh 🥰🥰🥰', 5, 4, '2022-01-28 02:48:37', '2022-01-28 02:48:37'),
(10, 'Cmt đầu 💯💯💯', 5, 5, '2022-01-28 02:49:39', '2022-01-28 02:49:39'),
(11, 'Tường ny 😂😂😂😂', 5, 8, '2022-01-28 02:50:36', '2022-01-28 02:50:36'),
(12, 'Trời nay đẹp không mn? Like mạnh nha ❤️❤️❤️❤️', 5, 10, '2022-01-28 02:55:44', '2022-01-28 02:55:44'),
(13, '@[vungocminh](1) hello minh😄😄', 6, 5, '2022-01-28 03:05:58', '2022-01-28 03:05:58'),
(14, 'Rất trực quan 🙂🙂🙂', 7, 6, '2022-01-28 03:20:21', '2022-01-28 03:20:21'),
(15, '😍😘😘😘😝😝😝 xinh quá', 9, 6, '2022-01-28 03:39:41', '2022-01-28 03:39:41'),
(16, 'hóng video về em này 😍😄😄', 10, 6, '2022-01-28 03:42:15', '2022-01-28 03:42:15'),
(17, '@[minhvungoc](11) hay kdzfbhftnjrydjxre6yju4wyhwe5yh', 12, 12, '2022-02-06 09:29:37', '2022-02-06 09:29:37'),
(18, 'aergreg', 11, 12, '2022-02-06 09:30:18', '2022-02-06 09:30:18'),
(19, 'egarweg', 11, 12, '2022-02-06 09:39:50', '2022-02-06 09:39:50'),
(20, 'ẻgestjh', 11, 12, '2022-02-06 09:40:09', '2022-02-06 09:40:09'),
(21, '😁', 12, 12, '2022-02-06 09:51:30', '2022-02-06 09:51:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `follows`
--

CREATE TABLE `follows` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id_1` int(10) UNSIGNED NOT NULL,
  `user_id_2` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `follows`
--

INSERT INTO `follows` (`id`, `user_id_1`, `user_id_2`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2022-01-27 23:09:17', '2022-01-27 23:09:17'),
(2, 3, 1, '2022-01-27 23:23:43', '2022-01-27 23:23:43'),
(3, 1, 2, '2022-01-27 23:47:44', '2022-01-27 23:47:44'),
(6, 1, 3, '2022-01-27 23:59:32', '2022-01-27 23:59:32'),
(7, 4, 1, '2022-01-28 01:07:48', '2022-01-28 01:07:48'),
(8, 1, 4, '2022-01-28 01:12:40', '2022-01-28 01:12:40'),
(9, 5, 1, '2022-01-28 02:45:50', '2022-01-28 02:45:50'),
(10, 5, 4, '2022-01-28 02:46:05', '2022-01-28 02:46:05'),
(11, 6, 1, '2022-01-28 03:00:41', '2022-01-28 03:00:41'),
(12, 6, 4, '2022-01-28 03:17:51', '2022-01-28 03:17:51'),
(13, 7, 1, '2022-01-28 03:19:50', '2022-01-28 03:19:50'),
(14, 7, 4, '2022-01-28 03:24:55', '2022-01-28 03:24:55'),
(15, 7, 2, '2022-01-28 03:25:04', '2022-01-28 03:25:04'),
(16, 8, 1, '2022-01-28 03:33:29', '2022-01-28 03:33:29'),
(17, 8, 4, '2022-01-28 03:33:35', '2022-01-28 03:33:35'),
(18, 8, 7, '2022-01-28 03:35:21', '2022-01-28 03:35:21'),
(19, 8, 5, '2022-01-28 03:35:28', '2022-01-28 03:35:28'),
(20, 9, 5, '2022-01-28 03:37:01', '2022-01-28 03:37:01'),
(21, 9, 2, '2022-01-28 03:37:06', '2022-01-28 03:37:06'),
(22, 9, 7, '2022-01-28 03:37:13', '2022-01-28 03:37:13'),
(23, 9, 1, '2022-01-28 03:37:25', '2022-01-28 03:37:25'),
(24, 10, 1, '2022-01-28 03:41:33', '2022-01-28 03:41:33'),
(25, 10, 4, '2022-01-28 03:44:55', '2022-01-28 03:44:55'),
(26, 10, 5, '2022-01-28 03:46:17', '2022-01-28 03:46:17'),
(27, 10, 7, '2022-01-28 03:51:16', '2022-01-28 03:51:16'),
(28, 1, 7, '2022-01-28 04:14:59', '2022-01-28 04:14:59'),
(29, 6, 9, '2022-01-28 09:47:59', '2022-01-28 09:47:59'),
(30, 6, 5, '2022-01-28 09:48:04', '2022-01-28 09:48:04'),
(31, 6, 2, '2022-01-28 09:48:11', '2022-01-28 09:48:11'),
(32, 12, 11, '2022-02-06 09:26:05', '2022-02-06 09:26:05'),
(34, 12, 1, '2022-02-06 09:41:44', '2022-02-06 09:41:44'),
(35, 11, 12, '2022-02-06 09:43:25', '2022-02-06 09:43:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hashtags`
--

CREATE TABLE `hashtags` (
  `id` int(10) UNSIGNED NOT NULL,
  `hashtag_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hashtags`
--

INSERT INTO `hashtags` (`id`, `hashtag_name`, `created_at`, `updated_at`) VALUES
(1, '#vnm0612', '2022-01-27 20:54:15', '2022-01-27 20:54:15'),
(2, '#tieuhy', '2022-01-27 23:14:07', '2022-01-27 23:14:07'),
(3, '#minhcong', '2022-01-27 23:37:29', '2022-01-27 23:37:29'),
(4, '#huanrose', '2022-01-28 01:10:01', '2022-01-28 01:10:01'),
(5, '#huytu', '2022-01-28 02:42:39', '2022-01-28 02:42:39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `like_comments`
--

CREATE TABLE `like_comments` (
  `status` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `comment_id` int(10) UNSIGNED DEFAULT NULL,
  `reply_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `like_comments`
--

INSERT INTO `like_comments` (`status`, `user_id`, `comment_id`, `reply_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, '2022-01-27 21:37:50', '2022-01-27 21:37:50'),
(0, 1, NULL, 1, '2022-01-27 22:52:10', '2022-01-27 22:52:10'),
(1, 2, 1, NULL, '2022-01-27 23:11:28', '2022-01-27 23:11:28'),
(1, 1, 3, NULL, '2022-01-27 23:43:21', '2022-01-27 23:43:21'),
(1, 1, 4, NULL, '2022-01-27 23:58:23', '2022-01-27 23:58:23'),
(0, 1, NULL, 3, '2022-01-27 23:59:01', '2022-01-27 23:59:01'),
(1, 1, 6, NULL, '2022-01-28 00:33:25', '2022-01-28 00:33:25'),
(1, 1, 2, NULL, '2022-01-28 01:05:31', '2022-01-28 01:05:31'),
(1, 4, 7, NULL, '2022-01-28 01:10:40', '2022-01-28 01:10:40'),
(1, 4, 1, NULL, '2022-01-28 01:38:22', '2022-01-28 01:38:22'),
(1, 4, 2, NULL, '2022-01-28 01:38:24', '2022-01-28 01:38:24'),
(1, 5, 6, NULL, '2022-01-28 02:47:42', '2022-01-28 02:47:42'),
(1, 5, 10, NULL, '2022-01-28 02:49:44', '2022-01-28 02:49:44'),
(1, 5, 11, NULL, '2022-01-28 02:50:42', '2022-01-28 02:50:42'),
(0, 5, NULL, 9, '2022-01-28 02:51:32', '2022-01-28 02:51:32'),
(1, 5, 12, NULL, '2022-01-28 02:55:56', '2022-01-28 02:55:56'),
(1, 6, 10, NULL, '2022-01-28 03:01:39', '2022-01-28 03:01:39'),
(1, 6, 13, NULL, '2022-01-28 03:06:08', '2022-01-28 03:06:08'),
(0, 6, NULL, 10, '2022-01-28 03:06:10', '2022-01-28 03:06:10'),
(1, 6, 6, NULL, '2022-01-28 03:14:46', '2022-01-28 03:14:46'),
(1, 6, 5, NULL, '2022-01-28 03:15:13', '2022-01-28 03:15:13'),
(1, 6, 9, NULL, '2022-01-28 03:15:14', '2022-01-28 03:15:14'),
(0, 6, NULL, 12, '2022-01-28 03:15:50', '2022-01-28 03:15:50'),
(1, 6, 1, NULL, '2022-01-28 03:17:19', '2022-01-28 03:17:19'),
(1, 6, 2, NULL, '2022-01-28 03:17:21', '2022-01-28 03:17:21'),
(1, 7, 6, NULL, '2022-01-28 03:20:27', '2022-01-28 03:20:27'),
(0, 7, NULL, 7, '2022-01-28 03:20:28', '2022-01-28 03:20:28'),
(0, 7, NULL, 13, '2022-01-28 03:20:51', '2022-01-28 03:20:51'),
(1, 7, 14, NULL, '2022-01-28 03:20:52', '2022-01-28 03:20:52'),
(1, 7, 10, NULL, '2022-01-28 03:23:39', '2022-01-28 03:23:39'),
(1, 7, 13, NULL, '2022-01-28 03:23:40', '2022-01-28 03:23:40'),
(0, 7, NULL, 10, '2022-01-28 03:23:43', '2022-01-28 03:23:43'),
(1, 9, 14, NULL, '2022-01-28 03:38:45', '2022-01-28 03:38:45'),
(1, 9, 6, NULL, '2022-01-28 03:38:48', '2022-01-28 03:38:48'),
(1, 9, 15, NULL, '2022-01-28 03:39:45', '2022-01-28 03:39:45'),
(1, 10, 6, NULL, '2022-01-28 03:42:20', '2022-01-28 03:42:20'),
(0, 10, NULL, 7, '2022-01-28 03:42:43', '2022-01-28 03:42:43'),
(0, 10, NULL, 13, '2022-01-28 03:42:46', '2022-01-28 03:42:46'),
(0, 10, NULL, 11, '2022-01-28 03:42:47', '2022-01-28 03:42:47'),
(1, 10, 15, NULL, '2022-01-28 03:42:49', '2022-01-28 03:42:49'),
(1, 10, 16, NULL, '2022-01-28 03:42:51', '2022-01-28 03:42:51'),
(1, 10, 14, NULL, '2022-01-28 03:42:53', '2022-01-28 03:42:53'),
(0, 10, NULL, 14, '2022-01-28 03:44:02', '2022-01-28 03:44:02'),
(0, 10, NULL, 15, '2022-01-28 03:44:04', '2022-01-28 03:44:04'),
(1, 10, 7, NULL, '2022-01-28 03:45:03', '2022-01-28 03:45:03'),
(1, 10, 8, NULL, '2022-01-28 03:45:04', '2022-01-28 03:45:04'),
(0, 10, NULL, 5, '2022-01-28 03:45:30', '2022-01-28 03:45:30'),
(0, 10, NULL, 16, '2022-01-28 03:45:34', '2022-01-28 03:45:34'),
(0, 10, NULL, 6, '2022-01-28 03:45:36', '2022-01-28 03:45:36'),
(1, 10, 11, NULL, '2022-01-28 03:46:34', '2022-01-28 03:46:34'),
(0, 10, NULL, 9, '2022-01-28 03:46:51', '2022-01-28 03:46:51'),
(1, 10, 4, NULL, '2022-01-28 03:49:51', '2022-01-28 03:49:51'),
(0, 6, NULL, 7, '2022-01-28 06:47:03', '2022-01-28 06:47:03'),
(1, 12, 19, NULL, '2022-02-06 09:42:59', '2022-02-06 09:42:59'),
(1, 12, 20, NULL, '2022-02-06 09:43:02', '2022-02-06 09:43:02'),
(1, 12, 11, NULL, '2022-02-06 09:49:26', '2022-02-06 09:49:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `like_videos`
--

CREATE TABLE `like_videos` (
  `status` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `video_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `like_videos`
--

INSERT INTO `like_videos` (`status`, `user_id`, `video_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2022-01-27 21:37:52', '2022-01-27 21:37:52'),
(1, 2, 1, '2022-01-27 23:09:07', '2022-01-27 23:09:07'),
(1, 2, 2, '2022-01-27 23:15:47', '2022-01-27 23:15:47'),
(1, 1, 2, '2022-01-27 23:43:24', '2022-01-27 23:43:24'),
(1, 1, 3, '2022-01-27 23:57:39', '2022-01-27 23:57:39'),
(1, 1, 4, '2022-01-28 00:12:18', '2022-01-28 00:12:18'),
(1, 1, 5, '2022-01-28 00:27:46', '2022-01-28 00:27:46'),
(1, 4, 7, '2022-01-28 01:10:17', '2022-01-28 01:10:17'),
(1, 4, 5, '2022-01-28 01:16:18', '2022-01-28 01:16:18'),
(1, 4, 1, '2022-01-28 01:38:28', '2022-01-28 01:38:28'),
(1, 4, 4, '2022-01-28 01:39:04', '2022-01-28 01:39:04'),
(1, 5, 6, '2022-01-28 02:47:18', '2022-01-28 02:47:18'),
(1, 5, 4, '2022-01-28 02:48:22', '2022-01-28 02:48:22'),
(1, 5, 5, '2022-01-28 02:49:18', '2022-01-28 02:49:18'),
(1, 5, 8, '2022-01-28 02:50:48', '2022-01-28 02:50:48'),
(1, 5, 10, '2022-01-28 02:55:16', '2022-01-28 02:55:16'),
(1, 5, 11, '2022-01-28 02:57:43', '2022-01-28 02:57:43'),
(1, 6, 5, '2022-01-28 03:05:55', '2022-01-28 03:05:55'),
(1, 6, 6, '2022-01-28 03:14:47', '2022-01-28 03:14:47'),
(1, 6, 4, '2022-01-28 03:15:11', '2022-01-28 03:15:11'),
(1, 6, 1, '2022-01-28 03:17:35', '2022-01-28 03:17:35'),
(1, 7, 6, '2022-01-28 03:20:57', '2022-01-28 03:20:57'),
(1, 7, 5, '2022-01-28 03:23:46', '2022-01-28 03:23:46'),
(1, 9, 5, '2022-01-28 03:38:14', '2022-01-28 03:38:14'),
(1, 9, 6, '2022-01-28 03:39:04', '2022-01-28 03:39:04'),
(1, 10, 1, '2022-01-28 03:41:39', '2022-01-28 03:41:39'),
(1, 10, 6, '2022-01-28 03:41:54', '2022-01-28 03:41:54'),
(1, 10, 7, '2022-01-28 03:45:01', '2022-01-28 03:45:01'),
(1, 10, 9, '2022-01-28 03:46:23', '2022-01-28 03:46:23'),
(1, 10, 8, '2022-01-28 03:46:36', '2022-01-28 03:46:36'),
(1, 10, 3, '2022-01-28 03:49:52', '2022-01-28 03:49:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_01_10_031426_create_users', 1),
(3, '2022_01_10_031513_create_hashtags', 1),
(4, '2022_01_10_041807_create_videos', 1),
(5, '2022_01_10_042119_create_comments', 1),
(6, '2022_01_10_043302_create_replies', 1),
(7, '2022_01_10_044022_create_follows', 1),
(8, '2022_01_25_045213_create_table_like_videos', 1),
(9, '2022_01_25_092136_create_table_like_comments', 1),
(10, '2022_02_05_105124_create_table_nortifications_table', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nortifications`
--

CREATE TABLE `nortifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `sender_id` int(10) UNSIGNED NOT NULL,
  `nortificable_id` int(10) UNSIGNED NOT NULL,
  `nortificable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nortifications`
--

INSERT INTO `nortifications` (`id`, `user_id`, `sender_id`, `nortificable_id`, `nortificable_type`, `read`, `created_at`, `updated_at`) VALUES
(1, 11, 12, 32, 'App\\Models\\TiktokApi\\Follows', 1, '2022-02-06 09:26:05', '2022-02-06 09:26:21'),
(2, 12, 11, 33, 'App\\Models\\TiktokApi\\Follows', 1, '2022-02-06 09:27:29', '2022-02-06 09:27:37'),
(3, 12, 11, 18, 'App\\Models\\TiktokApi\\Comments', 1, '2022-02-06 09:30:18', '2022-02-06 09:30:31'),
(4, 12, 11, 19, 'App\\Models\\TiktokApi\\Comments', 1, '2022-02-06 09:39:50', '2022-02-06 09:42:53'),
(5, 12, 11, 20, 'App\\Models\\TiktokApi\\Comments', 1, '2022-02-06 09:40:09', '2022-02-06 09:40:17'),
(6, 1, 12, 34, 'App\\Models\\TiktokApi\\Follows', 0, '2022-02-06 09:41:44', '2022-02-06 09:41:44'),
(7, 12, 11, 35, 'App\\Models\\TiktokApi\\Follows', 1, '2022-02-06 09:43:26', '2022-02-06 09:50:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `replies`
--

CREATE TABLE `replies` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `comment_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `replies`
--

INSERT INTO `replies` (`id`, `content`, `user_id`, `comment_id`, `created_at`, `updated_at`) VALUES
(1, 'like và share nhá mn thanks. 😀😀😀😀❤️❤️❤️❤️', 1, 1, '2022-01-27 21:57:58', '2022-01-27 21:57:58'),
(2, 'mn nhớ like và share nha . thanks❤️❤️❤️', 2, 3, '2022-01-27 23:16:39', '2022-01-27 23:16:39'),
(3, 'oke💋💋💋💋', 1, 4, '2022-01-27 23:58:51', '2022-01-27 23:58:51'),
(4, 'hello', 1, 2, '2022-01-28 01:05:26', '2022-01-28 01:05:26'),
(5, 'xsdbzsrdbd', 4, 7, '2022-01-28 01:10:37', '2022-01-28 01:10:37'),
(6, 'hello 🙄🙄🙄', 1, 7, '2022-01-28 01:12:02', '2022-01-28 01:12:02'),
(7, 'xinh lắm nha ❤️❤️❤️', 5, 6, '2022-01-28 02:47:35', '2022-01-28 02:47:35'),
(8, 'hello @[vungocminh](1) ❤️❤️❤️', 5, 5, '2022-01-28 02:48:11', '2022-01-28 02:48:11'),
(9, 'Like mạnh nha cả nhà 💖💖💖', 5, 11, '2022-01-28 02:51:23', '2022-01-28 02:51:23'),
(10, '🤙🤙🤙', 6, 10, '2022-01-28 03:01:34', '2022-01-28 03:01:34'),
(11, 'xinh xỉu 😍😍😍', 6, 6, '2022-01-28 03:14:39', '2022-01-28 03:14:39'),
(12, 'hello ad ❤️❤️❤️', 6, 5, '2022-01-28 03:15:42', '2022-01-28 03:15:42'),
(13, 'xinh 💯💯💯', 7, 6, '2022-01-28 03:20:47', '2022-01-28 03:20:47'),
(14, 'trực quan vler 🤣🤣🤣', 9, 14, '2022-01-28 03:38:40', '2022-01-28 03:38:40'),
(15, 'xinh 10 điểm =))', 10, 6, '2022-01-28 03:42:37', '2022-01-28 03:42:37'),
(16, 'yua mikami xinh nhỉ🥴🥴🥴', 10, 7, '2022-01-28 03:45:26', '2022-01-28 03:45:26'),
(17, '🤣🤣🤣', 10, 11, '2022-01-28 03:46:45', '2022-01-28 03:46:45'),
(18, 'dfhbdth', 11, 17, '2022-02-06 09:39:03', '2022-02-06 09:39:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `fullname`, `age`, `gender`, `avatar`, `password`, `description`, `facebook`, `created_at`, `updated_at`) VALUES
(1, 'vungocminh', 'minh061220@gmail.com', 'Vũ Ngọc Minh', 22, 'male', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643354554/tiktok_image/yfbydsyaiybo1vsawkqc.jpg', '2e32fb996ef8fe57caa2846960f440f6', 'Chả có gì để mô tả.', 'https://www.facebook.com/profile.php?id=100077323845846', '2022-01-28 03:52:07', '2022-01-28 00:22:38'),
(2, 'hy112233', 'hy@gmail.com', 'Tiểu Hý', 22, 'male', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643350205/tiktok_image/al88d0ztwr52zjlxjn60.jpg', 'b3d5f6073410e9d56cac40e30a680675', 'Contact : manager.tieuhy@gmail.com', NULL, '2022-01-28 05:56:08', '2022-01-27 23:10:53'),
(3, 'vuminhcong', 'cong@gmail.com', 'Vũ Minh Công', 22, 'female', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg', '8002f7f6a4c2570e12ff9b90f3e9e987', 'Không có gì', 'https://www.facebook.com/MinhCong999', '2022-01-28 06:21:42', '2022-01-27 23:22:49'),
(4, 'huanrose', 'huan@gmail.com', 'Phạm Trọng Huấn', 24, 'male', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643357283/tiktok_image/oacdm9tpxlectcznpxjn.jpg', '451464a294170c0c4b9c10dda3813e72', 'ok ok ok', 'https://www.facebook.com/thiensukin', '2022-01-28 08:07:33', '2022-01-28 01:08:34'),
(5, 'vnm0612', 'huytu@gmail.com', 'Vũ Ngọc Minh', 22, 'male', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643362902/tiktok_image/twskimt4uh6f5bt08a0l.jpg', '1b758b7dde2ce0a31046df5b691fa529', 'フォローしてね😆YouTube、Twitterもフォロー待ってるよ🥳 アパレルブランド', 'https://www.facebook.com/tu.huy.3705', '2022-01-28 09:33:47', '2022-01-28 02:52:11'),
(6, 'vnm112233', 'minhvn@gmail.com', 'Vũ Ngọc Minh - 20184156', 22, 'male', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg', '2e32fb996ef8fe57caa2846960f440f6', NULL, NULL, '2022-01-28 10:00:15', '2022-01-28 10:00:15'),
(7, 'nguyenthanhduong', 'duong@gmail.com', 'Nguyễn Thanh Dương', 24, 'male', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643365545/tiktok_image/q1dymbzy6ts8wbkamg3c.jpg', '7050202e59bd224cddaae4fc5f23dcc8', NULL, NULL, '2022-01-28 10:19:37', '2022-01-28 03:25:47'),
(8, 'alex-dras', 'sosa@gmail.com', 'ole gunar sosa', 35, 'male', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643366108/tiktok_image/fy0i6j9ssjopoawfzrtl.jpg', '73545c6fcc9ffff80212e983ac8a7dec', NULL, NULL, '2022-01-28 10:33:14', '2022-01-28 03:35:12'),
(9, 'leo-messi', 'messi@gmail.com', 'Lionel Messi', 34, 'male', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg', '2b4ef70a5d490ae216dce46dfa0cd26f', NULL, NULL, '2022-01-28 10:36:49', '2022-01-28 10:36:49'),
(10, 'minhcong99', 'congming@gmail.com', 'Minh Công', 22, 'male', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg', '800556135ac31e7da8f8b18fae97862e', NULL, NULL, '2022-01-28 10:41:21', '2022-01-28 10:41:21'),
(11, 'minhvungoc', 'vnm123@gmail.com', 'Lister Tuy', 20, 'male', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639419/default_avatar/mnuue0txf2qv1zhpsbno.jpg', 'a1478186f1f399bf0a5dc53d13f7b4e4', NULL, NULL, '2022-02-06 16:24:48', '2022-02-06 16:24:48'),
(12, 'SGEARG', 'srgser@gmail.com', 'adrbgres  dsrhbsrth', 16, 'female', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1641639373/default_avatar/c2xkuolzbms9xhsxh7cr.png', 'c6bb8a052d861c676481258b68948030', NULL, NULL, '2022-02-06 16:25:52', '2022-02-06 16:25:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `videos`
--

CREATE TABLE `videos` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `background_video` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time_view` double NOT NULL,
  `hashtag_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `hashtag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `videos`
--

INSERT INTO `videos` (`id`, `url`, `background_video`, `description`, `time_view`, `hashtag_name`, `user_id`, `hashtag_id`, `created_at`, `updated_at`) VALUES
(1, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643342044/tiktok_video/dc3o4x7ld0aisxrg894e.mp4', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1643342050/background/lwguibhkgb2uylipjh7u.png', NULL, 0, '', 1, 1, '2022-01-27 20:54:15', '2022-01-27 20:54:15'),
(2, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643350366/tiktok_video/doscye4n5gedjn47q1hd.mp4', 'https://res.cloudinary.com/diw0u2vl1/image/upload/v1643350391/background/c4jqakauhdwudppfgmgw.png', '😎😎 TieuHy', 0, '#tieuhy', 2, 2, '2022-01-27 23:14:07', '2022-01-27 23:14:07'),
(3, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643351525/tiktok_video/aaqwsruamjtuokhw4v7l.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643351819/background/wamia949rupt21vivjse.png', 'yêu yua-mikami', 0, '#minhcong', 3, 3, '2022-01-27 23:37:29', '2022-01-27 23:37:29'),
(4, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643353551/tiktok_video/d2znlzbw1sxeg2lmlkki.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643353810/background/nrgtmbrtbe9ocuxmgdyl.png', '内カメも見たいとの声が多かったので🤟', 0, '#vnm0612', 1, 1, '2022-01-28 00:10:15', '2022-01-28 00:10:15'),
(5, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643354576/tiktok_video/vqu1ldnqvbxbqgv6vqoo.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643354584/background/f5umvyujxtugm7iolpup.png', 'tsumugi-akari 🥰🥰🥰🥰🥰', 0, '#vnm0612', 1, 1, '2022-01-28 00:24:14', '2022-01-28 00:24:14'),
(6, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643355055/tiktok_video/k6bozobihsu6b6ittsmf.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643355067/background/p4pzz9y5zwpjvyznymvk.png', 'Tsumugi Akari sinh năm 1998.Sở hữu gương mặt xinh đẹp,nụ cười tươi cùng chiều cao 1m55 và có số đo 3 vòng 80-58-83', 0, '#vnm0612', 1, 1, '2022-01-28 00:31:51', '2022-01-28 00:31:51'),
(7, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643357346/tiktok_video/nb5wu5sd0yo5iukbgr7s.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643357399/background/cgfoletrjelsmkklnuf5.png', 'Akari-Tsumugi,  người đẹp sinh năm 1998 sở hữu khuôn mặt ngây thơ, ngọt ngào khiến biết bao anh em phải😍🤣', 0, '#huanrose', 4, 4, '2022-01-28 01:10:01', '2022-01-28 01:10:01'),
(8, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643362923/tiktok_video/anedpf7uqpx15ernrhql.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643362931/background/k5bvp0ta1yvxyaucei0k.png', 'Lại tương tư về ngôi nhà và những đứa trẻ rồi 😂', 0, '#huytu', 5, 5, '2022-01-28 02:42:39', '2022-01-28 02:42:39'),
(9, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643363023/tiktok_video/zdhtutxzvhweudnx1wel.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643363027/background/sn7h0jbohrw38wecllwr.png', 'đó là bộ môn zui zẻ của VN mà người nước ngoài k thử 😂', 0, '#huytu', 5, 5, '2022-01-28 02:44:03', '2022-01-28 02:44:03'),
(10, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643363651/tiktok_video/wzqbvcpdgy1hnlgyhsta.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643363654/background/ubhmubpgzrhpf2rjrqms.png', '𝒃𝒂̂̀𝒖 𝒕𝒓𝒐̛̀𝒊 𝒌𝒊𝒂 𝒓𝒐̣̂𝒏𝒈 𝒍𝒐̛́𝒏 𝒏𝒉𝒖̛𝒏𝒈 𝒉𝒐̂𝒎 𝒏𝒂𝒚 𝒆𝒎 𝒐̂𝒎 𝒗𝒂̀𝒐 𝒍𝒐̀𝒏𝒈 <3', 0, '#huytu', 5, 5, '2022-01-28 02:54:54', '2022-01-28 02:54:54'),
(11, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1643363828/tiktok_video/xppmi7ctieu7wlskupg0.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1643363836/background/g1oii6aero5j8ahsdwlc.png', 'tối có clip mới nhất nha mn🥰', 0, '#huytu', 5, 5, '2022-01-28 02:57:17', '2022-01-28 02:57:17'),
(12, 'http://res.cloudinary.com/diw0u2vl1/video/upload/v1644164887/tiktok_video/dfmwu32oqgyme57wtwu7.mp4', 'http://res.cloudinary.com/diw0u2vl1/image/upload/v1644164890/background/mk5ujs8vogkxy4fvhb7n.png', 'adrgbsrdh', 0, '#huytu', 12, 5, '2022-02-06 09:28:50', '2022-02-06 09:28:50');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_video_id_foreign` (`video_id`);

--
-- Chỉ mục cho bảng `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `follows_user_id_1_foreign` (`user_id_1`),
  ADD KEY `follows_user_id_2_foreign` (`user_id_2`);

--
-- Chỉ mục cho bảng `hashtags`
--
ALTER TABLE `hashtags`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `like_comments`
--
ALTER TABLE `like_comments`
  ADD KEY `like_comments_user_id_foreign` (`user_id`),
  ADD KEY `like_comments_comment_id_foreign` (`comment_id`),
  ADD KEY `like_comments_reply_id_foreign` (`reply_id`);

--
-- Chỉ mục cho bảng `like_videos`
--
ALTER TABLE `like_videos`
  ADD KEY `like_videos_user_id_foreign` (`user_id`),
  ADD KEY `like_videos_video_id_foreign` (`video_id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `nortifications`
--
ALTER TABLE `nortifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nortifications_user_id_foreign` (`user_id`),
  ADD KEY `nortifications_sender_id_foreign` (`sender_id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `replies_user_id_foreign` (`user_id`),
  ADD KEY `replies_comment_id_foreign` (`comment_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `videos_user_id_foreign` (`user_id`),
  ADD KEY `videos_hashtag_id_foreign` (`hashtag_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `follows`
--
ALTER TABLE `follows`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `hashtags`
--
ALTER TABLE `hashtags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `nortifications`
--
ALTER TABLE `nortifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `replies`
--
ALTER TABLE `replies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_user_id_1_foreign` FOREIGN KEY (`user_id_1`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `follows_user_id_2_foreign` FOREIGN KEY (`user_id_2`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `like_comments`
--
ALTER TABLE `like_comments`
  ADD CONSTRAINT `like_comments_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `like_comments_reply_id_foreign` FOREIGN KEY (`reply_id`) REFERENCES `replies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `like_comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `like_videos`
--
ALTER TABLE `like_videos`
  ADD CONSTRAINT `like_videos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `like_videos_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `nortifications`
--
ALTER TABLE `nortifications`
  ADD CONSTRAINT `nortifications_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `nortifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `replies`
--
ALTER TABLE `replies`
  ADD CONSTRAINT `replies_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_hashtag_id_foreign` FOREIGN KEY (`hashtag_id`) REFERENCES `hashtags` (`id`),
  ADD CONSTRAINT `videos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
