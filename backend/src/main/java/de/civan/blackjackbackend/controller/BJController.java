package de.civan.blackjackbackend.controller;

import de.civan.blackjackbackend.model.Card;
import de.civan.blackjackbackend.service.BJService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("api/game")
public class BJController {


    private BJService bjService;

    @Autowired
    public BJController (BJService bjService) {
        this.bjService = bjService;
    }

    @RequestMapping
    public ArrayList<Card> getAllCards() {
        return bjService.getAllCards();
    }

}
