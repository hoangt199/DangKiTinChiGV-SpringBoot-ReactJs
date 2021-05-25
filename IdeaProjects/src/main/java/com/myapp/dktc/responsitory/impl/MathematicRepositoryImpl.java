package com.myapp.dktc.responsitory.impl;

import com.myapp.dktc.entity.Mathematics;
import com.myapp.dktc.responsitory.MathematicRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
@Repository
public class MathematicRepositoryImpl implements MathematicRepository {
    @Resource
    MongoTemplate mongoTemplate;

    @Override
    public List<Mathematics> getAllListMathematics() {
        return mongoTemplate.findAll(Mathematics.class);
    }
}
