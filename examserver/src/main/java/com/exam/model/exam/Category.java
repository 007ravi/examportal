package com.exam.model.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name="category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cid;

    private String title;

    private String description;

    @OneToMany(mappedBy = "category",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore//whenever we fetch data of category then quizzes will not comes with it to avoid cyclic dependency
    private Set<Quiz> quizzes=new LinkedHashSet<>();

    public Category() {
    }

    public Category(Long cid, String title, String description) {
        this.cid = cid;
        this.title = title;
        this.description = description;
    }

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
