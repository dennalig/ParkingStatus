package com.ParkingStatus.ParkingStatus.DataAccessService.Lot.InsertDataMappers;

public class LotInsertDataMapper {

    //	LotID INT NOT NULL PRIMARY KEY,
    //    LotName VARCHAR(500) NOT NULL,
    //    LotDescription VARCHAR(500) NULL,
    //    LotImageName VARCHAR(500) NULL
    public int id;
    public String name;
    public String description;
    public String imageName;

    public LotInsertDataMapper(int id, String name,
                               String description, String imageName) {
        setId(id);
        setName(name);
        setDescription(description);
        setImageName(imageName);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name ;
    }

    public void setName(String name) {
        this.name = "'"+name +"'";
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        if(description != null){
            this.description = "'"+description +"'";
        }

    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        if(imageName != null){
            this.imageName = "'"+imageName +"'";
        }

    }
}
