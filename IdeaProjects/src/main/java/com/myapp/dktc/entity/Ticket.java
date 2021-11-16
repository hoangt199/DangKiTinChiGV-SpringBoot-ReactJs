package com.myapp.dktc.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document(collection = "Ticket")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@NotNull
public class Ticket {
    @Id
    @JsonProperty("id")
    private String Id;
    @JsonProperty("idTour")
    private String idTour;
    @JsonProperty("nameTour")
    private String nameTour;
    @JsonProperty("nameEmployee")
    private String nameEmployee;
    @JsonProperty("priceTicket")
    private Double priceTicket;
    @JsonProperty("numCustomer")
    private int numCustomer;
    @JsonProperty("nameCustomer")
    private String nameCustomer;
    @JsonProperty("totalPrice")
    private Double totalPrice;
    @JsonProperty("lastModifiedDate")
    private Double lastModifiedDate;

}
