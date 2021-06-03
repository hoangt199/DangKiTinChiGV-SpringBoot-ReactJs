package com.myapp.dktc.sevice.impl;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.entity.SubjectRegister;
import com.myapp.dktc.responsitory.RegisterRepository;
import com.myapp.dktc.responsitory.SubjectRepository;
import com.myapp.dktc.sevice.RegisterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class RegisterServiceImpl implements RegisterService {
    @Resource
    RegisterRepository registerRepository;
    @Resource
    SubjectRepository subjectRepository;
    @Resource
    MongoTemplate mongoTemplate;
    @Override
    public void createRegister(Subject subject) throws Exception {

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("username : " +username);
        SubjectRegister subRegister = registerRepository.findRegisterByUsername(username);
        List<Subject> list = new ArrayList<>();
        boolean isOk =false;
        if (!ObjectUtils.isEmpty(subRegister)){
           if(subRegister.getList() !=null){
               for (int i = 0; i < subRegister.getList().size(); i++) {
                   list.add(subRegister.getList().get(i));
               }
               subRegister.setList(new ArrayList<>());
               for (Subject subject1: list
               ) {
                   if (!subject1.getNameSubject().equals(subject.getNameSubject())){
                       isOk = true;
                   }
               }
               if(isOk==true){
                   list.add(subject);
                   subRegister.setList(list);
                   mongoTemplate.save(subRegister);
               }

           }else{
               subRegister.getList().add(subject);
               subRegister.setName_teacher(username);
           }
        }else {
            subRegister = new SubjectRegister();
            subRegister.setName_teacher(username);
            List<Subject> list1 = new ArrayList<>();
            list1.add(subject);
            subRegister.setList(list1);
            registerRepository.createRegister(subRegister);
        }
        log.info(subRegister.getList().size()+"size sau:");
    }

    @Override
    public String deleteSubjectOnRegister(String id) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        SubjectRegister subjectRegister = registerRepository.findRegisterByUsername(username);
        List<Subject> subjectList = new ArrayList<>();
        subjectList.addAll(subjectRegister.getList());
        subjectRegister.setList( new ArrayList<>());
        for (int i = 0; i <subjectList.size() ; i++) {
            if(id.equalsIgnoreCase(subjectList.get(i).getId())){
                subjectList.remove(i);
            }
        }
        subjectRegister.setList(subjectList);
        mongoTemplate.save(subjectRegister);
        return "Xóa thành công";
    }

    @Override
    public List<Subject> getAllSubjectRegister(String username) {
        SubjectRegister subjectRegister = registerRepository.findRegisterByUsername(username);
        List<Subject> subjectList = new ArrayList<>();
        subjectList.addAll(subjectRegister.getList());
        return subjectList;
    }
}
