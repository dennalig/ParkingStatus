package com.ParkingStatus.ParkingStatus.Models.Status;

public class Status {

    private int StatusId;
    private int Name;
    private String Color;
    private String Description;

    public Status(int statusId, int name,
                  String color,
                  String description) {
        StatusId = statusId;
        Name = name;
        Color = color;
        Description = description;
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
