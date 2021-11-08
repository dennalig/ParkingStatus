package com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser;

import com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser.InsertDataMappers.AdminUserInsertDataMapper;
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

        String queryOneAdminUser = "SELECT * FROM adminuser " +
                "WHERE email = '" +
                email +"'; ";

        List<Map<String, Object>> queriedAdminUserObject =
                jdbcTemplate.queryForList(queryOneAdminUser);

        if(queriedAdminUserObject.size() != 0){
            AdminUser queriedAdminUser = mapSelectAdminUserFromDB(
                    queriedAdminUserObject.get(0));

            System.out.println(queriedAdminUser.getEmail());
            System.out.println(queriedAdminUser.getPassword());
            return queriedAdminUser;
        }

        return null;
    }

    public String insertAdminUser(AdminUser adminUser){

        if(selectAdminUserByEmail(adminUser.getEmail()) == null){
            AdminUserInsertDataMapper adminUserInsertDataMapper =
                    new AdminUserInsertDataMapper(adminUser.getEmail(),
                            adminUser.getPassword());

            String insertAdminUserSql = "INSERT INTO adminuser VALUES(" +
                  adminUserInsertDataMapper.getEmail() +","+
                  adminUserInsertDataMapper.getPassword()+
                  ");";
            System.out.println(insertAdminUserSql);

            jdbcTemplate.update(insertAdminUserSql);

            return adminUserInsertDataMapper.getEmail();
        }

        return "ALREADY EXISTS";
    }

    public String updateAdminUser(String email, AdminUser adminUser){
        return null;
    }

    public String removeAdminUser(String email){
        return null;
    }


    //mapping methods

    public AdminUser mapSelectAdminUserFromDB(Map<String, Object> dbMap){
        AdminUser adminUser = new AdminUser();

        adminUser.setEmail((String) dbMap.get("email"));
        adminUser.setPassword((String) dbMap.get("password"));
        return adminUser;
    }
}
