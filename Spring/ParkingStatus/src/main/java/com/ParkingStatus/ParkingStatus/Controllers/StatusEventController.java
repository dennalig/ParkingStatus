package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.ResponseEntities.ResponseEntityForController;
import com.ParkingStatus.ParkingStatus.Service.StatusEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping(path ="api/v1/statusevents")
public class StatusEventController {

    @Autowired
    private final StatusEventService statusEventService;

    private ResponseEntityForController responseEntityForController =
            new ResponseEntityForController();

    @Autowired
    public StatusEventController(StatusEventService statusEventService) {
        this.statusEventService = statusEventService;
    }

    @GetMapping
    public List<StatusEvent> getAllStatusEvents(){
        return statusEventService.getAllStatusEvents();
    }

    @GetMapping(path ="status/{statusId}")
    public List<StatusEvent> getAllStatusEventsOfStatus(@PathVariable("statusId") int statusId){
        return statusEventService.getAllStatusEventsOfStatus(statusId);

    }

    @GetMapping(path ="{statusEventId}")
    public StatusEvent getStatusEventById(@PathVariable("statusEventId") int id){
        return statusEventService.getStatusEventById(id);

    }

    @PostMapping
    public ResponseEntity<Object> createStatusEvent(@RequestBody StatusEvent statusEvent){
        int response = statusEventService.createStatusEvent(statusEvent);

        return responseEntityForController.responseForObjects(response);
    }

    @PostMapping(path ="{statusEventId}")
    public ResponseEntity<Object> updateStatusEvent(@PathVariable("statusEventId")int id, @RequestBody StatusEvent statusEvent){
        int response = statusEventService.updateStatusEvent(id, statusEvent);

        return responseEntityForController.responseForObjects(response);
    }

    @DeleteMapping("{statusEventId}")
    public ResponseEntity<Object> deleteStatusEvent(@PathVariable("statusEventId")int id){
        int response = statusEventService.deleteStatusEvent(id);

        return responseEntityForController.responseForObjects(response);
    }
}
