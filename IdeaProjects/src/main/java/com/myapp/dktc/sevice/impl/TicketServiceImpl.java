package com.myapp.dktc.sevice.impl;

import com.myapp.dktc.entity.Ticket;
import com.myapp.dktc.responsitory.TicketRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class TicketServiceImpl implements TicketService{
    @Resource
    TicketRepository ticketRepository;
    @Override
    public void createTicket(Ticket ticket) {
        try{
            ticketRepository.save(ticket);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
