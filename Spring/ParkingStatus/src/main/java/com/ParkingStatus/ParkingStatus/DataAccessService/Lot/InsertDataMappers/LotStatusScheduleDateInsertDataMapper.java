package com.ParkingStatus.ParkingStatus.DataAccessService.Lot.InsertDataMappers;

public class LotStatusScheduleDateInsertDataMapper {

//    LotStatusScheduleDateID INT NOT NULL PRIMARY KEY,
//    StartTime VARCHAR(200) NOT NULL,
//    EndTime VARCHAR(200) NOT NULL,
//    LotStatusScheduleID INT NOT NULL,
//    StatusID INT NOT NULL,
//    FOREIGN KEY (LotStatusScheduleID) REFERENCES LOTSTATUSSCHEDULE(LotStatusScheduleID),
//    FOREIGN KEY (StatusID) REFERENCES STATUS(StatusID)

    public int id;
    public String startTime;
    public String endTime;
    public int lotStatusScheduleId;
    public int statusId;

    public LotStatusScheduleDateInsertDataMapper(int id, String startTime, String endTime,
                                                 int lotStatusScheduleId, int statusId) {
        setId(id);
        setStartTime(startTime);
        setEndTime(endTime);
        setLotStatusScheduleId(lotStatusScheduleId);
        setStatusId(statusId);
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

    public int getLotStatusScheduleId() {
        return lotStatusScheduleId;
    }

    public void setLotStatusScheduleId(int lotStatusScheduleId) {
        this.lotStatusScheduleId = lotStatusScheduleId;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }
}
