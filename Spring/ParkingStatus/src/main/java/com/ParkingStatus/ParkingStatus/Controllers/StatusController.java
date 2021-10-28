package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import com.ParkingStatus.ParkingStatus.Service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/statuses")
public class StatusController {
    private final StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService) {

        this.statusService = statusService;
    }

    @GetMapping
    public List<Status> getAllStatuses(){
        return statusService.getAllStatuses();
    }

    @GetMapping(path = "{statusId}")
    public Status getStatusById(@PathVariable("statusId")int id){
        return statusService.getStatusById(id);
    }

    @PostMapping
    public void createStatus(@RequestBody Status status){
        statusService.createStatus(status);
    }

    @PostMapping(path ="{statusId}")
    public void updateStatus(@PathVariable("statusId")int id, @RequestBody Status status){
        statusService.updateStatus(id, status);
    }

    @DeleteMapping("{statusId}")
    public void deleteStatus(@PathVariable("statusId")int id){
        statusService.deleteStatus(id);
    }

}
