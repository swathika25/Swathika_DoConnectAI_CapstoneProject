package com.wipro.doconnectai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.doconnectai.entity.Question;
import com.wipro.doconnectai.service.IQuestion;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/questions")
public class QuestionController {
	@Autowired
    private IQuestion questionService;
 
    // Add question
    @PostMapping
    public ResponseEntity<Question> addQuestion(
            @Valid @RequestBody Question question) {
    	log.info("Question added successfully");
        return ResponseEntity.ok(
                questionService.addQuestion(question));
    }
 
    // Get all questions
    @GetMapping
    public ResponseEntity<List<Question>> getAllQuestions() {
    	log.info("Retrieving  all questions");
        return ResponseEntity.ok(
                questionService.getAllQuestions());
    }
 
    // Get question by id
    @GetMapping("/{id}")
    public ResponseEntity<Question> getQuestionById(
            @PathVariable Long id) {
    	log.info("Questions found with Id");
        return ResponseEntity.ok(
                questionService.getQuestionById(id));
    }
 
    // Update question
    @PutMapping("/{id}")
    public ResponseEntity<Question> updateQuestion(
            @PathVariable Long id,
            @Valid @RequestBody Question question) {
    	log.info("Updating question with ID");
        return ResponseEntity.ok(
                questionService.updateQuestion(id, question));
    }
 
    // Delete question
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable Long id) {
 
        questionService.deleteQuestion(id);
        log.info("Question deleted successfully with id");
        return ResponseEntity.ok("Question deleted successfully");
    }

}
