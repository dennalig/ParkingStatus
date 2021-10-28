package com.ParkingStatus.ParkingStatus.Models.Lot;

public class Lot {

    private int LotID;

    private String LotName;

    private String LotDescription;


    public Lot(int lotID, String name, String description) {
        LotID = lotID;
        LotName = name;
        LotDescription = description;
    }

    public int getLotID() {
        return LotID;
    }

    public void setLotID(int lotID) {
        LotID = lotID;
    }

    public String getName() {
        return LotName;
    }

    public void setName(String name) {
        LotName = name;
    }

    public String getDescription() {
        return LotDescription;
    }

    public void setDescription(String description) {
        LotDescription = description;
    }


    @Override
    public String toString() {
        return "Lot{" +
                "LotID=" + LotID +
                ", Name='" + LotName + '\'' +
                ", Description='" + LotDescription + '\'' +
                '}';
    }
}
