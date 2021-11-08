package com.ParkingStatus.ParkingStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;


import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class ParkingStatusApplication  implements CommandLineRunner{
//DB --> standardUser

	@Autowired
	private JdbcTemplate jdbcTemplate;


	public static void main(String[] args) {
		SpringApplication.run(ParkingStatusApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		String sql = "SELECT * FROM newtable;";

		//List<Map<String, Object>> list = jdbcTemplate.queryForList(sql); //--> for queries
//		jdbcTemplate.update(sql); --> for insertions, updates, and deletes

//		if (rows > 0) {
//			System.out.println("A new row has been inserted.");
//		}
	}

}
