package com.myapp.dktc.responsitory.impl;

import com.myapp.dktc.entity.Tour;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TourRepositoryImpl implements TourRepository{
    MongoTemplate mongoTemplate;
    @Override
    public List<Tour> getAllTour() {
        return mongoTemplate.findAll(Tour.class);
    }
}
