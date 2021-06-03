package com.myapp.dktc;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.sevice.SubjectService;
import org.bson.types.ObjectId;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.MongoTransactionManager;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DktcApplicationTests {


    @Autowired
    private SubjectService subjectService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void testGetListSubject() {
        List<Subject> listAll = subjectService.getAllSubject();
        System.out.println(listAll);
        assertNotNull(listAll);
    }

    @Test
    public void testGetOne() {
        Subject s = subjectService.getByid(new ObjectId("60aa80d7d8e62a150e444267"));
        System.out.println(s);
        Assert.assertNotNull(s);
    }

    @Test
    public void testGetSubjectSpecializeCNPM() {
        List<Subject> list = subjectService.getSubjectBySpecilized("CNPM");
        Long expect = Long.valueOf(1);
        for (Subject subject : list) {
            if (!subject.getSpecialized().equals("CNPM")) {
                expect = Long.valueOf(0);
                break;
            }
        }
        assertEquals(expect, Long.valueOf(1));
        assertNotNull(list);
    }

    @Test
    public void testGetSubjectSpecializeHTTT() {
        List<Subject> list = subjectService.getSubjectBySpecilized("HTTT");
        Long expect = Long.valueOf(1);
        for (Subject subject : list) {
            if (!subject.getSpecialized().equals("HTTT")) {
                expect = Long.valueOf(0);
                break;
            }
        }
        assertEquals(expect, Long.valueOf(1));
        assertNotNull(list);
    }

    @Test
    @Rollback
    public void testCreateSubjectSuccess() {
        Long beforeCreate = Long.valueOf(subjectService.getAllSubject().size());
        Subject s = new Subject();
        s.setRoom("401 - A2");
        s.setSpecialized("CNPM");
        s.setWeekdays("Thu5");
        s.setMathematicCode("9h - 10h50");
        Subject result = subjectService.createSubject(s);

        Long afterCrate = Long.valueOf(subjectService.getAllSubject().size());
        Long beforeCreate1 = beforeCreate +1;
        assertEquals(beforeCreate1, afterCrate);

        Subject checkDb = subjectService.getByid(s.getId());
        assertNotNull(checkDb);
        assertNotNull(result);

        subjectService.deleteSubject(s.getId());
    }

    @Test
    @Rollback
    public void testDeleteSubject() {
        Subject bfDelete = subjectService.getByid(new ObjectId("60b8eb215ae7a91a946af875"));
        assertNotNull(bfDelete);

        subjectService.deleteSubject(new ObjectId("60b8eb215ae7a91a946af875"));
        Subject afDelete = subjectService.getByid(new ObjectId("60b8eb215ae7a91a946af875"));
        assertNull(afDelete);

        subjectService.createSubject(bfDelete);
    }

    @Test
    @Rollback
    public void testUpdateSubject() {
//        Subject bfUpdate = subjectService.getByid(new ObjectId("60b8eb215ae7a91a946af875"));
//        int check =1;
//        if(!bfUpdate.getSpecialized().equals("CNPM") || !bfUpdate.getRoom().equals("401 - A2")
//                || !bfUpdate.getWeekdays().equals("Thu5")){
//            check = 0;
//        }
//        assertEquals(Long.valueOf(check), Long.valueOf(1));
//        assertNotNull(bfUpdate);

        Subject update = new Subject();
        update.setWeekdays("Thu4");
        update.setRoom("301 - A2");
        update.setSpecialized("HTTT");
        update.setMathematicCode("9h - 10h50");
        subjectService.updateSubject(update, new ObjectId("60b8eb215ae7a91a946af875"));
//        Subject afUpdate = subjectService.getByid(new ObjectId("60b8eb215ae7a91a946af875"));
//        int check2 =1;
//        if(!afUpdate.getSpecialized().equals("HTTT") || !afUpdate.getRoom().equals("301 - A2")
//                || !afUpdate.getWeekdays().equals("Thu4")){
//            check2 = 0;
//        }
//        assertEquals(Long.valueOf(check2), Long.valueOf(1));
//
//        //hủy thay đổi trong db
//        subjectService.updateSubject(bfUpdate, new ObjectId("60b8eb215ae7a91a946af875"));

    }



}