package com.myapp.dktc.sevice;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.User;
import com.myapp.dktc.responsitory.SubjectRepository;
import org.bson.types.ObjectId;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectServiceImpl implements SubjectService {
    @Resource
    SubjectRepository subjectRepository;

    @Override
    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public List<Subject> getAllSubject() {
        String logUsename = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = subjectRepository.findByUsername(logUsename);
        List<Subject> list = new ArrayList<>();
        String cnpm = "CNPM";
        String httt = "HTTT";
        if (user.getUsername().equalsIgnoreCase("moderator")){
            list = subjectRepository.findSubjectHTTT(httt);
        }else if (user.getUsername().equalsIgnoreCase("user")){
            list = subjectRepository.findSubjectCNPM(cnpm);
        }else{
            list = subjectRepository.findAllSubject();
        }
        return list;
    }

    @Override
    public Subject updateSubject(Subject subject, ObjectId id) {
        return subjectRepository.updateSubject(subject,id);
    }

    @Override
    public void deleteSubject(ObjectId id) {
        subjectRepository.deleteSubject(id);
    }

    @Override
    public List<Subject> getSubjectBySpecilized(String specilized) {
        return subjectRepository.finSubjectBySpecilized(specilized);
    }

    @Override
    public Subject getByid(ObjectId id) {
        return subjectRepository.findById(id);
    }
}
