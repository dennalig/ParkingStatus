package com.ParkingStatus.ParkingStatus.DataAccessService;

import java.util.List;

public class GenericClass<T> {
//A universal null checker
    public static boolean isNull(Object object){
        return object == null;
    }

    public static boolean listIsEmpty(List<Object> objectList){
        return objectList.size() == 0;
    }
}
