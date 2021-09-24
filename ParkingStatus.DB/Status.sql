CREATE TABLE [dbo].[Status]
(
	[StatusID] INT NOT NULL PRIMARY KEY, 
    [StatusName] VARCHAR(MAX) NOT NULL, 
    [StatusColor] VARCHAR(50) NULL, 
    [StatusDescription] VARCHAR(MAX) NULL, 
    [StatusImage] IMAGE NULL
)
