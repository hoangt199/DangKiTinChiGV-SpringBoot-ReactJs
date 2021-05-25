package com.myapp.dktc.sevice;

import com.myapp.dktc.entity.Mathematics;
import com.myapp.dktc.responsitory.MathematicRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class MathematicServiceImpl implements MathematicService {

    @Resource
    MathematicRepository mathematicRepository;

    @Override
    public List<Mathematics> getAllMathematic() {
        return mathematicRepository.getAllListMathematics();
    }

}
