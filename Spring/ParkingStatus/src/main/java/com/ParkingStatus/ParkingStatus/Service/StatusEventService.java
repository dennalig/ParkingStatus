package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEventDate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusEventService {

    public StatusEventService() {
    }

    public List<StatusEvent> getAllStatusEvents(){
        return null;
    }

    public List<StatusEvent> getAllStatusEventsOfStatus(int statusId){
        return null;
    }

    public StatusEvent getStatusEventById(int id){
        return null;
    }

    public void createStatusEvent(int id, int statusId, String description,
                                  List<StatusEventDate> statusEventDates){

    }

    public void updateStatusEvent(int id, StatusEvent statusEvent){

    }

    public void deleteStatusEvent(int id){

    }
}
