-- MySQL dump 10.13  Distrib 5.7.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: portal_noticias
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticias`
--

LOCK TABLES `noticias` WRITE;
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
INSERT INTO `noticias` VALUES (1,'The Newest Technology On This Year 2019','Conteudo da Noticia','2021-11-11 07:24:13','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2018-01-28','Tecnologia',NULL),(2,'What to pack when visiting Sea','Conteudo da Outra Noticia','2021-11-11 07:28:56','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2018-01-28','Viagem',NULL),(3,'Awesome Fashion Trend in For Summer','teste','2021-11-11 13:48:46','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2018-03-28','Moda',NULL),(4,'10 Most Awesome Place','teste 1','2021-11-11 13:50:31','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2018-03-28','Viagem',NULL),(5,'10 Most Awesome Beach in Asia','teste 2','2021-11-11 13:57:54','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2018-05-28','Viagem',NULL),(6,'Top Amazing Places to Go in Summer','teste 3','2021-11-11 14:00:36','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2018-05-28','Viagem',NULL),(7,'7 Beginner Photographer’s Mistakes','Teste 4','2021-11-11 14:18:36','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2021-07-10','Moda',NULL),(8,'Excited to Visit in Palawan Philippines','fgfdgdfgg','2021-11-11 18:04:52','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2021-07-11','Fotografia',NULL),(9,'How to Make a Paper Boat in Scratch','Realizando teste de salvamento de noticia com html','2021-11-23 04:22:26','Even the all-powerful Pointing has no control about the blind texts it is an almost','Dave Lewis','2021-11-23','Tecnologia',NULL);
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-26  1:35:03
