﻿CREATE TABLE [dbo].[LOT]
(
	[LotID] INT NOT NULL PRIMARY KEY, 
    [LotName] NCHAR(10) NOT NULL, 
    [LotDescription] VARCHAR(MAX) NULL, 
    [LotImage] IMAGE NULL
)
