USE [portal_noticias]
GO
/****** Object:  Table [dbo].[noticias]    Script Date: 02/05/2022 18:19:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[noticias](
	[id_noticia] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](100) NULL,
	[noticia] [text] NULL,
	[resumo] [varchar](100) NULL,
	[autor] [varchar](30) NULL,
	[data_noticia] [date] NULL,
	[categoria] [varchar](50) NULL,
	[imagem] [varchar](255) NULL,
	[data_criacao] [datetime] NULL,
 CONSTRAINT [PK_noticias] PRIMARY KEY CLUSTERED 
(
	[id_noticia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[noticias] ON 

INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (1, N'The Newest Technology On This Year 2019', N'Conteudo da Noticia', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-01-28' AS Date), N'Tecnologia', NULL, CAST(N'2021-11-11T07:24:13.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (2, N'What to pack when visiting Sea', N'Conteudo da Outra Noticia', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-01-28' AS Date), N'Viagem', NULL, CAST(N'2021-11-11T07:28:56.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (3, N'Awesome Fashion Trend in For Summer', N'teste', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-03-28' AS Date), N'Moda', NULL, CAST(N'2021-11-11T13:48:46.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (4, N'10 Most Awesome Place', N'teste 1', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-03-28' AS Date), N'Viagem', NULL, CAST(N'2021-11-11T13:50:31.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (5, N'10 Most Awesome Beach in Asia', N'teste 2', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-05-28' AS Date), N'Viagem', NULL, CAST(N'2021-11-11T13:57:54.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (6, N'Top Amazing Places to Go in Summer', N'teste 3', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-05-28' AS Date), N'Viagem', NULL, CAST(N'2021-11-11T14:00:36.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (7, N'7 Beginner Photographer’s Mistakes', N'Teste 4', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2021-07-10' AS Date), N'Moda', NULL, CAST(N'2021-11-11T14:18:36.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (8, N'Excited to Visit in Palawan Philippines', N'fgfdgdfgg', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2021-07-11' AS Date), N'Fotografia', NULL, CAST(N'2021-11-11T18:04:52.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (9, N'How to Make a Paper Boat in Scratch', N'Realizando teste de salvamento de noticia com html', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2021-11-23' AS Date), N'Tecnologia', NULL, CAST(N'2021-11-23T04:22:26.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (10, N'10 Best Way to Styling Your Lifestyle', N'teste 5', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2020-05-19' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T15:51:10.000' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (11, N'10 Tips to Become a Fashion Pro', N'teste 6', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2019-04-17' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T15:54:58.957' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (12, N'Visit the Most Amazing Place in North America', N'teste 7', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2019-05-28' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T15:54:58.970' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (13, N'Awesome Fashion Trend in For Summer', N'teste 9', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2022-05-02' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T16:33:54.603' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (14, N'10 Most Awesome Place', N'teste 10', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2021-05-03' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T16:33:54.617' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (15, N'10 Most Awesome Beach in Asia', N'teste 11', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2020-05-05' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T16:33:54.627' AS DateTime))
INSERT [dbo].[noticias] ([id_noticia], [titulo], [noticia], [resumo], [autor], [data_noticia], [categoria], [imagem], [data_criacao]) VALUES (16, N'Top Amazing Places to Go in Summer', N'teste 12', N'Even the all-powerful Pointing has no control about the blind texts it is an almost', N'Dave Lewis', CAST(N'2018-05-01' AS Date), N'Fotografia', NULL, CAST(N'2022-05-02T16:33:54.640' AS DateTime))
SET IDENTITY_INSERT [dbo].[noticias] OFF
GO
ALTER TABLE [dbo].[noticias] ADD  CONSTRAINT [DF_noticias_data_criacao]  DEFAULT (getdate()) FOR [data_criacao]
GO
