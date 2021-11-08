package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.AdminUser.AdminUser;
import com.ParkingStatus.ParkingStatus.Service.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/adminusers")
public class AdminUserController {

    @Autowired
    private final AdminUserService adminUserService;

    @Autowired
    public AdminUserController(AdminUserService adminUserService) {
        this.adminUserService = adminUserService;
    }

    @GetMapping
    public List<AdminUser> getAllAdminUsers(){
        return adminUserService.getAllAdminUsers();
    }

    @GetMapping(path ="{admin_email}")
    public AdminUser getAdminUserByEmail(@PathVariable("admin_email")String email){
        return adminUserService.getAdminUserByEmail(email);
    }

    @PostMapping
    public void createAdminUser(@RequestBody AdminUser adminUser){
        adminUserService.createAdminUser(adminUser);
    }

    @PostMapping(path="{admin_email}")
    public void updateAdminUser(@PathVariable("admin_email")String email,
                                @RequestBody AdminUser adminUser){
        adminUserService.updateAdminUser(email, adminUser);
    }

    @DeleteMapping("{admin_email}")
    public void deleteAdminUser(@PathVariable("admin_email")String email){
        adminUserService.deleteAdminUser(email);
    }
}
