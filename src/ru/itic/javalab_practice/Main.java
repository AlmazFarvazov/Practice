package ru.itic.javalab_practice;

import ru.itic.javalab_practice.jdbc.SimpleDataSource;
import ru.itic.javalab_practice.models.Mentor;
import ru.itic.javalab_practice.models.Student;
import ru.itic.javalab_practice.repositories.StudentsRepository;
import ru.itic.javalab_practice.repositories.StudentsRepositoryJdbcImpl;

import java.sql.*;

public class Main {
    private static final String URL = "jdbc:postgresql://localhost:5432/javalab_pract";
    private static final String USER = "postgres";
    private static final String PASSWORD = "m4sl!na";


    public static void main(String[] args) throws SQLException {
        SimpleDataSource dataSource = new SimpleDataSource();
        Connection connection = dataSource.openConnection(URL, USER, PASSWORD);
        StudentsRepository repository = new StudentsRepositoryJdbcImpl(connection);
        Student s = repository.findById((long)1);
        Mentor m1 = new Mentor((long)0, "уацупмц", "укпаку", s);
        Mentor m2 = new Mentor((long)0, "аукппцу", "бамаукики", s);
        s.getMentors().add(m1);
        s.getMentors().add(m2);
        repository.update(s);
        System.out.println(s);
    }
}

