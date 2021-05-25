package com.myapp.dktc.sevice;

import com.myapp.dktc.entity.Subject;
import org.bson.types.ObjectId;

import java.util.List;

public interface SubjectService {
    Subject createSubject(Subject subject);

    List<Subject> getAllSubject();

    Subject updateSubject(Subject subject, ObjectId id);

    void deleteSubject(ObjectId id);

    List<Subject> getSubjectBySpecilized(String specilized);

    Subject getByid(ObjectId id);
}
