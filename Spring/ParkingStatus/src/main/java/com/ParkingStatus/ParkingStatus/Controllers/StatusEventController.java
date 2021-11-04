package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.Service.StatusEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/statusevents")
public class StatusEventController {

    @Autowired
    private final StatusEventService statusEventService;

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
    public void createStatusEvent(@RequestBody StatusEvent statusEvent){
        statusEventService.createStatusEvent(statusEvent);
    }

    @PostMapping(path ="{statusEventId}")
    public void updateStatusEvent(@PathVariable("statusEventId")int id, @RequestBody StatusEvent statusEvent){
        statusEventService.updateStatusEvent(id, statusEvent);
    }

    @DeleteMapping("{statusEventId}")
    public void deleteStatusEvent(@PathVariable("statusEventId")int id){
        statusEventService.deleteStatusEvent(id);
    }
}
