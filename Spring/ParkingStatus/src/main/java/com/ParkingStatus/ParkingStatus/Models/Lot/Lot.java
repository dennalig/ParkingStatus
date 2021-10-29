package com.ParkingStatus.ParkingStatus.Models.Lot;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.File;

@Entity
public class Lot {

    @Id
    private int LotID;

    private String LotName;

    private String LotDescription;

    private String LotImageName;

    private File LotImage;

    public Lot(int lotID, String lotName, String lotDescription, String lotImageName, File lotImage) {
        LotID = lotID;
        LotName = lotName;
        LotDescription = lotDescription;
        LotImageName = lotImageName;
        LotImage = lotImage;
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

    public String getLotImageName() {
        return LotImageName;
    }

    public void setLotImageName(String lotImageName) {
        LotImageName = lotImageName;
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
