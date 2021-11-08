package com.ParkingStatus.ParkingStatus.DataAccessService.AdminUser.InsertDataMappers;

public class AdminUserInsertDataMapper {

    //CREATE TABLE AdminUser(
    //email VARCHAR(500)UNIQUE PRIMARY KEY,
    //password VARCHAR(500));

    public String email;
    public String password;

    public AdminUserInsertDataMapper(String email, String password) {
        setEmail(email);
        setPassword(password);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = "'"+email+"'";
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = "'"+password+"'";
    }
}
