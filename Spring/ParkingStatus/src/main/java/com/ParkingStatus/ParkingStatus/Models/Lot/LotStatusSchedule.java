package com.ParkingStatus.ParkingStatus.Models.Lot;

import java.util.List;

public class LotStatusSchedule {

    private int LotStatusScheduleId;
    private String Name ;
    private int LotId;
    private List<LotStatusScheduleDate> lotStatusScheduleDates;

    public LotStatusSchedule(int lotStatusScheduleId, String name, int lotId,
                             List<LotStatusScheduleDate> lotStatusScheduleDates) {
        LotStatusScheduleId = lotStatusScheduleId;
        Name = name;
        LotId = lotId;
        this.lotStatusScheduleDates = lotStatusScheduleDates;
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
        return lotStatusScheduleDates;
    }

    public void setLotStatusScheduleDates(List<LotStatusScheduleDate> lotStatusScheduleDates) {
        this.lotStatusScheduleDates = lotStatusScheduleDates;
    }

    @Override
    public String toString() {
        return "LotStatusSchedule{" +
                "LotStatusScheduleId=" + LotStatusScheduleId +
                ", Name='" + Name + '\'' +
                ", LotId=" + LotId +
                ", lotStatusScheduleDates=" + lotStatusScheduleDates +
                '}';
    }
}
