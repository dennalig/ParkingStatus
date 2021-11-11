package com.ParkingStatus.ParkingStatus.Controllers;

import com.ParkingStatus.ParkingStatus.Models.AdminUser.AdminUser;
import com.ParkingStatus.ParkingStatus.Service.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Object> createAdminUser(@RequestBody AdminUser adminUser){
        String response = adminUserService.createAdminUser(adminUser);

        if(response.equals("ALREADY EXISTS")){

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(path="{adminemail}")
    public ResponseEntity<Object> updateAdminUser(@PathVariable("adminemail")String email,
                                @RequestBody AdminUser adminUser){
       String response = adminUserService.updateAdminUser(email, adminUser);

        if(response.equals("DOES NOT EXIST")){

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("{adminemail}")
    public ResponseEntity<Object> deleteAdminUser(@PathVariable("adminemail")String email){
        String response = adminUserService.deleteAdminUser(email);

        if(response.equals("DOES NOT EXIST")){

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }
}
