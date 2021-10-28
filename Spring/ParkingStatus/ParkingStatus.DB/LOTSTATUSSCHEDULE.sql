﻿CREATE TABLE [dbo].[LOTSTATUSSCHEDULE]
(
	[LotStatusScheduleID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [LotID] INT NOT NULL, 
    [LotName] VARCHAR(MAX) NULL, 
    CONSTRAINT [FK_LotID] FOREIGN KEY ([LotID]) REFERENCES [LOT]([LotID]) 
)
