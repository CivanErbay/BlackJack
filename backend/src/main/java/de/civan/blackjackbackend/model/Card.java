package de.civan.blackjackbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "blackJack") //by default its looking for the Class Name in the Database
public class Card {
    @Id                 //@Id über der Variable "private String id" mappt die _id aus der Datenbank auf diese Variable
    private String id;
    private int num;
}
