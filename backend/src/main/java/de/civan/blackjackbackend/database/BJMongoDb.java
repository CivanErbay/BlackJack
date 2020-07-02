package de.civan.blackjackbackend.database;

import de.civan.blackjackbackend.model.Card;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface BJMongoDb extends PagingAndSortingRepository<Card, String> {
}
