-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2022 at 05:58 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `start_at`, `end_at`) VALUES
(1, 'Dhaka-event', '2023-01-05 06:59:01', '2023-01-05 06:59:01'),
(2, 'Mymensingh-event', '2023-02-05 06:59:01', '2023-02-05 06:59:01'),
(3, 'Khulns-event', '2023-03-05 06:59:01', '2023-03-05 06:59:01'),
(4, 'Sylhet-event', '2023-04-05 06:59:01', '2023-04-05 06:59:01'),
(5, 'Rajshahi-event', '2023-05-05 06:59:01', '2023-05-05 06:59:01');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `workshop_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `name`, `email`, `workshop_id`) VALUES
(1, 'mohian mustafa', 'mohian@gmail.com', 1),
(2, 'mohian dipta', 'dipta@gmail.com', 2),
(3, 'rayan dip', 'rayan@gmail.com', 3),
(4, 'rayan dip', 'dip@gmail.com', 4),
(5, 'rabby', 'rabby@gmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `workshops`
--

CREATE TABLE `workshops` (
  `id` int(10) NOT NULL,
  `event_id` int(10) NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workshops`
--

INSERT INTO `workshops` (`id`, `event_id`, `start_at`, `end_at`, `title`, `description`) VALUES
(1, 1, '2022-12-15 12:39:18', '2022-12-15 12:39:39', 'workshop-title-Dhaka', 'workshop-description-Dhaka'),
(2, 2, '2022-12-20 14:40:17', '2022-12-20 00:00:00', 'workshop-title-Mymensingh', 'workshop-description-Mymensingh'),
(3, 3, '2023-03-05 06:59:01', '2023-03-05 06:59:01', 'workshop-title-Khulna', 'workshop-description-Khulna'),
(4, 4, '2023-04-05 06:59:01', '2023-04-05 06:59:01', 'workshop-title-Sylhet', 'workshop-description-Sylhet'),
(5, 5, '2023-05-05 06:59:01', '2023-05-05 06:59:01', 'workshop-title-Rajshahi', 'workshop-description-Rajshahi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workshop_id` (`workshop_id`);

--
-- Indexes for table `workshops`
--
ALTER TABLE `workshops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `workshops`
--
ALTER TABLE `workshops`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `workshop_id` FOREIGN KEY (`workshop_id`) REFERENCES `workshops` (`id`);

--
-- Constraints for table `workshops`
--
ALTER TABLE `workshops`
  ADD CONSTRAINT `event_id` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
