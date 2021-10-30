package com.ParkingStatus.ParkingStatus.Models.Lot;

import java.io.File;

//@Entity
public class Lot {

//    @Id
    private int LotID;

    private String LotName;

    private String LotDescription;

    private String LotImageName;

    private File LotImage;

    public LotStatusSchedule LotStatusSchedule;

    public Lot() {}

    public Lot(int lotID, String lotName, String lotDescription, String lotImageName, File lotImage,
               LotStatusSchedule lotStatusSchedule) {
        LotID = lotID;
        LotName = lotName;
        LotDescription = lotDescription;
        LotImageName = lotImageName;
        LotImage = lotImage;
        LotStatusSchedule = lotStatusSchedule;
    }


    public int getLotID() {
        return LotID;
    }

    public void setLotID(int lotID) {
        LotID = lotID;
    }

    public String getLotName() {
        return LotName;
    }

    public void setLotName(String lotName) {
        LotName = lotName;
    }

    public String getLotDescription() {
        return LotDescription;
    }

    public void setLotDescription(String lotDescription) {
        LotDescription = lotDescription;
    }

    public String getLotImageName() {
        return LotImageName;
    }

    public void setLotImageName(String lotImageName) {
        LotImageName = lotImageName;
    }

    public File getLotImage() {
        return LotImage;
    }

    public void setLotImage(File lotImage) {
        LotImage = lotImage;
    }

    public com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusSchedule getLotStatusSchedule() {
        return LotStatusSchedule;
    }

    public void setLotStatusSchedule(com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusSchedule lotStatusSchedule) {
        LotStatusSchedule = lotStatusSchedule;
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
