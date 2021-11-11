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

    public int createStatus(Status status){
       return statusDataAccessService.insertStatus(status);
    }

    public int updateStatus(int id, Status status){
       return statusDataAccessService.updateStatus(id,status);
    }

    public int deleteStatus(int id){
       return statusDataAccessService.removeStatus(id);
    }


}
