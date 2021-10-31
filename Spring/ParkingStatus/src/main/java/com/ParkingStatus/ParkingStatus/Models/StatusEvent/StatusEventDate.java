package com.ParkingStatus.ParkingStatus.Models.StatusEvent;

import java.time.LocalDateTime;

public class StatusEventDate {

    private int StatusEventDateId;
    private String StartTime;
    private String EndTime;
    private int StatusId;
    private int StatusEventId;
    private int LotId;


    public StatusEventDate(){}


    public StatusEventDate(int statusEventDateId, String startTime,
                           String endTime, int statusId,
                           int statusEventId, int lotId) {
        StatusEventDateId = statusEventDateId;
        StartTime = startTime;
        EndTime = endTime;
        StatusId = statusId;
        StatusEventId = statusEventId;
        LotId = lotId;
    }

    public int getStatusEventDateId() {
        return StatusEventDateId;
    }

    public void setStatusEventDateId(int statusEventDateId) {
        StatusEventDateId = statusEventDateId;
    }

    public String getStartTime() {
        return StartTime;
    }

    public void setStartTime(String startTime) {
        StartTime = startTime;
    }

    public String getEndTime() {
        return EndTime;
    }

    public void setEndTime(String endTime) {
        EndTime = endTime;
    }

    public int getStatusId() {
        return StatusId;
    }

    public void setStatusId(int statusId) {
        StatusId = statusId;
    }

    public int getStatusEventId() {
        return StatusEventId;
    }

    public void setStatusEventId(int statusEventId) {
        StatusEventId = statusEventId;
    }

    public int getLotId() {
        return LotId;
    }

    public void setLotId(int lotId) {
        LotId = lotId;
    }

    @Override
    public String toString() {
        return "StatusEventDate{" +
                "StatusEventDateId=" + StatusEventDateId +
                ", StartTime=" + StartTime +
                ", EndTime=" + EndTime +
                ", StatusId=" + StatusId +
                ", StatusEventId=" + StatusEventId +
                '}';
    }
}
