package com.myapp.dktc.sevice.impl;

import com.myapp.dktc.entity.Tour;
import com.myapp.dktc.responsitory.impl.TourRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TourServiceImpl implements TourService{
    @Resource
    private TourRepository tourRepository;
    @Override
    public List<Tour> getAllTour() {
        List<Tour> tourList = tourRepository.getAllTour();
        return tourList;
    }
}
