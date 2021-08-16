-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema flightdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `flightdb` ;

-- -----------------------------------------------------
-- Schema flightdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `flightdb` DEFAULT CHARACTER SET utf8 ;
USE `flightdb` ;

-- -----------------------------------------------------
-- Table `flight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flight` ;

CREATE TABLE IF NOT EXISTS `flight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `launch_latitude` DOUBLE NULL,
  `launch_longitude` DOUBLE NULL,
  `land_latitude` DOUBLE NULL,
  `land_longitude` DOUBLE NULL,
  `land_date_time` DATETIME NULL,
  `launch_date_time` DATETIME NULL,
  `launch_site_name` VARCHAR(500) NULL,
  `land_site_name` VARCHAR(500) NULL,
  `comment` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS pilot@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'pilot'@'localhost' IDENTIFIED BY 'pilot';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'pilot'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `flight`
-- -----------------------------------------------------
START TRANSACTION;
USE `flightdb`;
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (1, 37.6673, 122.4974, 37.7594, 122.5107, '2021-06-01 13:30:20', '2021-06-01 12:30:20', 'Mussel Rock', 'Ocean Beach SF', 'String wind at launch coming from the south.');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (2, 37.5124, 121.8805, 37.4472, 121.8478, '2020-07-01 12:30:20', '2021-06-01 12:30:20', 'Mission Peak CA', 'Ed Levin Park CA', 'Strong thermals lifting about 600 fpm');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (3, 37.6673, 122.4974, 37.727027, 122.3025, '2020-06-15 12:30:20', '2020-06-15 11:33:20', 'Mussel Rock', 'Ft. Funston', 'One way trip down the beach');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (4, 37.6673, 122.4974, 37.588, 122.301, '2021-06-16 13:05:20', '2021-06-16 11:05:20', 'Mussel Rock', 'Nike Missile Site SF-59', 'Long Hike back');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (5, 37.880696, 121.9248, 37.905073, 121.974006, '2021-05-10 14:25:05', '2021-05-10 12:25:05', 'Mt. Diablo', 'Farm near Mt. Diablo', 'Borderline too strong wind at launch.');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (6, 37.880696, 121.9248, 37.911070, 121.887579, '2021-05-11 15:25:05', '2021-05-11 12:20:34', 'Mt. Diablo', 'Field north west of Mt. Diablo', 'Strong thermals.');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (7, 37.880696, 121.9248, 37.889522, 121.879134, '2021-04-02 08:34:05', '2021-04-02 06:34:05', 'Mt. Diablo', 'Field west of Mt. Diablo', 'Hot temps. 93 F. Bumpy air');

COMMIT;

