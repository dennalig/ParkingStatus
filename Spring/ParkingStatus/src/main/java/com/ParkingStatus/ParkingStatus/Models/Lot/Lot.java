package com.ParkingStatus.ParkingStatus.Models.Lot;

public class Lot {

    private int LotID;

    private String Name;

    private String Description;


    public Lot(int lotID, String name, String description) {
        LotID = lotID;
        Name = name;
        Description = description;
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


    @Override
    public String toString() {
        return "Lot{" +
                "LotID=" + LotID +
                ", Name='" + Name + '\'' +
                ", Description='" + Description + '\'' +
                '}';
    }
}
