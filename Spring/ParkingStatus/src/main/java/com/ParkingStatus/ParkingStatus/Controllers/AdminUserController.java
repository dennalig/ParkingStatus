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

    @GetMapping(path ="{adminemail}")
    public AdminUser getAdminUserByEmail(@PathVariable("adminemail")String email){
        return adminUserService.getAdminUserByEmail(email);
    }

    @PostMapping
    public void createAdminUser(@RequestBody AdminUser adminUser){
        adminUserService.createAdminUser(adminUser);
    }

    @PostMapping(path="{adminemail}")
    public void updateAdminUser(@PathVariable("adminemail")String email,
                                @RequestBody AdminUser adminUser){
        adminUserService.updateAdminUser(email, adminUser);
    }

    @DeleteMapping("{adminemail}")
    public void deleteAdminUser(@PathVariable("adminemail")String email){
        adminUserService.deleteAdminUser(email);
    }
}
