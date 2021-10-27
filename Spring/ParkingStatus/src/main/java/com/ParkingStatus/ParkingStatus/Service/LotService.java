package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.LotDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;

import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusSchedule;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusScheduleDate;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    public void createLot(int id, String name, String description, LotStatusSchedule lotStatusSchedule){

    }

    public void updateLot(int id, Lot lot){

    }

    public void deleteLot(int id){

    }
}
