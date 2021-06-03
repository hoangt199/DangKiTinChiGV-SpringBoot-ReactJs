package com.myapp.dktc.Controller;

import com.myapp.dktc.entity.Mathematics;
import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.sevice.MathematicService;
import com.myapp.dktc.sevice.RegisterService;
import com.myapp.dktc.sevice.SubjectService;
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
    MathematicService mathematicService;

    @Resource
    SubjectService subjectService;

    @Resource
    RegisterService registerService;

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



    @GetMapping("/all-mathematic")
    public List<Mathematics> getAllMathematics(){
        List<Mathematics> lsMathematics = mathematicService.getAllMathematic();
        return lsMathematics;
    }

    @GetMapping("/list-subject-by-specialized")
    public List<Subject> getSubjectBySpecilized(@RequestParam String specilized){
        List<Subject> subjectList = subjectService.getSubjectBySpecilized(specilized);
        return subjectList;
    }
    @PostMapping("/add-subject")
    public ResponseEntity<String> createSubject(@RequestBody Subject subject ) throws Exception {
        String message = subjectService.createSubject(subject);
        return ResponseEntity.ok(message);
    }

    @GetMapping("/get-all-subject")
    public ResponseEntity<List<Subject>> getAllSubject(){
        List<Subject> listSubject = subjectService.getAllSubject();
        return  ResponseEntity.ok(listSubject);
    }

    @GetMapping("/get-subject/{id}")
    public ResponseEntity<Subject> getSubjectByid(@PathVariable String id){
        Subject subject = subjectService.getByid(id);
        return  ResponseEntity.ok(subject);
    }

    @PutMapping("/update-subject/{id}")

    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Subject> updateSubject(@PathVariable String id,@RequestBody Subject subject){
        return ResponseEntity.ok(subjectService.updateSubject(subject,id));
    }

    @DeleteMapping("/delete-subject/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> delete(@PathVariable String id){
        String message = "Delete Subject Successed !";
        subjectService.deleteSubject(id);
        return ResponseEntity.ok(message);
    }

    @PostMapping("/create-register")
    public ResponseEntity<String> createRegister(@RequestBody Subject subject) throws Exception {

        String message = "Create Successed";
        registerService.createRegister(subject);
        return ResponseEntity.ok(message);
    }
    @GetMapping("/get-all-register")
    public ResponseEntity<List<Subject>> getAllRegister(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        List<Subject> list = new ArrayList<>();
        try{
          list =  registerService.getAllSubjectRegister(username);
        }catch (Exception e){
            try {
                throw new Exception("List null");
            } catch (Exception exception) {
                exception.printStackTrace();
            }
        }
        return ResponseEntity.ok(list);
    }
    @DeleteMapping("/delete-subject-of-register/{id}")
    @PreAuthorize("hasRole('USER')")
    public  ResponseEntity<String> deleteSubjectOnRegister(@PathVariable String id){
        String message = registerService.deleteSubjectOnRegister(id);
        return ResponseEntity.ok(message);
    }
}
