package com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent;

import com.ParkingStatus.ParkingStatus.DataAccessService.GenericClass;
import com.ParkingStatus.ParkingStatus.DataAccessService.Status.StatusDataAccessService;
import com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent.InsertDataMappers.StatusEventDateInsertDataMapper;
import com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent.InsertDataMappers.StatusEventInsertDataMapper;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEvent;
import com.ParkingStatus.ParkingStatus.Models.StatusEvent.StatusEventDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class StatusEventDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    private static final GenericClass genericClass = new GenericClass();

    @Autowired
    private final StatusDataAccessService statusDataAccessService;

    @Autowired
    public StatusEventDataAccessService(JdbcTemplate jdbcTemplate, StatusDataAccessService statusDataAccessService) {
        this.jdbcTemplate = jdbcTemplate;
        this.statusDataAccessService = statusDataAccessService;
    }

    public List<StatusEvent> selectAllStatusEvents(){
        String sql = "SELECT * FROM StatusEvent;";

        List<Map<String, Object>> queriedStatusEvents = jdbcTemplate.queryForList(sql);

        List<StatusEvent> statusEventList = new ArrayList<>();

        for(Map<String, Object> map: queriedStatusEvents){
            statusEventList.add(mapSelectStatusEventFromDB(map));
        }

        return statusEventList;
    }


    public List<StatusEvent> selectAllStatusEventsOfStatus(int statusId){

        if(statusDataAccessService.selectStatusById(statusId) == null ){
            return null;
        }

        String queryForStatus = "SELECT * FROM StatusEvent" +
                " WHERE statusId = " +
                statusId +
                ";";

        List<Map<String, Object>> queriedStatusEvents = jdbcTemplate.queryForList(queryForStatus);

        List<StatusEvent> statusEventList = new ArrayList<>();

        for(Map<String, Object> map: queriedStatusEvents){
            statusEventList.add(mapSelectStatusEventFromDB(map));
        }

        return statusEventList;
    }

    public StatusEvent selectStatusEventById(int id){
        String sql = "SELECT * FROM StatusEvent" +
                " WHERE" +
                " StatusEventID =" +
                id +" ;";

        List<Map<String, Object>> queriedOneStatusEvent = jdbcTemplate.queryForList(sql);

        if(queriedOneStatusEvent.size() != 0){
            StatusEvent statusEvent = new StatusEvent();

            statusEvent = mapSelectStatusEventFromDB(queriedOneStatusEvent.get(0));



            return statusEvent;
        }

        return null;
    }

    public int insertStatusEvent(StatusEvent statusEvent){
        //TODO: return actual id of created

        if(selectStatusEventById(statusEvent.getStatusEventId()) == null){

            StatusEventInsertDataMapper statusEventInsertDataMapper = new StatusEventInsertDataMapper(
                 statusEvent.getStatusEventId(), statusEvent.getDescription(),
                    statusEvent.getStatusId(), statusEvent.getStatusEventImageName()
            );

            //insert statusevent
            String insertSESql = "INSERT INTO statusevent VALUES("+
                    statusEventInsertDataMapper.getId()+","+
                    statusEventInsertDataMapper.getDescription()+","+
                    statusEventInsertDataMapper.getStatusId()+","+
                    statusEventInsertDataMapper.getStatusEventImageName()+
                    ");";

            System.out.println(insertSESql);
            jdbcTemplate.update(insertSESql);

            //insert statuseventdates
            if(statusEvent.getStatusEventDates() != null){
                List<StatusEventDate> newSEDDates = statusEvent.getStatusEventDates();

                for(StatusEventDate date: newSEDDates){

                    StatusEventDateInsertDataMapper statusEventDateInsertDataMapper =
                            new StatusEventDateInsertDataMapper(
                              date.getStatusEventDateId(), date.getStartTime(),
                                    date.getEndTime(), date.getStatusEventId(),
                                    date.getLotId()
                            );

                    String insertSEDSql = "INSERT INTO statuseventdate VALUES(Default,"+
                            statusEventDateInsertDataMapper.getStartTime()+","+
                            statusEventDateInsertDataMapper.getEndTime()+","+
                            statusEventDateInsertDataMapper.getStatusEventId()+","+
                            statusEventDateInsertDataMapper.getLotId()+
                            ");";

                    System.out.println(insertSEDSql);
                    jdbcTemplate.update(insertSEDSql);


                } //end loop
            }// end if statement


            return statusEvent.getStatusEventId(); // return new ID of statusevent
        }

        return -1;
    }

    public int updateStatusEvent(int id, StatusEvent statusEvent){
        //TODO: return actual id of created

        if(selectStatusEventById(id) != null){

            StatusEventInsertDataMapper statusEventInsertDataMapper =
                    new StatusEventInsertDataMapper(
                            statusEvent.getStatusEventId(),
                            statusEvent.getDescription(),
                            statusEvent.getStatusId(),
                            statusEvent.getStatusEventImageName()
                    );

            //TODO: Validate new StatusEventDate Id's in conditional then call the update query

            String updateStatusEventSql = "UPDATE statusevent set "+
                    "statuseventid ="+ statusEventInsertDataMapper.getId()+","+
                    "description ="+ statusEventInsertDataMapper.getDescription()+","+
                    "statusid ="+ statusEventInsertDataMapper.getStatusId()+","+
                    "statuseventimagename ="+ statusEventInsertDataMapper.getStatusEventImageName()+" "+

                    "WHERE statuseventid ="+ id;

            System.out.println(updateStatusEventSql);

            //update statusevent entry
            jdbcTemplate.update(updateStatusEventSql);

            List<StatusEventDate> currentStatusEventDates =
                    selectStatusEventById(id).getStatusEventDates();

            //check for current dates and delete
            if(currentStatusEventDates != null){
                String deleteSEDSql = "DELETE FROM statuseventdate WHERE "+
                        "statuseventid ="+ id +
                        ";";

                jdbcTemplate.update(deleteSEDSql);
            }

            List<StatusEventDate> updateStatusEventDates = statusEvent.getStatusEventDates();

            if(updateStatusEventDates != null){

                for(StatusEventDate date: updateStatusEventDates){

                    StatusEventDateInsertDataMapper statusEventDateInsertDataMapper =
                            new StatusEventDateInsertDataMapper(
                                    date.getStatusEventDateId(),
                                    date.getStartTime(),
                                    date.getEndTime(),
                                    date.getStatusEventId(),
                                    date.getLotId()
                            );

                    String insertSEDSql = "INSERT INTO statuseventdate VALUES(Default,"+
                            statusEventDateInsertDataMapper.getStartTime() +","+
                            statusEventDateInsertDataMapper.getEndTime() +","+
                            statusEventDateInsertDataMapper.getStatusEventId() +","+
                            statusEventDateInsertDataMapper.getLotId() +
                            ");";

                    System.out.println(insertSEDSql);

                    jdbcTemplate.update(insertSEDSql);



                } //end for
            }


            return id;
        }

        return -1;
    }

    public int removeStatusEvent(int id){

        if(selectStatusEventById(id) != null){
            String removeStatusEventDatesSql = "DELETE FROM statuseventdate WHERE "+
                    "statusEventid = "+ id +";";

            jdbcTemplate.update(removeStatusEventDatesSql);

            String removeStatusEventSql = "DELETE FROM statusevent WHERE "+
                    "statusEventid = "+ id +";";

            jdbcTemplate.update(removeStatusEventSql);


            return id;
        }

        return -1;

    }



    //mapping methods

    public StatusEvent mapSelectStatusEventFromDB(Map<String, Object> dbMapForStatusEvent) {
        StatusEvent statusEvent = new StatusEvent();

        statusEvent.setStatusEventId((Integer) dbMapForStatusEvent.get("statuseventid"));
        statusEvent.setDescription(dbMapForStatusEvent.get("description") == null ? "" :
                (String)dbMapForStatusEvent.get("description"));
        statusEvent.setStatusId((Integer) dbMapForStatusEvent.get("statusid"));
        statusEvent.setStatusEventImageName(dbMapForStatusEvent.get("statuseventimagename") == null ? "" :
                (String) dbMapForStatusEvent.get("statusEventimagename"));

        statusEvent.StatusEventDates = new ArrayList<>();

        String statusEventDateQuery = "SELECT * FROM " +
                "statusEventDate " +
                "WHERE statuseventId = " +
                statusEvent.getStatusEventId() +"; ";

        List<Map<String, Object>> queriedStatusEventDates =
                jdbcTemplate.queryForList(statusEventDateQuery);

        if(queriedStatusEventDates.size() != 0){
            for(Map<String, Object> map: queriedStatusEventDates){
                // add dates here
                statusEvent.StatusEventDates.add(
                        mapSelectStatusEventDatesFromDB(map));
            }
        }

        return statusEvent;

    }

    public StatusEventDate mapSelectStatusEventDatesFromDB(Map<String, Object> map){

        StatusEventDate statusEventDate = new StatusEventDate();

        statusEventDate.setStatusEventDateId((Integer) map.get("statuseventdateID"));
        statusEventDate.setStartTime((String) map.get("starttime"));
        statusEventDate.setEndTime((String) map.get("endtime"));
        statusEventDate.setStatusEventId((Integer) map.get("statuseventId"));
        statusEventDate.setLotId((Integer) map.get("lotId"));

        return statusEventDate;

    }



}
