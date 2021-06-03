package com.myapp.dktc;

import com.myapp.dktc.entity.Subject;
import com.myapp.dktc.responsitory.SubjectRepository;
import com.myapp.dktc.sevice.SubjectService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertNotNull;
@RunWith(SpringRunner.class)
@DataMongoTest
public  class DktcApplicationTests {

	@Test
	public void contextLoads() {
	}
	@MockBean
	SubjectService subjectService;
	@MockBean
	SubjectRepository subjectRepository;
	@Test
	@Rollback
	public void testCreateSubject(){

		List<Subject> listAll = subjectRepository.findAllSubject();
		System.out.println("---" + listAll);
		assertNotNull(listAll);
	}
}
