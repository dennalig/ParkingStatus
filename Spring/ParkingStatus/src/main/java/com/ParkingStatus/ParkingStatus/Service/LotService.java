package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.LotDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LotService {

    @Autowired
    private final LotDataAccessService lotDataAccessService;

    @Autowired
    public LotService(LotDataAccessService lotDataAccessService) {

        this.lotDataAccessService = lotDataAccessService;
    }


    public List<Lot> getAllLots(){
//        lotDataAccessService.selectAllLots().forEach(System.out::println);
        return lotDataAccessService.selectAllLots();
    }

    public Lot getLotByID(int id){
        return lotDataAccessService.selectLotById(id);
    }

    public int createLot(Lot lot){

        return lotDataAccessService.insertLot(lot);
    }

    public int updateLot(int id, Lot lot){
        return lotDataAccessService.updateLot(id, lot);
    }

    public int deleteLot(int id){
        return lotDataAccessService.removeLot(id);
    }
}
