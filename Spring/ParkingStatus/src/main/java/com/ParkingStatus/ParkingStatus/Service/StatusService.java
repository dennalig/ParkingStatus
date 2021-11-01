package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.Status.StatusDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusService {

    @Autowired
    private final StatusDataAccessService statusDataAccessService;

    @Autowired
    public StatusService(StatusDataAccessService statusDataAccessService){
        this.statusDataAccessService = statusDataAccessService;
    }

    public List<Status> getAllStatuses(){
        return statusDataAccessService.selectAllStatuses();
    }

    public Status getStatusById(int id){
        return statusDataAccessService.selectStatusById(id);
    }

    public void createStatus(Status status){
        statusDataAccessService.insertStatus(status);
    }

    public void updateStatus(int id, Status status){

    }

    public void deleteStatus(int id){
        statusDataAccessService.removeStatus(id);
    }


}
