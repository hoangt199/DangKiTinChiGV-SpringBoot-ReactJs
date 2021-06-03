package com.myapp.dktc.responsitory.impl;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.User;
import com.myapp.dktc.responsitory.SubjectRepository;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class SubjectRepositoryimpl implements SubjectRepository {
    @Resource
    MongoTemplate mongoTemplate;

    @Override
    public Subject save(Subject subject) {
        return mongoTemplate.save(subject);
    }

    @Override
    public List<Subject> findAllSubject() {
        return mongoTemplate.findAll(Subject.class);
    }

    @Override
    public Subject updateSubject(Subject subject, String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(new ObjectId(id)));
        Subject subjectOld = mongoTemplate.findOne(query,Subject.class);
        mongoTemplate.remove(subjectOld);
        Subject subject1 = new Subject();
        subject1.setId(id);
        subject1.setNameSubject(subject.getNameSubject());
        subject1.setRoom(subject.getRoom());
        subject1.setSpecialized(subject.getSpecialized());
        subject1.setWeekdays(subject.getWeekdays());
        subject1.setMathematicCode(subject.getMathematicCode());
        subject1.setModifiedDate(new Date());
        return mongoTemplate.save(subject1);
    }

    @Override
    public void deleteSubject(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        Subject subject = mongoTemplate.findOne(query,Subject.class);
        mongoTemplate.remove(subject);
    }

    @Override
    public List<Subject> finSubjectBySpecilized(String specilized) {
        Query query = new Query();
        List<Subject> list = new ArrayList<>();
            query.addCriteria(Criteria.where("specialized").is(specilized));
            list = mongoTemplate.find(query,Subject.class);
            return list;

    }

    @Override
    public Subject findById(String id) {
       Query query = new Query();
       query.addCriteria(Criteria.where("id").is(new ObjectId(id)));
        return mongoTemplate.findOne(query,Subject.class);
    }

    @Override
    public User findByUsername(String logUsename) {
        Query query = new Query();
        query.addCriteria(Criteria.where("username").is(logUsename));
        return mongoTemplate.findOne(query,User.class);
    }

    @Override
    public List<Subject> findSubjectHTTT(String httt) {
        Query query = new Query();
        query.addCriteria(Criteria.where("specialized").is(httt));
        return mongoTemplate.find(query,Subject.class);
    }

    @Override
    public List<Subject> findSubjectCNPM(String cnpm) {
        Query query = new Query();
        query.addCriteria(Criteria.where("specialized").is(cnpm));
        return mongoTemplate.find(query,Subject.class);
    }
}
