package com.ParkingStatus.ParkingStatus.DataAccessService.Status;

import com.ParkingStatus.ParkingStatus.DataAccessService.GenericClass;
import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class StatusDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    private static final GenericClass genericClass = new GenericClass();

    @Autowired
    public StatusDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Status> selectAllStatuses(){
        String sql = "SELECT * FROM status;";

        List<Map<String, Object>> queriedStatuses = jdbcTemplate.queryForList(sql);

        List<Status> statusList = new ArrayList<>();

        for(Map<String, Object> map: queriedStatuses){
            statusList.add(mapSelectStatusFromDb(map));
        }

        return statusList;
    }


    public Status selectStatusById(int id){
        String queryOneStatus = "SELECT * FROM status " +
                "WHERE statusid = " +
                id +" ; ";
        List<Map<String, Object>> queriedStatusObject = jdbcTemplate.queryForList(queryOneStatus);

        Status queriedStatus = mapSelectStatusFromDb(queriedStatusObject.get(0));

        return queriedStatus;
    }

    public int insertStatus(Status status){
        return 0;
    }

    public int updateStatus(int id, Status status){
        return 0;
    }

    public int removeStatus(int id){
        return 0;
    }


    //mapping methods

    public Status mapSelectStatusFromDb(Map<String, Object> map) {
        Status status = new Status();
        status.setStatusId((Integer) map.get("statusid"));
        status.setName((String) map.get("statusname"));
        status.setColor(map.get("statuscolor") == null ? "" :
                (String) map.get("statuscolor"));
        status.setDescription(map.get("statusdescription") == null ? "" :
                (String) map.get("statusdescription"));
        status.setStatusImageName(map.get("statusimagename") == null ? "" :
                (String) map.get("statusimagename"));

        return status;
    }



}
