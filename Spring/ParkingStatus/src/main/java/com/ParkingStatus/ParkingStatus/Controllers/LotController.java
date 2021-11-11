package com.ParkingStatus.ParkingStatus.Controllers;


import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;

import com.ParkingStatus.ParkingStatus.ResponseEntities.ResponseEntityForController;
import com.ParkingStatus.ParkingStatus.Service.LotService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/lots")
public class LotController {

    @Autowired
    private final LotService lotService;

    private ResponseEntityForController responseEntityForController =
            new ResponseEntityForController();



    @Autowired
    public LotController(LotService lotService) {
        this.lotService = lotService;
    }

    @GetMapping
     public List<Lot> getAllLots(){
//        System.out.println(lotService.getAllLots().get(0).getLotID());
        return lotService.getAllLots();

     }

     @GetMapping(path = "{lotId}")
     public Lot getLotByID(@PathVariable("lotId") int id){
        return lotService.getLotByID(id);
        // returns 404 if invalid
     }

     @PostMapping
     public ResponseEntity<Object> createLot(@RequestBody Lot lot){
        int response = lotService.createLot(lot);

         return responseEntityForController.responseForObjects(response);
     }

     @PostMapping(path ="{lotId}")
     public ResponseEntity<Object> updateLot(@PathVariable("lotId")int id, @RequestBody Lot lot){
        int response = lotService.updateLot(id, lot);

        return responseEntityForController.responseForObjects(response);
     }

     @DeleteMapping("{lotId}")
     public ResponseEntity<Object> deleteLot(@PathVariable("lotId")int id){
        int response = lotService.deleteLot(id);

         return responseEntityForController.responseForObjects(response);
     }


}

