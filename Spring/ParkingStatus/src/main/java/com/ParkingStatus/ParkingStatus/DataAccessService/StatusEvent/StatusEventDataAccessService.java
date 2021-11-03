package com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent;

import com.ParkingStatus.ParkingStatus.DataAccessService.GenericClass;
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
    public StatusEventDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
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
        return 0;
    }

    public int updateStatusEvent(int id, StatusEvent statusEvent){
        //TODO: return actual id of created
        return 0;
    }

    public int removeStatusEvent(int id){
        //TODO: return actual id of created

        String removeStatusEventDatesSql = "DELETE FROM statuseventdate WHERE "+
                "statusEventid = "+ id +";";

        jdbcTemplate.update(removeStatusEventDatesSql);

        String removeStatusEventSql = "DELETE FROM statusevent WHERE "+
                "statusEventid = "+ id +";";

        jdbcTemplate.update(removeStatusEventSql);


        return id;
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
