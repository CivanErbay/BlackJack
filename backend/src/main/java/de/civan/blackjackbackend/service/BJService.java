package de.civan.blackjackbackend.service;

import de.civan.blackjackbackend.database.BJMongoDb;
import de.civan.blackjackbackend.model.Card;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class BJService {

    private final BJMongoDb bjMongoDb;

    public BJService(BJMongoDb bjMongoDb) {
        this.bjMongoDb = bjMongoDb;
    }

    public ArrayList<Card> getAllCards() {
        return (ArrayList<Card>)bjMongoDb.findAll();
    }

}
