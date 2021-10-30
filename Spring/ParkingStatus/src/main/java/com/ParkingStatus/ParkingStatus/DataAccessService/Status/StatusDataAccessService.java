package com.ParkingStatus.ParkingStatus.DataAccessService.Status;

import com.ParkingStatus.ParkingStatus.Models.Status.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StatusDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StatusDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Status> selectAllStatuses(){
        return null;
    }

    public Status selectStatusById(int id){
        return null;
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


}
