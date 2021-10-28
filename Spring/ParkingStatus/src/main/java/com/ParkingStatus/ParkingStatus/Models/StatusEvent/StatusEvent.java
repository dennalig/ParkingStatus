package com.ParkingStatus.ParkingStatus.Models.StatusEvent;

import java.io.File;
import java.util.List;

public class StatusEvent {

    private int StatusEventId;
    private String Description;
    private int StatusId;
    private String StatusEventImageName;
    private File StatusEventImage;

    public StatusEvent(int statusEventId, String description, int statusId,
                       String statusEventImageName, File statusEventImage) {
        StatusEventId = statusEventId;
        Description = description;
        StatusId = statusId;
        StatusEventImageName = statusEventImageName;
        StatusEventImage = statusEventImage;
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

    @Override
    public String toString() {
        return "StatusEvent{" +
                "StatusEventId=" + StatusEventId +
                ", Description='" + Description + '\'' +
                ", StatusId=" + StatusId +

                '}';
    }
}
