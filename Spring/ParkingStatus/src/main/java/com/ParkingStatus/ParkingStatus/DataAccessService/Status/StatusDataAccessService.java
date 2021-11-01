package com.ParkingStatus.ParkingStatus.DataAccessService.Status;

import com.ParkingStatus.ParkingStatus.DataAccessService.GenericClass;
import com.ParkingStatus.ParkingStatus.DataAccessService.Status.InsertDataMappers.StatusInsertDataMapper;
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

        if(queriedStatusObject.size() != 0 ){
            Status queriedStatus = mapSelectStatusFromDb(queriedStatusObject.get(0));
            return queriedStatus;
        }


        return null;
    }

    public int insertStatus(Status status){
//	  StatusID INT NOT NULL PRIMARY KEY,
//    StatusName VARCHAR(500) NOT NULL,
//    StatusColor VARCHAR(50) NULL,
//    StatusDescription VARCHAR(500) NULL,
//    StatusImageName VARCHAR(500) NULL
        if(selectStatusById(status.getStatusId()) == null){ // check for existing status

            //string values that may cause issues with the database
            StatusInsertDataMapper statusInsertDataMapper = new StatusInsertDataMapper(
                    status.getStatusId(),
                    status.getName(),
                    status.getColor(),
                    status.getDescription(),
                    status.getStatusImageName()
            );

            String insertSql = "INSERT INTO status VALUES(" +
                    statusInsertDataMapper.getId() +","+
                    statusInsertDataMapper.getName() + ","+
                    statusInsertDataMapper.getColor()+ ","+
                    statusInsertDataMapper.getDescription() + ","+
                    statusInsertDataMapper.getImageName()+
                    ");";
            System.out.println(insertSql);
            jdbcTemplate.update(insertSql); // insert into database

            return status.getStatusId();
        }

        System.err.println("Status of " +
                status.getStatusId() +" Already exists");
        return -1;

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

    public String mapForInsertStringAttr(String attribute){
        //format string value for sql query
        return attribute == null ? null : "'"+attribute +"'";
    }



}
