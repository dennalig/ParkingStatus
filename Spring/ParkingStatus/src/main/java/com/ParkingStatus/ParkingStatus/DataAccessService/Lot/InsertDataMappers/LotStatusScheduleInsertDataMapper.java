package com.ParkingStatus.ParkingStatus.DataAccessService.Lot.InsertDataMappers;

public class LotStatusScheduleInsertDataMapper {
//    StatusEventID INT NOT NULL PRIMARY KEY,
//    Description VARCHAR(50) NULL,
//    StatusID INT NOT NULL,
//    StatusEventImageName VARCHAR(500) NULL,
//    FOREIGN KEY (StatusID) REFERENCES STATUS(StatusID)

    public int id;
    public int lotId;
    public String name;

    public LotStatusScheduleInsertDataMapper(int id, int lotId, String name) {

        setId(id);
        setLotId(lotId);
        setName(name);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getLotId() {
        return lotId;
    }

    public void setLotId(int lotId) {
        this.lotId = lotId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if(name != null){
            this.name = "'"+name+"'";
        }

    }
}
