﻿CREATE TABLE [dbo].[STATUS]
(
	[StatusID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [StatusName] VARCHAR(MAX) NOT NULL, 
    [StatusColor] VARCHAR(50) NULL, 
    [StatusDescription] VARCHAR(MAX) NULL, 
    [StatusImage] VARBINARY(MAX) NULL
)
