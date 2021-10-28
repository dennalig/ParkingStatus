package com.ParkingStatus.ParkingStatus;

import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.List;
import java.sql.*;

@SpringBootApplication
public class ParkingStatusApplication {
//DB --> standardUser


	public static void main(String[] args) {
		SpringApplication.run(ParkingStatusApplication.class, args);
	}

}
