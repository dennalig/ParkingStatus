CREATE TABLE [dbo].[STATUSEVENT]
(
	[StatusEventID] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Description] VARCHAR(50) NULL, 
    [StatusID] INT NOT NULL, 
    [StatusEventImageName] VARCHAR(MAX) NULL, 
    [StatusEventImage] VARBINARY(MAX) NULL, 
    CONSTRAINT [FK_StatusEvent_StatusID] FOREIGN KEY ([StatusID]) REFERENCES [STATUS]([StatusID])
)
