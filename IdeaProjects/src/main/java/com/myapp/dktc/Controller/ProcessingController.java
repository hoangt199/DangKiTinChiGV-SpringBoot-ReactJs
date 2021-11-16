package com.myapp.dktc.Controller;

import com.myapp.dktc.entity.Ticket;
import com.myapp.dktc.entity.Tour;
import com.myapp.dktc.sevice.impl.TicketService;
import com.myapp.dktc.sevice.impl.TourService;
import org.springframework.data.annotation.Id;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/home")
public class ProcessingController {

    @Resource
    public TicketService ticketService;

    @Resource
    public TourService tourService;
    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }

    @PostMapping("/create-ticket")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> createTicket(Ticket ticket){
        ticketService.createTicket(ticket);
        return ResponseEntity.ok("200.Create Success");
    }
    @GetMapping("/get-all-tour")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Tour> getAllTourInfo() {
        List<Tour> tourList = tourService.getAllTour();
        return tourList;
    }
}
