package com.myapp.dktc.responsitory;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.SubjectRegister;

import java.util.List;

public interface RegisterRepository {
    SubjectRegister createRegister(SubjectRegister subjectRegister);

    List<Subject> findAllSubByUsername(String username);

    SubjectRegister findRegisterByUsername(String username);

    SubjectRegister update(SubjectRegister subRegister, String username);
}
