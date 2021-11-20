package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import com.ParkingStatus.ParkingStatus.ResponseEntities.ResponseEntityForController;
import com.ParkingStatus.ParkingStatus.Service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping(path ="api/v1/status")
public class StatusController {
    private final StatusService statusService;

    private ResponseEntityForController responseEntityForController =
            new ResponseEntityForController();

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
         Status foundStatus = statusService.getStatusById(id);

        return foundStatus;

    }

    @PostMapping
    public ResponseEntity<Object> createStatus(@RequestBody Status status){
//        System.out.println(status.getStatusId());
        int response = statusService.createStatus(status);

        return responseEntityForController.responseForObjects(response);
    }

    @PostMapping(path ="{statusId}")
    public ResponseEntity<Object> updateStatus(@PathVariable("statusId")int id, @RequestBody Status status){
        int response = statusService.updateStatus(id, status);

        return responseEntityForController.responseForObjects(response);
    }

    @DeleteMapping("{statusId}")
    public ResponseEntity<Object> deleteStatus(@PathVariable("statusId")int id){
        int response = statusService.deleteStatus(id);

        return responseEntityForController.responseForObjects(response);
    }

}
