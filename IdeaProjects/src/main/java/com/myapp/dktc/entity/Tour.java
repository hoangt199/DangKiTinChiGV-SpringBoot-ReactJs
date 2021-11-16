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
public class Tour {
    @Id
    @JsonProperty("id")
    private String id;

    @JsonProperty("title")
    @NotBlank
    private String title;

    @JsonProperty("urlImage")
    private String urlImage;

    @JsonProperty("description")
    private String description;

    @JsonProperty("price")
    private String price;

    @JsonProperty("startTime")
    private String startTime;

    @JsonProperty("endTime")
    private String endTime;

    @JsonProperty("last_modified_date")
    private Date modifiedDate;

}
