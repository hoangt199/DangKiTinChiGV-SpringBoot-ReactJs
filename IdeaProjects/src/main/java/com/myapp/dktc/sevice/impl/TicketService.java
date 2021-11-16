package com.myapp.dktc.sevice.impl;

import com.myapp.dktc.entity.Ticket;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


public interface TicketService {
    void createTicket(Ticket ticket);
}
