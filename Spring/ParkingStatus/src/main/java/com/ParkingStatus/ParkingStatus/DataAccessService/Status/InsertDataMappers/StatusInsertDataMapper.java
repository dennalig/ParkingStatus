package com.ParkingStatus.ParkingStatus.DataAccessService.Status.InsertDataMappers;

public class StatusInsertDataMapper {

    //	StatusID INT NOT NULL PRIMARY KEY,
    //    StatusName VARCHAR(500) NOT NULL,
    //    StatusColor VARCHAR(50) NULL,
    //    StatusDescription VARCHAR(500) NULL,
    //    StatusImageName VARCHAR(500) NULL
    public int id;
    public String name;
    public String color;
    public String description;
    public String imageName;

    public StatusInsertDataMapper(int id, String name, String color,
                                  String description, String imageName) {
        setId(id);
        setName(name);
        setColor(color);
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
        return name;
    }

    public void setName(String name) {
        this.name = "'"+name+"'";
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        if(color != null){
            this.color = "'"+color+"'";
        }

    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        if(description != null){
            this.description = "'"+description+"'";
        }
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        if(imageName != null){
            this.imageName = "'"+imageName+"'";
        }
    }
}
