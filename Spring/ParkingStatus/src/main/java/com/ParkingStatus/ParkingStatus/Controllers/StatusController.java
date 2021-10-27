package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import com.ParkingStatus.ParkingStatus.Service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
