package com.myapp.dktc.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "subject_register")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SubjectRegister{
    @Id
    private String id;
    @JsonProperty("name_teacher")
    private String name_teacher;
    @JsonProperty("list_subject")
    private List<Subject> list = new ArrayList<>();
    public void addSubject(Subject subject){
        list.add(subject);
    }
    public List<Subject> setAllList(List<Subject> list){
        return list;
    }
}
