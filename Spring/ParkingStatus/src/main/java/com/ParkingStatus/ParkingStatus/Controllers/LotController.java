package com.ParkingStatus.ParkingStatus.Controllers;


import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusSchedule;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusScheduleDate;
import com.ParkingStatus.ParkingStatus.Service.LotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path ="api/v1/lots")
public class LotController {

    @Autowired
    private final LotService lotService;


    @Autowired
    public LotController(LotService lotService) {
        this.lotService = lotService;
    }

    @GetMapping
     public List<Lot> getAllLots(){
//        System.out.println(lotService.getAllLots().get(0).getLotID());
        return lotService.getAllLots();
//        List<Lot> lots = new ArrayList<Lot>();
//        List<LotStatusScheduleDate> schedDates = new ArrayList<LotStatusScheduleDate>();
//
//        schedDates.add(new LotStatusScheduleDate(1, null, null, 1, 1) );
//        schedDates.add(new LotStatusScheduleDate(2, null, null, 2, 1));
//
//        lots.add(new Lot(1, "", "", "", null,
//                new LotStatusSchedule(1, "name", 1, schedDates
//                        )));
//        return lots;
     }

     @GetMapping(path = "{lotId}")
     public Lot getLotByID(@PathVariable("lotId") int id){
        return lotService.getLotByID(id);
     }

     @PostMapping
     public void createLot(@RequestBody Lot lot){
        lotService.createLot(lot);
     }

     @PostMapping(path ="{lotId}")
     public void updateLot(@PathVariable("lotId")int id, @RequestBody Lot lot){
        lotService.updateLot(id, lot);
     }

     @DeleteMapping("{lotId}")
     public void deleteLot(@PathVariable("lotId")int id){
        lotService.deleteLot(id);
     }


}

