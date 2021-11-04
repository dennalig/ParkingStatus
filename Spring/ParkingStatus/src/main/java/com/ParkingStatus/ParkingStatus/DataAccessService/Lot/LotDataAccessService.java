package com.ParkingStatus.ParkingStatus.DataAccessService.Lot;

import com.ParkingStatus.ParkingStatus.DataAccessService.GenericClass;
import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.InsertDataMappers.LotInsertDataMapper;
import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.InsertDataMappers.LotStatusScheduleDateInsertDataMapper;
import com.ParkingStatus.ParkingStatus.DataAccessService.Lot.InsertDataMappers.LotStatusScheduleInsertDataMapper;
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

    private static final GenericClass genericClass = new GenericClass();



    @Autowired
    public LotDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Lot> selectAllLots(){
       String sql = "SELECT lotId, lotName, lotDescription, LotImageName FROM lot;";

       List<Map<String, Object>> queriedLots = jdbcTemplate.queryForList(sql);

//       queriedLots.forEach(System.out::println);

        List<Lot> lotList = new ArrayList<>();

        for(Map<String, Object> map: queriedLots){
            lotList.add(mapSelectLotFromDB(map));
        }

       return lotList;
     }

    public Lot selectLotById(int id){
        String queryOneLot = "SELECT * FROM lot " +
                "WHERE lotid = " +
                id+" ;";
        List<Map<String, Object>> queriedLotObject =
                jdbcTemplate.queryForList(queryOneLot);


        if(queriedLotObject.size() != 0){
            Lot queriedLot = mapSelectLotFromDB(queriedLotObject.get(0));

            //TODO: Return one lot
            return queriedLot;
        }

        return null;

    }

   public int insertLot(Lot lot){


        if(selectLotById(lot.getLotID()) == null){
            LotInsertDataMapper lotInsertDataMapper = new LotInsertDataMapper(
                    lot.getLotID(), lot.getLotName(), lot.getLotDescription(),
                    lot.getLotImageName()
            );
            System.out.println(lot.getLotID());
            //Insert the new lot first
            String insertLotSql = "INSERT INTO lot VALUES("+
                    lotInsertDataMapper.getId() + ","+
                    lotInsertDataMapper.getName() +","+
                    lotInsertDataMapper.getDescription()+","+
                    lotInsertDataMapper.getImageName()+
                    ");";
            System.out.println(insertLotSql);
            jdbcTemplate.update(insertLotSql);

            if(lot.getLotStatusSchedule() != null){ // checking for a lotstatusschedule
                LotStatusSchedule newLotSchedule = lot.getLotStatusSchedule();

                LotStatusScheduleInsertDataMapper lotStatusScheduleInsertDataMapper =
                        new LotStatusScheduleInsertDataMapper(
                                newLotSchedule.getLotStatusScheduleId(),
                                newLotSchedule.getLotId(),
                                newLotSchedule.getName()
                        );

                //insert an entry into the lotstatusschedule table
                String insertScheduleSql = "INSERT INTO lotstatusschedule VALUES("+
                        lotStatusScheduleInsertDataMapper.getId()+","+
                        lotStatusScheduleInsertDataMapper.getLotId()+","+
                        lotStatusScheduleInsertDataMapper.getName()+
                        ");";

                jdbcTemplate.update(insertScheduleSql);
            }

            if(lot.getLotStatusSchedule().getLotStatusScheduleDates() != null){
                // checking for existing lotstatusscheduledates in the schedule
                 List<LotStatusScheduleDate> newLSSDates = lot.getLotStatusSchedule().
                         getLotStatusScheduleDates();

                 for(LotStatusScheduleDate date: newLSSDates){
                     // new insert statement for each date entry

                     LotStatusScheduleDateInsertDataMapper lotStatusScheduleDateInsertDataMapper =
                             new LotStatusScheduleDateInsertDataMapper(
                               date.getLotStatusScheduleDateId(),
                               date.getStartTime(),
                               date.getEndTime(),
                               date.getLotStatusScheduleId(),
                               date.getStatusId()
                             );

                     String insertNewDateSql = "INSERT INTO lotstatusscheduledate VALUES("+
                             lotStatusScheduleDateInsertDataMapper.getId()+","+
                             lotStatusScheduleDateInsertDataMapper.getStartTime()+","+
                             lotStatusScheduleDateInsertDataMapper.getEndTime()+","+
                             lotStatusScheduleDateInsertDataMapper.getLotStatusScheduleId()+","+
                             lotStatusScheduleDateInsertDataMapper.getStatusId()+
                             ");";

                     jdbcTemplate.update(insertNewDateSql);
                 }

            }


            return lot.getLotID();
        }

        // returns an already inserted exception
        return -1;
    }

    public int updateLot(int id, Lot lot){

        //TODO: Return one id
        return 0;
    }

    public int removeLot(int id){

        //need to make proper reference
        Lot deleteLot = selectLotById(id);

        //here we match lotstatusschedule id's
        String deleteLSSDQuery = "DELETE FROM lotstatusscheduledate WHERE "+
                "lotstatusscheduleid = "+deleteLot.getLotStatusSchedule().getLotStatusScheduleId()
                +";";
        jdbcTemplate.update(deleteLSSDQuery);

        String deleteLSSQuery = "DELETE FROM lotstatusschedule WHERE "+
                "lotid = "+id
                +";";

        jdbcTemplate.update(deleteLSSQuery);

        String deleteLotQuery = "DELETE FROM lot WHERE "+
                "lotid = "+id
                +";";
        jdbcTemplate.update(deleteLotQuery);
        //TODO: Cascade delete
        return id;
    }

    //mapping methods

    public Lot mapSelectLotFromDB(Map<String, Object>dbMap){
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

        //check for nulls
        if(queriedSchedule.size() != 0){
            lot.setLotStatusSchedule(mapSelectLotStatusScheduleFromDB(queriedSchedule.get(0)));
        }


        //TODO: set Image value here also

//        System.out.println(dbMap.get("lotdescription"));

        return lot;
    }

    public LotStatusSchedule mapSelectLotStatusScheduleFromDB(Map<String, Object> dbMapForSchedule){
        LotStatusSchedule lotStatusSchedule = new LotStatusSchedule();
        lotStatusSchedule.setLotStatusScheduleId((Integer)
                dbMapForSchedule.get("lotstatusscheduleid"));
        lotStatusSchedule.setLotId((Integer) dbMapForSchedule.get("lotid"));
        lotStatusSchedule.setName(dbMapForSchedule.get("Name") == null ?
                "" : (String)dbMapForSchedule.get("Name"));
//        System.out.println(lotStatusSchedule.getName());

        //init lotstatusscheduledates list
        lotStatusSchedule.LotStatusScheduleDates = new ArrayList<>();

        String scheduleDateQuery = "SELECT * " +
                "FROM lotStatusScheduleDate " +
                "WHERE LotStatusScheduleId = " +
                lotStatusSchedule.getLotStatusScheduleId() + "; ";

        List<Map<String, Object>> queriedSchedDates = jdbcTemplate.queryForList(scheduleDateQuery);

        if(queriedSchedDates.size() != 0){
            for(Map<String, Object> map: queriedSchedDates){
                // add dates here
                lotStatusSchedule.LotStatusScheduleDates.add(
                        mapSelectLotStatusScheduleDatesFromDB(map)
                );
            }
        }

        return lotStatusSchedule;
    }

    public LotStatusScheduleDate mapSelectLotStatusScheduleDatesFromDB(Map<String, Object>
                                                                         dbMapForScheduleDate){

        LotStatusScheduleDate lotStatusScheduleDate = new LotStatusScheduleDate();
     lotStatusScheduleDate.setLotStatusScheduleDateId((Integer)dbMapForScheduleDate.get("lotstatusScheduleDateId"));

     lotStatusScheduleDate.setStartTime(
             (String)dbMapForScheduleDate.get("starttime"));

     lotStatusScheduleDate.setEndTime(
                (String)dbMapForScheduleDate.get("endtime"));

     lotStatusScheduleDate.setStatusId((Integer) dbMapForScheduleDate.get("statusid"));
     lotStatusScheduleDate.setLotStatusScheduleId((Integer)
             dbMapForScheduleDate.get("lotStatusScheduleId"));

//     System.out.println(lotStatusScheduleDate.getStartTime());
     //TODO: Consider recurring dates and specifying it on a 7-day schedule
     //yyyy-MM-dd HH

     return lotStatusScheduleDate;
    }


}
