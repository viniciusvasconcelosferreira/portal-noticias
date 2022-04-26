USE [master]
GO
/****** Object:  Database [portal_noticias]    Script Date: 26/04/2022 19:38:09 ******/
CREATE DATABASE [portal_noticias]
    CONTAINMENT = NONE
    ON PRIMARY
    ( NAME = N'portal_noticias', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\portal_noticias.mdf' , SIZE = 8192 KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536 KB )
    LOG ON
    ( NAME = N'portal_noticias_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\portal_noticias_log.ldf' , SIZE = 8192 KB , MAXSIZE = 2048 GB , FILEGROWTH = 65536 KB )
WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [portal_noticias] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
    begin
        EXEC [portal_noticias].[dbo].[sp_fulltext_database] @action = 'enable'
    end
GO
ALTER DATABASE [portal_noticias] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [portal_noticias] SET ANSI_NULLS OFF
GO
ALTER DATABASE [portal_noticias] SET ANSI_PADDING OFF
GO
ALTER DATABASE [portal_noticias] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [portal_noticias] SET ARITHABORT OFF
GO
ALTER DATABASE [portal_noticias] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [portal_noticias] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [portal_noticias] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [portal_noticias] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [portal_noticias] SET CURSOR_DEFAULT GLOBAL
GO
ALTER DATABASE [portal_noticias] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [portal_noticias] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [portal_noticias] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [portal_noticias] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [portal_noticias] SET DISABLE_BROKER
GO
ALTER DATABASE [portal_noticias] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [portal_noticias] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [portal_noticias] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [portal_noticias] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [portal_noticias] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [portal_noticias] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [portal_noticias] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [portal_noticias] SET RECOVERY FULL
GO
ALTER DATABASE [portal_noticias] SET MULTI_USER
GO
ALTER DATABASE [portal_noticias] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [portal_noticias] SET DB_CHAINING OFF
GO
ALTER DATABASE [portal_noticias] SET FILESTREAM ( NON_TRANSACTED_ACCESS = OFF )
GO
ALTER DATABASE [portal_noticias] SET TARGET_RECOVERY_TIME = 60 SECONDS
GO
ALTER DATABASE [portal_noticias] SET DELAYED_DURABILITY = DISABLED
GO
ALTER DATABASE [portal_noticias] SET ACCELERATED_DATABASE_RECOVERY = OFF
GO
EXEC sys.sp_db_vardecimal_storage_format N'portal_noticias', N'ON'
GO
ALTER DATABASE [portal_noticias] SET QUERY_STORE = OFF
GO
USE [portal_noticias]
GO
/****** Object:  Table [dbo].[noticias]    Script Date: 26/04/2022 19:38:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[noticias]
(
    [id_noticia]   [int] IDENTITY (1,1) NOT NULL,
    [titulo]       [varchar](100)       NULL,
    [noticia]      [text]               NULL,
    [resumo]       [varchar](100)       NULL,
    [autor]        [varchar](30)        NULL,
    [data_noticia] [date]               NULL,
    [categoria]    [varchar](50)        NULL,
    [imagem]       [varchar](255)       NULL,
    [data_criacao] [datetime]           NULL,
    CONSTRAINT [PK_noticias] PRIMARY KEY CLUSTERED
        (
         [id_noticia] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[noticias]
    ADD CONSTRAINT [DF_noticias_data_criacao] DEFAULT (getdate()) FOR [data_criacao]
GO
USE [master]
GO
ALTER DATABASE [portal_noticias] SET READ_WRITE
GO
