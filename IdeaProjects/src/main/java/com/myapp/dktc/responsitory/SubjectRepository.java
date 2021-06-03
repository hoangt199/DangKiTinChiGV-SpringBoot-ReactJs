package com.myapp.dktc.responsitory;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.User;

import java.util.List;

public interface SubjectRepository {

    Subject save(Subject subject);

    List<Subject> findAllSubject();

    Subject updateSubject(Subject subject, String id);

    void deleteSubject(String id);

    List<Subject> finSubjectBySpecilized(String specilized);

    Subject findById(String id);

    User findByUsername(String logUsename);

    List<Subject> findSubjectHTTT(String httt);

    List<Subject> findSubjectCNPM(String cnpm);
}
