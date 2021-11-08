package com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser;

import com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser.InsertDataMappers.AdminUserInsertDataMapper;
import com.ParkingStatus.ParkingStatus.Models.AdminUser.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class AdminUserDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AdminUserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<AdminUser> selectAllAdminUsers(){
        String queryAdminUsers = "SELECT * FROM adminuser;";

        List<Map<String, Object>> queriedAdminUserObjects =
                jdbcTemplate.queryForList(queryAdminUsers);

        List<AdminUser> adminUserList = new ArrayList<>();

        for(Map<String, Object> map: queriedAdminUserObjects){

            adminUserList.add(mapSelectAdminUserFromDB(map));
        }

        return adminUserList;
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


            return queriedAdminUser;
        }

        return null;
    }

    public String insertAdminUser(AdminUser adminUser){

        if(selectAdminUserByEmail(adminUser.getEmail()) == null){

            adminUser.setPassword(adminUser.getPassword(), false);

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
        //TODO: difer from updating email to updating password, both require different protocols

        if(selectAdminUserByEmail(email) != null){

            adminUser.setPassword(adminUser.getPassword(), false);
            System.out.println(adminUser.getPassword());
            AdminUserInsertDataMapper adminUserInsertDataMapper =
                    new AdminUserInsertDataMapper( adminUser.getEmail(), adminUser.getPassword());

            String updateAdminUserSql = "UPDATE adminuser set "+
                    "email ="+ adminUserInsertDataMapper.getEmail()+","+
                    "password ="+ adminUserInsertDataMapper.getPassword()+
                    "WHERE email ='" +email + "'"+
                    ";";

            jdbcTemplate.update(updateAdminUserSql);
            return email;
        }
        return "ADMIN USER DOES NOT EXIST";
    }

    public String removeAdminUser(String email){

        AdminUser deleteAdminUser = selectAdminUserByEmail(email);
        String deleteAdminUserQuery = "DELETE FROM adminuser WHERE " +
                "email = '" +email +
                "' ;";

        jdbcTemplate.update(deleteAdminUserQuery);
        return "ADMIN USER DOES NOT EXIST";
    }


    //mapping methods

    public AdminUser mapSelectAdminUserFromDB(Map<String, Object> dbMap){
        AdminUser adminUser = new AdminUser();
        List<Object> dbMapVals = new ArrayList(dbMap.values());

        adminUser.setEmail((String) dbMap.get("email"));
        adminUser.setPassword((String) dbMap.get("password"), true);


        return adminUser;
    }
}
