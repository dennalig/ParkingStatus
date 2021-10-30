package com.ParkingStatus.ParkingStatus.DataAccessService.Lot;

import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LotDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LotDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Lot> selectAllLots(){
       return null;
    }

    public Lot selectLotById(){
        return null;
    }

   public int insertLot(Lot lot){
        return 0;
    }

    public int updateLot(int id, Lot lot){
        return 0;
    }

    public int removeLot(int id){
        return 0;
    }
}
