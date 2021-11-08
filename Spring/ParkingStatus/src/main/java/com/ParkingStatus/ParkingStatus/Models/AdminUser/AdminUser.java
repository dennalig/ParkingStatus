package com.ParkingStatus.ParkingStatus.Models.AdminUser;

import com.google.common.hash.Hashing;


import java.nio.charset.StandardCharsets;

public class AdminUser {

    private String email;
    private String password;

    public AdminUser(String email, String password) {
        this.email = email;
        setPassword(password);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        String passwordSha256Hex = Hashing.sha256()
                .hashString(password, StandardCharsets.UTF_8)
                .toString();
        this.password = passwordSha256Hex;
    }

    String sha256hex = Hashing.sha256()
            .hashString("name", StandardCharsets.UTF_8)
            .toString();


}
