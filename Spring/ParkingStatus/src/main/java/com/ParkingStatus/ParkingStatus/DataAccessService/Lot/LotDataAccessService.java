package com.ParkingStatus.ParkingStatus.DataAccessService.Lot;

import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusSchedule;
import com.ParkingStatus.ParkingStatus.Models.Lot.LotStatusScheduleDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
            lotList.add(mapLotFromDB(map));
        }

       return lotList;
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
        //https://www.techonthenet.com/sql/select_limit.php
        String scheduleQuery = "SELECT LotStatusScheduleID, LotID, Name " +
                "FROM lotStatusSchedule " +
                "WHERE LotID = " +
                lot.getLotID() +
                "LIMIT 1 ;";

        List<Map<String, Object>> queriedSchedule = jdbcTemplate.queryForList(scheduleQuery);
        lot.setLotStatusSchedule(mapLotStatusScheduleFromDB(queriedSchedule.get(0)));

        //TODO: set Image value here also

//        System.out.println(dbMap.get("lotdescription"));

        return lot;
    }

    public LotStatusSchedule mapLotStatusScheduleFromDB(Map<String, Object> dbMapForSchedule){
        LotStatusSchedule lotStatusSchedule = new LotStatusSchedule();
        lotStatusSchedule.setLotStatusScheduleId((Integer)
                dbMapForSchedule.get("lotstatusscheduleid"));
        lotStatusSchedule.setLotId((Integer) dbMapForSchedule.get("lotid"));
        lotStatusSchedule.setName(dbMapForSchedule.get("Name") == null ?
                "" : (String)dbMapForSchedule.get("Name"));
//        System.out.println(lotStatusSchedule.getName());

        //init lotstatusscheduledates list
        lotStatusSchedule.LotStatusScheduleDates = new ArrayList<LotStatusScheduleDate>();

        String scheduleDateQuery = "SELECT * " +
                "FROM lotStatusScheduleDate " +
                "WHERE LotStatusScheduleId = " +
                lotStatusSchedule.getLotStatusScheduleId() + "; ";

        List<Map<String, Object>> queriedSchedDates = jdbcTemplate.queryForList(scheduleDateQuery);

        for(Map<String, Object> map: queriedSchedDates){
            // add dates here
            lotStatusSchedule.LotStatusScheduleDates.add(
                    mapLotStatusScheduleDatesFromDB(map)
            );
        }




        return lotStatusSchedule;
    }

    public LotStatusScheduleDate mapLotStatusScheduleDatesFromDB(Map<String, Object>
                                                                         dbMapForScheduleDate){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

        LotStatusScheduleDate lotStatusScheduleDate = new LotStatusScheduleDate();
     lotStatusScheduleDate.setLotStatusScheduleDateId((Integer)dbMapForScheduleDate.get("lotstatusScheduleDateId"));

     lotStatusScheduleDate.setStartTime(LocalDateTime.parse(
             (String)dbMapForScheduleDate.get("starttime"),
             formatter));

     lotStatusScheduleDate.setEndTime(LocalDateTime.parse(
                (String)dbMapForScheduleDate.get("endtime"),
                formatter));

     lotStatusScheduleDate.setStatusId((Integer) dbMapForScheduleDate.get("statusid"));
     lotStatusScheduleDate.setLotStatusScheduleId((Integer)
             dbMapForScheduleDate.get("lotStatusScheduleId"));

//     System.out.println(lotStatusScheduleDate.getStartTime());
     //TODO: Consider recurring dates and specifying it on a 7-day schedule
     //yyyy-MM-dd HH:mm



     return lotStatusScheduleDate;
    }
}
