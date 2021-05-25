package com.myapp.dktc.Controller;

import com.myapp.dktc.entity.Mathematics;
import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.sevice.MathematicService;
import com.myapp.dktc.sevice.SubjectService;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/home")
public class TestController {


    @Resource
    MathematicService mathematicService;

    @Resource
    SubjectService subjectService;

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
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> createSubject(@RequestBody Subject subject ){
        subjectService.createSubject(subject);
        return ResponseEntity.ok("Create Successed !");
    }

    @GetMapping("/get-all-subject")
    public ResponseEntity<List<Subject>> getAllSubject(){
        List<Subject> listSubject = subjectService.getAllSubject();
        return  ResponseEntity.ok(listSubject);
    }

    @GetMapping("/get-subject/{id}")
    public ResponseEntity<Subject> getSubjectByid(@PathVariable ObjectId id){
        Subject subject = subjectService.getByid(id);
        return  ResponseEntity.ok(subject);
    }

    @PutMapping("/update-subject/{id}")

    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Subject> updateSubject(@RequestBody Subject subject, @PathVariable ObjectId id){
        return ResponseEntity.ok(subjectService.updateSubject(subject,id));
    }

    @DeleteMapping("/delete-subject/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> delete(@PathVariable ObjectId id){
        String message = "Delete Subject Successed !";
        subjectService.deleteSubject(id);
        return ResponseEntity.ok(message);
    }
}
