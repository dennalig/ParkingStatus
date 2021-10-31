package com.ParkingStatus.ParkingStatus.Models.Lot;

import java.time.LocalDateTime;

public class LotStatusScheduleDate {

    private int LotStatusScheduleDateId;
    private String StartTime;
    private String EndTime;
    private int StatusId;
    private int LotStatusScheduleId;

    public LotStatusScheduleDate(){}
    public LotStatusScheduleDate(int lotStatusScheduleDateId, String startTime,
                                 String endTime,
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
