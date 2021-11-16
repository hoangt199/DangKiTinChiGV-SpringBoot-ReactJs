package com.myapp.dktc.responsitory;

import com.myapp.dktc.entity.Ticket;
import org.springframework.stereotype.Repository;


public interface TicketRepository {
    void save(Ticket ticket);
}
