package com.ParkingStatus.ParkingStatus.Models.Lot;

import java.time.LocalDateTime;

public class LotStatusScheduleDate {

    private int LotStatusScheduleDateId;
    private LocalDateTime StartTime;
    private LocalDateTime EndTime;
    private int StatusId;
    private int LotStatusScheduleId;

    public LotStatusScheduleDate(){}
    public LotStatusScheduleDate(int lotStatusScheduleDateId, LocalDateTime startTime,
                                 LocalDateTime endTime,
                                 int statusId,
                                 int lotStatusScheduleId) {
        LotStatusScheduleDateId = lotStatusScheduleDateId;
        StartTime = startTime;
        EndTime = endTime;
        StatusId = statusId;
        LotStatusScheduleId = lotStatusScheduleId;
    }

    public int getLotStatusScheduleDateId() {
        return LotStatusScheduleDateId;
    }

    public void setLotStatusScheduleDateId(int lotStatusScheduleDateId) {
        LotStatusScheduleDateId = lotStatusScheduleDateId;
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

    public int getLotStatusScheduleId() {
        return LotStatusScheduleId;
    }

    public void setLotStatusScheduleId(int lotStatusScheduleId) {
        LotStatusScheduleId = lotStatusScheduleId;
    }

    @Override
    public String toString() {
        return "LotStatusScheduleDate{" +
                "LotStatusScheduleDateId=" + LotStatusScheduleDateId +
                ", StartTime=" + StartTime +
                ", EndTime=" + EndTime +
                ", StatusId=" + StatusId +
                ", LotStatusScheduleId=" + LotStatusScheduleId +
                '}';
    }
}
