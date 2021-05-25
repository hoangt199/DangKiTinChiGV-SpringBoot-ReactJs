package com.myapp.dktc.responsitory;

import com.myapp.dktc.entity.ERole;
import com.myapp.dktc.entity.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}