CREATE TABLE LOTSTATUSSCHEDULE
(
	LotStatusScheduleID INT NOT NULL PRIMARY KEY ,
    LotID INT NOT NULL,
    Name VARCHAR(500) NULL,
    FOREIGN KEY (LotID) REFERENCES LOT(LotID)
);