package com.myapp.dktc.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Mathematics")
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Mathematics {
    @Id
    private ObjectId id;
    @Field(name = "name_mathematics")
    private String name;
    @Field(name = "mathematic_code")
    private String mathematicsCode;
    @Field(name = "start_end_time")
    private String startEndTime;
}
