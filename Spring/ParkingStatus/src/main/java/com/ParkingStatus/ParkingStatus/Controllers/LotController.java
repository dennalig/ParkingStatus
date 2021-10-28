package com.ParkingStatus.ParkingStatus.Controllers;


import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import com.ParkingStatus.ParkingStatus.Service.LotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
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

//        Connection testConnection = getConnectionToDB();
        return lotService.getAllLots();
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

     public Connection getConnectionToDB(){
        try{
            Connection conn = DriverManager.getConnection(
               "jdbc:sqlserver://DESKTOP-7ACTRJE",
               "sa",
               ""
            );

            return conn;
        }
        catch(Exception e){
            return null;
        }
     }

}

