package com.ParkingStatus.ParkingStatus.DataAccessService.Lot;

import com.ParkingStatus.ParkingStatus.Models.Lot.Lot;
import org.springframework.data.repository.CrudRepository;

public interface ILotRepository extends CrudRepository<Lot, Integer> {
}
