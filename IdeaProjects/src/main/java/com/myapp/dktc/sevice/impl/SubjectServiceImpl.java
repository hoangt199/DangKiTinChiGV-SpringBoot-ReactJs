package com.myapp.dktc.sevice.impl;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.User;
import com.myapp.dktc.responsitory.SubjectRepository;
import com.myapp.dktc.sevice.SubjectService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SubjectServiceImpl implements SubjectService {
    @Resource
    SubjectRepository subjectRepository;

    @Override
    public String createSubject(Subject subject) throws Exception {
        String message = "Tạo môn học thành công";
        boolean created = true;
        List<Subject> listAllSubject = subjectRepository.findAllSubject();
        if (listAllSubject == null){
            message = "Không có môn học nào được tạo !";
            created = false;
        }else {
            for (Subject subject1: listAllSubject) {
                if(subject.getNameSubject() !=null && subject1.getNameSubject()!=null){
                    if(subject.getNameSubject().equals(subject1.getNameSubject())){
                        if(subject.getWeekdays().equals(subject1.getWeekdays())){
                            if (subject.getRoom().equals(subject1.getRoom())){
                                if (subject.getMathematicCode().equals(subject1.getMathematicCode())){
                                    created = false;
                                    message = "Môn học đã được tạo";
                                }
                                    message = "Phòng đã có môn học khác đăng kí!";
                                    created =false;
                            }
                        }
                    }
                }
            }
        }
       if (created = true){
           Date date = new Date();
           subject.setModifiedDate(date);
           subjectRepository.save(subject);
           message = "Tạo môn học thành công";
       }
        return message;
    }

    @Override
    public List<Subject> getAllSubject() {
        String logUsename = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = subjectRepository.findByUsername(logUsename);
        List<Subject> list = new ArrayList<>();
        list = subjectRepository.findAllSubject();
        if (list !=null){
            list.sort((o1, o2) -> o2.getModifiedDate().compareTo(o1.getModifiedDate()));
        }

        return list;
    }

    @Override
    public Subject updateSubject(Subject subject, String id) {
        return subjectRepository.updateSubject(subject,id);
    }

    @Override
    public void deleteSubject(String id) {
        subjectRepository.deleteSubject(id);
    }

    @Override
    public List<Subject> getSubjectBySpecilized(String specilized) {
        return subjectRepository.finSubjectBySpecilized(specilized);
    }

    @Override
    public Subject getByid(String id) {
        return subjectRepository.findById(id);
    }
}
