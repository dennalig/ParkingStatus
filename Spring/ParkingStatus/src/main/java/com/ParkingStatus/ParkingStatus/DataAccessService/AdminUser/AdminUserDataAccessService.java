package com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser;

import com.ParkingStatus.ParkingStatus.Models.AdminUser.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class AdminUserDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AdminUserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<AdminUser> selectAllAdminUsers(){
        return null;
    }

    public AdminUser selectAdminUserByEmail(String email){
        return null;
    }

    public String insertAdminUser(AdminUser adminUser){
        return null;
    }

    public String updateAdminUser(String email, AdminUser adminUser){
        return null;
    }

    public String removeAdminUser(String email){
        return null;
    }


    //mapping methods

    public AdminUser mapSelectAdminUserFromDB(Map<String, Object> dbMap){
        return null;
    }
}
