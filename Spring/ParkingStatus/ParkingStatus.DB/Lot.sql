﻿CREATE TABLE [dbo].[LOT]
(
	[LotID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [LotName] NCHAR(10) NOT NULL, 
    [LotDescription] VARCHAR(MAX) NULL, 
    [LotImageName] VARCHAR(50) NULL, 
    [LotImage] VARBINARY(MAX) NULL
)
