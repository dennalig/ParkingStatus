package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.ILotRepository;
import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.LotDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LotService {

//    private final LotDataAccessService lotDataAccessService;

    @Autowired
    ILotRepository LotRepository;

    public LotService(ILotRepository lotRepository) {
        LotRepository = lotRepository;
    }

    public List<Lot> getAllLots(){
        return List.of(
                new Lot(1, "name", "Description", "LotImageName", null)
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
