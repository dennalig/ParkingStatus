package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.Service.StatusEventService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/statusevents")
public class StatusEventController {

    private final StatusEventService statusEventService;

    public StatusEventController(StatusEventService statusEventService) {
        this.statusEventService = statusEventService;
    }

    @GetMapping
    public List<StatusEvent> getAllStatusEvents(){
        return statusEventService.getAllStatusEvents();
    }
}
