package com.inn.cafe.wrapper;

import lombok.Data;

@Data
public class ProductWrapper {

    Long id;
    String name;
    String description;
    Double price;
    String status;
    Long categoryId;
    String categoryName;
    public ProductWrapper(Long id, String name, String description, Double price, String status, Long categoryId, String categoryName){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.status=status;
        this.categoryId=categoryId;
        this.categoryName=categoryName;
    }

    public ProductWrapper(Long id, String name){
        this.id=id;
        this.name= name;
    }
    public ProductWrapper(Long id, String name, String description, Double price){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
    }
    public ProductWrapper() {
    }
}
