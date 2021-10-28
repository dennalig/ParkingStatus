﻿CREATE TABLE [dbo].[LOTSTATUSSCHEDULEDATE]
(
	[LotStatusScheduleDateID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [StartTime] DATETIME NOT NULL, 
    [EndTime] DATETIME NOT NULL, 
    [LotStatusScheduleID] INT NOT NULL, 
    [StatusID] INT NOT NULL, 
    CONSTRAINT [FK_LotStatusScheduleID] FOREIGN KEY ([LotStatusScheduleID]) REFERENCES [LOTSTATUSSCHEDULE]([LotStatusScheduleID]), 
    CONSTRAINT [FK_StatusID] FOREIGN KEY ([StatusID]) REFERENCES [STATUS]([StatusID])
)