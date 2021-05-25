package com.myapp.dktc.responsitory;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.User;
import org.bson.types.ObjectId;

import java.util.List;

public interface SubjectRepository {

    Subject save(Subject subject);

    List<Subject> findAllSubject();

    Subject updateSubject(Subject subject, ObjectId id);

    void deleteSubject(ObjectId id);

    List<Subject> finSubjectBySpecilized(String specilized);

    Subject findById(ObjectId id);

    User findByUsername(String logUsename);

    List<Subject> findSubjectHTTT(String httt);

    List<Subject> findSubjectCNPM(String cnpm);
}
