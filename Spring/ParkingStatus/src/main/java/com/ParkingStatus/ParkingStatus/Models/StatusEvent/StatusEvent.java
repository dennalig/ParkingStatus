package com.ParkingStatus.ParkingStatus.Models.StatusEvent;

import java.util.List;

public class StatusEvent {

    private int StatusEventId;
    private String Description;
    private int StatusId;


    public StatusEvent(int statusEventId, String description,
                       int statusId,
                       List<StatusEventDate> statusEventDates) {
        StatusEventId = statusEventId;
        Description = description;
        StatusId = statusId;

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



    @Override
    public String toString() {
        return "StatusEvent{" +
                "StatusEventId=" + StatusEventId +
                ", Description='" + Description + '\'' +
                ", StatusId=" + StatusId +

                '}';
    }
}
