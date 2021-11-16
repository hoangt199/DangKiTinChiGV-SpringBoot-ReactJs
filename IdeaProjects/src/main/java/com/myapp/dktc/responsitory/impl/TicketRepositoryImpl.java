package com.myapp.dktc.responsitory.impl;

import com.myapp.dktc.entity.Ticket;
import com.myapp.dktc.responsitory.TicketRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
@Repository
public class TicketRepositoryImpl implements TicketRepository {
    MongoTemplate mongoTemplate;

    @Override
    public void save(Ticket ticket) {
        try{
            mongoTemplate.save(ticket);
        }catch (Exception e){
            System.out.println("Tạo mới thất bại");
            e.printStackTrace();
        }
    }


}
