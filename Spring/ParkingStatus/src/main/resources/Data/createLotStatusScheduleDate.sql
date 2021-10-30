CREATE TABLE LOTSTATUSSCHEDULEDATE
(
	LotStatusScheduleDateID INT NOT NULL PRIMARY KEY,
    StartTime VARCHAR(200) NOT NULL,
    EndTime VARCHAR(200) NOT NULL,
    LotStatusScheduleID INT NOT NULL,
    StatusID INT NOT NULL,
    FOREIGN KEY (LotStatusScheduleID) REFERENCES LOTSTATUSSCHEDULE(LotStatusScheduleID),
    FOREIGN KEY (StatusID) REFERENCES STATUS(StatusID)
);