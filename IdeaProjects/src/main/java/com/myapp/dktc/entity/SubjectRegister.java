package com.myapp.dktc.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
@Document(collection = "subject_register")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SubjectRegister extends Subject{
    @Field(name = "name_teacher")
    private String nameTeacher;
}
