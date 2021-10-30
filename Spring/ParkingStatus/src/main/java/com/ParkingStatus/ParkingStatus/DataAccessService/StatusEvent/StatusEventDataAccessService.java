package com.ParkingStatus.ParkingStatus.DataAccessService.StatusEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class StatusEventDataAccessService {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StatusEventDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }



}
