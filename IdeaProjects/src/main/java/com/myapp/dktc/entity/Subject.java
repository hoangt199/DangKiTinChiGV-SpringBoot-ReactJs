package com.myapp.dktc.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Document(collection = "subject")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@NotNull
public class Subject {
    @Id
    @JsonProperty("id")
    private String id;

    @JsonProperty("name_subject")
    @NotBlank
    private String nameSubject;

    @JsonProperty("specialized")
    private String specialized;

    @JsonProperty("room")
    private String room;

    @JsonProperty("weekdays")
    private String weekdays;

    @JsonProperty("mathematics_code") //kíp học
    private String mathematicCode;

    @JsonProperty("last_modified_date")
    private Date modifiedDate;

}
