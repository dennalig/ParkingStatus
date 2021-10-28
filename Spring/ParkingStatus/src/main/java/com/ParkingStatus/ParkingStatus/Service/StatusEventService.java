package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent.StatusEventDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEventDate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusEventService {

    private final StatusEventDataAccessService statusEventDataAccessService;
    public StatusEventService(StatusEventDataAccessService statusEventDataAccessService) {
        this.statusEventDataAccessService = statusEventDataAccessService;
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

    public void createStatusEvent(StatusEvent statusEvent){

    }

    public void updateStatusEvent(int id, StatusEvent statusEvent){

    }

    public void deleteStatusEvent(int id){

    }
}
