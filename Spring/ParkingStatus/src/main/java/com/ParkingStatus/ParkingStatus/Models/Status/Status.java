package com.ParkingStatus.ParkingStatus.Models.Status;

import java.io.File;

public class Status {

    private int StatusId;
    private int Name;
    private String Color;
    private String Description;
    private String StatusImageName;
    private File StatusImage;

    public Status(int statusId, int name, String color, String description, String statusImageName, File statusImage) {
        StatusId = statusId;
        Name = name;
        Color = color;
        Description = description;
        StatusImageName = statusImageName;
        StatusImage = statusImage;
    }

    public int getStatusId() {
        return StatusId;
    }

    public void setStatusId(int statusId) {
        StatusId = statusId;
    }

    public int getName() {
        return Name;
    }

    public void setName(int name) {
        Name = name;
    }

    public String getColor() {
        return Color;
    }

    public void setColor(String color) {
        Color = color;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getStatusImageName() {
        return StatusImageName;
    }

    public void setStatusImageName(String statusImageName) {
        StatusImageName = statusImageName;
    }

    public File getStatusImage() {
        return StatusImage;
    }

    public void setStatusImage(File statusImage) {
        StatusImage = statusImage;
    }

    @Override
    public String toString() {
        return "Status{" +
                "StatusId=" + StatusId +
                ", Name=" + Name +
                ", Color='" + Color + '\'' +
                ", Description='" + Description + '\'' +
                '}';
    }
}
