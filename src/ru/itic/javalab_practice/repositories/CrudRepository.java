package ru.itic.javalab_practice.repositories;

import java.util.List;

public interface CrudRepository<T> {
    List<T> findAll();
    T findById(Long Id);
    void save(T entity);
    void update(T entity);
}
