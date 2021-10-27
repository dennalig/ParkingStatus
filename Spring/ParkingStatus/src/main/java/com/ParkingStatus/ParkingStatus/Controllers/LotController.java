package com.ParkingStatus.ParkingStatus.Controllers;


import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import com.ParkingStatus.ParkingStatus.Service.LotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/lots")
public class LotController {

    private final LotService lotService;

    @Autowired
    public LotController(LotService lotService) {
        this.lotService = lotService;
    }

    @GetMapping
     public List<Lot> getAllLots(){
        return lotService.getAllLots();
     }
}
