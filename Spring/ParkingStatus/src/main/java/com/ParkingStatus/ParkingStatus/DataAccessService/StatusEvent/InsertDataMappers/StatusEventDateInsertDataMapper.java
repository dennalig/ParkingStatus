package com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent.InsertDataMappers;

public class StatusEventDateInsertDataMapper {

//    StatusEventDateID INT NOT NULL PRIMARY KEY,
//    StartTime VARCHAR(200) NOT NULL,
//    EndTime VARCHAR(200) NOT NULL,
//    StatusEventID INT NOT NULL,
//    LotID INT NOT NULL,
//    FOREIGN KEY (StatusEventID) REFERENCES STATUSEVENT(StatusEventID),
//    FOREIGN KEY (LotID) REFERENCES LOT(LotID)

    public int id;
    public String startTime;
    public String endTime;
    public int statusEventId;
    public int lotId;

    public StatusEventDateInsertDataMapper(int id, String startTime, String endTime,
                                           int statusEventId, int lotId) {
        setId(id);
        setStartTime(startTime);
        setEndTime(endTime);
        setStatusEventId(statusEventId);
        setLotId(lotId);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = "'"+startTime+"'";
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = "'"+endTime+"'";
    }

    public int getStatusEventId() {
        return statusEventId;
    }

    public void setStatusEventId(int statusEventId) {
        this.statusEventId = statusEventId;
    }

    public int getLotId() {
        return lotId;
    }

    public void setLotId(int lotId) {
        this.lotId = lotId;
    }
}
