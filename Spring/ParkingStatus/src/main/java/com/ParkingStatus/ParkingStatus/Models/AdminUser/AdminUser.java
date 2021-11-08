package com.ParkingStatus.ParkingStatus.Models.AdminUser;

import com.google.common.hash.Hashing;


import java.nio.charset.StandardCharsets;

public class AdminUser {

    private String email;
    private String password;

    public AdminUser() {}

    public AdminUser(String email, String password) {
        this.email = email;
        setPassword(password, false);
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


    public void setPassword(String password, boolean alreadyHashed) {

        if(!alreadyHashed){
            String passwordSha256Hex = Hashing.sha256()
                    .hashString(password, StandardCharsets.UTF_8)
                    .toString();

            this.password = passwordSha256Hex;
        }
        else{
            this.password = password;
        }

    }

    //TODO: checking password validation
    public boolean validatePassword(String enteredPassword){
        String enteredPw = Hashing.sha256()
                .hashString(enteredPassword, StandardCharsets.UTF_8)
                .toString();

        return enteredPw.equals(getPassword());
    }

    String sha256hex = Hashing.sha256()
            .hashString("name", StandardCharsets.UTF_8)
            .toString();


}
