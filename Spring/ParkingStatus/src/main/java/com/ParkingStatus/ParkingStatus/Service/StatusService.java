package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.Status.StatusDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusService {

    private final StatusDataAccessService statusDataAccessService;
    public StatusService(StatusDataAccessService statusDataAccessService){
        this.statusDataAccessService = statusDataAccessService;
    }

    public List<Status> getAllStatuses(){
        return null;
    }

    public Status getStatusById(int id){
        return null;
    }

    public void createStatus(Status status){

    }

    public void updateStatus(int id, Status status){

    }

    public void deleteStatus(int id){

    }


}
