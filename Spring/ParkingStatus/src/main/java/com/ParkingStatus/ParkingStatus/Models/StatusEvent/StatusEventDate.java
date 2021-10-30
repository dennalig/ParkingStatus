package com.ParkingStatus.ParkingStatus.Models.StatusEvent;

import java.time.LocalDateTime;

public class StatusEventDate {

    private int StatusEventDateId;
    private LocalDateTime StartTime;
    private LocalDateTime EndTime;
    private int StatusId;
    private int StatusEventId;

    public StatusEventDate(){}

    public StatusEventDate(int statusEventDateId,
                           LocalDateTime startTime,
                           LocalDateTime endTime,
                           int statusId,
                           int statusEventId) {
        StatusEventDateId = statusEventDateId;
        StartTime = startTime;
        EndTime = endTime;
        StatusId = statusId;
        StatusEventId = statusEventId;
    }

    public int getStatusEventDateId() {
        return StatusEventDateId;
    }

    public void setStatusEventDateId(int statusEventDateId) {
        StatusEventDateId = statusEventDateId;
    }

    public LocalDateTime getStartTime() {
        return StartTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        StartTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return EndTime;
    }

    public void setEndTime(LocalDateTime endTime) {
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
