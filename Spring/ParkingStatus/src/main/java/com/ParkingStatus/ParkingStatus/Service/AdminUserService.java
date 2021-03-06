package com.ParkingStatus.ParkingStatus.Service;

import com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser.AdminUserDataAccessService;
import com.ParkingStatus.ParkingStatus.Models.AdminUser.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminUserService {

    @Autowired
    private final AdminUserDataAccessService adminUserDataAccessService;

    @Autowired
    public AdminUserService(AdminUserDataAccessService adminUserDataAccessService) {
        this.adminUserDataAccessService = adminUserDataAccessService;
    }

    public List<AdminUser> getAllAdminUsers(){
        return adminUserDataAccessService.selectAllAdminUsers();
    }

    public AdminUser getAdminUserByEmail(String email){
        return adminUserDataAccessService.selectAdminUserByEmail(email);
    }

    public String createAdminUser(AdminUser adminUser){
        return adminUserDataAccessService.insertAdminUser(adminUser);
    }

    public String updateAdminUser(String email, AdminUser adminUser){
        return adminUserDataAccessService.updateAdminUser(email, adminUser);
    }

    public String deleteAdminUser(String email){
        return adminUserDataAccessService.removeAdminUser(email);
    }
}
