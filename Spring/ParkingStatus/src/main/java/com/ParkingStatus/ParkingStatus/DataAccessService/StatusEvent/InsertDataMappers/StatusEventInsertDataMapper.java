package com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent.InsertDataMappers;

public class StatusEventInsertDataMapper {
//    StatusEventID INT NOT NULL PRIMARY KEY,
//    Description VARCHAR(50) NULL,
//    StatusID INT NOT NULL,
//    StatusEventImageName VARCHAR(500) NULL,
//    FOREIGN KEY (StatusID) REFERENCES STATUS(StatusID)


    public int id;
    public String description;
    public int statusId;
    public String statusEventImageName;

    public StatusEventInsertDataMapper(int id, String description, int statusId,
                                       String statusEventImageName) {
      setId(id);
      setDescription(description);
      setStatusId(statusId);
      setStatusEventImageName(statusEventImageName);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        if(description != null){
            this.description = "'"+description+"'";
        }

    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    public String getStatusEventImageName() {
        return statusEventImageName;
    }

    public void setStatusEventImageName(String statusEventImageName) {
        if(statusEventImageName != null){
            this.statusEventImageName = "'"+statusEventImageName+"'";
        }
    }
}
