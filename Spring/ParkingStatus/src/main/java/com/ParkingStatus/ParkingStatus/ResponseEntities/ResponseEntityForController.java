package com.ParkingStatus.ParkingStatus.ResponseEntities;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseEntityForController {
    public ResponseEntityForController() {
    }

    public ResponseEntity<Object> responseForObjects(int response){
        if(response == -1){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    public ResponseEntity<Object> responseForAdminUsers(String response){

        if(response.equals("INVALID INPUT")){

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

    public ResponseEntity<Object> responseForObjectModels(Object response){

        if(response == null){

            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

}
