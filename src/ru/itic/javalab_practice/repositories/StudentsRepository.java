package ru.itic.javalab_practice.repositories;

import ru.itic.javalab_practice.models.Student;

import java.util.List;

public interface StudentsRepository extends CrudRepository<Student> {
    List<Student> findAllByAge(int age);
}
