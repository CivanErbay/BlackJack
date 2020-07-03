package de.civan.blackjackbackend.service;

import de.civan.blackjackbackend.database.BJMongoDb;
import de.civan.blackjackbackend.model.Card;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BJService {

    private final BJMongoDb bjMongoDb;

    public BJService(BJMongoDb bjMongoDb) {
        this.bjMongoDb = bjMongoDb;
    }

    public List<Card> getAllCards() {
        return (List<Card>)bjMongoDb.findAll();
    }

}
