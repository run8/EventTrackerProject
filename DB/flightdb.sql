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
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (1, 38.8951, -77.0364, 39.666, -77.888, '2021-07-01 12:30:20', '2021-06-01 12:30:20', 'Washington DC paragliding site', '2021-07-01 10:30:20', 'String wind at launch coming from the south.');
INSERT INTO `flight` (`id`, `launch_latitude`, `launch_longitude`, `land_latitude`, `land_longitude`, `land_date_time`, `launch_date_time`, `launch_site_name`, `land_site_name`, `comment`) VALUES (2, 50.8951, -88.0364, 78.888, -80.666, '2020-07-01 12:30:20', '2021-06-01 12:30:20', 'Some launch site name', '2021-07-01 11:30:20', 'Strong thermals lifting about 600 fpm');

COMMIT;

