﻿CREATE TABLE [dbo].[STATUSEVENT]
(
	[StatusEventID] INT NOT NULL PRIMARY KEY, 
    [Description] VARCHAR(50) NULL, 
    [StatusID] INT NOT NULL, 
    CONSTRAINT [FK_StatusEvent_StatusID] FOREIGN KEY ([StatusID]) REFERENCES [STATUS]([StatusID])
)
