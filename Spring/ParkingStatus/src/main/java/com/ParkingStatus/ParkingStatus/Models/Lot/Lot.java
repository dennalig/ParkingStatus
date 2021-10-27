package com.ParkingStatus.ParkingStatus.Models.Lot;

public class Lot {

    private int LotID;

    private String Name;

    private String Description;

    private LotStatusSchedule lotStatusSchedule;

    public Lot(int lotID, String name, String description, LotStatusSchedule lotStatusSchedule) {
        LotID = lotID;
        Name = name;
        Description = description;
        this.lotStatusSchedule = lotStatusSchedule;
    }

    public int getLotID() {
        return LotID;
    }

    public void setLotID(int lotID) {
        LotID = lotID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public LotStatusSchedule getLotStatusSchedule() {
        return lotStatusSchedule;
    }

    public void setLotStatusSchedule(LotStatusSchedule lotStatusSchedule) {
        this.lotStatusSchedule = lotStatusSchedule;
    }

    @Override
    public String toString() {
        return "Lot{" +
                "LotID=" + LotID +
                ", Name='" + Name + '\'' +
                ", Description='" + Description + '\'' +
                ", lotStatusSchedule=" + lotStatusSchedule +
                '}';
    }
}
