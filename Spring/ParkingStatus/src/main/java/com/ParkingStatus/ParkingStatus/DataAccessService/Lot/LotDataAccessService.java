package com.ParkingStatus.ParkingStatus.DataAccessService.Lot;

import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusSchedule;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusScheduleDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class LotDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LotDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Lot> selectAllLots(){
       String sql = "SELECT lotId, lotName, lotDescription, LotImageName FROM lot;";

       List<Map<String, Object>> queriedLots = jdbcTemplate.queryForList(sql);

//       queriedLots.forEach(System.out::println);

        List<Lot> lotList = new ArrayList<Lot>();

        for(Map<String, Object> map: queriedLots){
            mapLotFromDB(map);
        }
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

    public Lot mapLotFromDB(Map<String, Object>dbMap){
        Lot lot = new Lot();
        lot.setLotID((Integer) dbMap.get("lotid"));
        lot.setLotName((String) dbMap.get("lotname"));
        lot.setLotDescription(dbMap.get("lotdescription") == null ? ""
                :(String)dbMap.get("lotdescription"));
        lot.setLotImageName(dbMap.get("lotimagename") == null ? ""
                : (String)dbMap.get("lotimagename"));

        //TODO: Define mapping of lotstatusschedules also

        //TODO: set Image value here also

//        System.out.println(dbMap.get("lotdescription"));

        return null;
    }

    public LotStatusSchedule mapLotStatusScheduleFromDB(Map<String, Object> dbMapForSchedule){
        LotStatusSchedule lotStatusSchedule = new LotStatusSchedule();

        return lotStatusSchedule;
    }

    public List<LotStatusScheduleDate> mapLotStatusScheduleDatesFromDB(Map<String, Object> dbMapForSchedule){
     List<LotStatusScheduleDate> lotStatusScheduleDates = new ArrayList<LotStatusScheduleDate>();

     return lotStatusScheduleDates;
    }
}
