package com.ParkingStatus.ParkingStatus.Models.Lot;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.util.List;

@JsonNaming(PropertyNamingStrategy.UpperCamelCaseStrategy.class)
public class LotStatusSchedule {

    private int LotStatusScheduleId;
    private String Name ;
    private int LotId;
    public List<LotStatusScheduleDate> LotStatusScheduleDates;

    public LotStatusSchedule(){}
    public LotStatusSchedule(int lotStatusScheduleId, String name, int lotId,
                             List<LotStatusScheduleDate> lotStatusScheduleDates) {
        LotStatusScheduleId = lotStatusScheduleId;
        Name = name;
        LotId = lotId;
        LotStatusScheduleDates = lotStatusScheduleDates;

    }


    public int getLotStatusScheduleId() {
        return LotStatusScheduleId;
    }

    public void setLotStatusScheduleId(int lotStatusScheduleId) {
        LotStatusScheduleId = lotStatusScheduleId;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getLotId() {
        return LotId;
    }

    public void setLotId(int lotId) {
        LotId = lotId;
    }

    public List<LotStatusScheduleDate> getLotStatusScheduleDates() {
        return LotStatusScheduleDates;
    }

    public void setLotStatusScheduleDates(List<LotStatusScheduleDate> lotStatusScheduleDates) {
        LotStatusScheduleDates = lotStatusScheduleDates;
    }

    @Override
    public String toString() {
        return "LotStatusSchedule{" +
                "LotStatusScheduleId=" + LotStatusScheduleId +
                ", Name='" + Name + '\'' +
                ", LotId=" + LotId +
                '}';
    }
}
