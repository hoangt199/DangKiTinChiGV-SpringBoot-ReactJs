package com.myapp.dktc.responsitory.impl;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.SubjectRegister;
import com.myapp.dktc.responsitory.RegisterRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

@Repository
public class RegisterRepositoryImpl implements RegisterRepository {
    @Resource
    MongoTemplate mongoTemplate;
    @Override
    public SubjectRegister createRegister(SubjectRegister subjectRegister) {
        return mongoTemplate.save(subjectRegister);
    }

    @Override
    public List<Subject> findAllSubByUsername(String username) {
        return null;
    }

    @Override
    public SubjectRegister findRegisterByUsername(String username) {
        Query query = new Query();
        query.addCriteria(Criteria.where("name_teacher").is(username));
        return mongoTemplate.findOne(query,SubjectRegister.class);
    }

    @Override
    public SubjectRegister update(SubjectRegister subRegister, String username) {
        Query query = new Query();
        query.addCriteria(Criteria.where("name_teacher").is(username));
        return null;
    }

}
