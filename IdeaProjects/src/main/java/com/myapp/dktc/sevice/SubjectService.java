package com.myapp.dktc.sevice;

import com.myapp.dktc.entity.Subject;

import java.util.List;

public interface SubjectService {
    String createSubject(Subject subject) throws Exception;

    List<Subject> getAllSubject();

    Subject updateSubject(Subject subject, String id);

    void deleteSubject(String id);

    List<Subject> getSubjectBySpecilized(String specilized);

    Subject getByid(String id);
}
