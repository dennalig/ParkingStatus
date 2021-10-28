package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.LotDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LotService {

    private final LotDataAccessService lotDataAccessService;

    public LotService(LotDataAccessService lotDataAccessService) {
        this.lotDataAccessService = lotDataAccessService;
    }

    public List<Lot> getAllLots(){
        return List.of(
                new Lot(1, "name", "Description")
        );
    }

    public Lot getLotByID(int id){
        return null;
    }

    public void createLot(Lot lot){

    }

    public void updateLot(int id, Lot lot){

    }

    public void deleteLot(int id){

    }
}
