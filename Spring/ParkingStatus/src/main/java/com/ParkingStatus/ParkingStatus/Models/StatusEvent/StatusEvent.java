package com.ParkingStatus.ParkingStatus.Models.StatusEvent;

import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.io.File;
import java.util.List;

@JsonNaming(PropertyNamingStrategy.UpperCamelCaseStrategy.class)
public class StatusEvent {

    private int StatusEventId;
    private String Description;
    private int StatusId;
    private String StatusEventImageName;
    private File StatusEventImage;

    public List<StatusEventDate> StatusEventDates;

    public StatusEvent(){}

    public StatusEvent(int statusEventId, String description, int statusId,
                       String statusEventImageName, File statusEventImage,
                       List<StatusEventDate> statusEventDates) {
        StatusEventId = statusEventId;
        Description = description;
        StatusId = statusId;
        StatusEventImageName = statusEventImageName;
        StatusEventImage = statusEventImage;
        StatusEventDates = statusEventDates;
    }


    public int getStatusEventId() {
        return StatusEventId;
    }

    public void setStatusEventId(int statusEventId) {
        StatusEventId = statusEventId;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getStatusId() {
        return StatusId;
    }

    public void setStatusId(int statusId) {
        StatusId = statusId;
    }

    public String getStatusEventImageName() {
        return StatusEventImageName;
    }

    public void setStatusEventImageName(String statusEventImageName) {
        StatusEventImageName = statusEventImageName;
    }

    public File getStatusEventImage() {
        return StatusEventImage;
    }

    public void setStatusEventImage(File statusEventImage) {
        StatusEventImage = statusEventImage;
    }

    public List<StatusEventDate> getStatusEventDates() {
        return StatusEventDates;
    }

    public void setStatusEventDates(List<StatusEventDate> statusEventDates) {
        StatusEventDates = statusEventDates;
    }

    @Override
    public String toString() {
        return "StatusEvent{" +
                "StatusEventId=" + StatusEventId +
                ", Description='" + Description + '\'' +
                ", StatusId=" + StatusId +

                '}';
    }
}
