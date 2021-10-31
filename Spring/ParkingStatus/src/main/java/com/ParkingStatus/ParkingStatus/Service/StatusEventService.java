package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent.StatusEventDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEventDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusEventService {

    @Autowired
    private final StatusEventDataAccessService statusEventDataAccessService;

    @Autowired
    public StatusEventService(StatusEventDataAccessService statusEventDataAccessService) {
        this.statusEventDataAccessService = statusEventDataAccessService;
    }

    public List<StatusEvent> getAllStatusEvents(){
        return statusEventDataAccessService.selectAllStatusEvents() ;
    }

    public List<StatusEvent> getAllStatusEventsOfStatus(int statusId){
        return statusEventDataAccessService.selectAllStatusEventsOfStatus(statusId);
    }

    public StatusEvent getStatusEventById(int id){
        return statusEventDataAccessService.selectStatusEventById(id);
    }

    public void createStatusEvent(StatusEvent statusEvent){

    }

    public void updateStatusEvent(int id, StatusEvent statusEvent){

    }

    public void deleteStatusEvent(int id){

    }
}
