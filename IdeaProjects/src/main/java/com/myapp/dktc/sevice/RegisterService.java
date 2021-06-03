package com.myapp.dktc.sevice;

import com.myapp.dktc.entity.Subject;

import java.util.List;

public interface RegisterService {
    void createRegister(Subject subject) throws Exception;

    String deleteSubjectOnRegister(String id);

    List<Subject> getAllSubjectRegister(String username);
}
