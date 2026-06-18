package com.wipro.doconnectai.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.doconnectai.entity.Answer;
import com.wipro.doconnectai.service.IAnswer;

import jakarta.validation.Valid;
 import lombok.extern.slf4j.Slf4j;

 @Slf4j
@RestController
@RequestMapping("/answers")
public class AnswerController {
	
	@Autowired
    private IAnswer answerService;
 
    //Add answer
    @PostMapping
    public ResponseEntity<Answer> addAnswer(@Valid @RequestBody Answer answer) {
    	log.info("Adding answers");
        return ResponseEntity.ok(answerService.addAnswer(answer));
    }
 
    // Get all answers
    @GetMapping
    public ResponseEntity<List<Answer>> getAllAnswers() {
        log.info("get all answers");
 
        return ResponseEntity.ok(answerService.getAllAnswers());
    }
 
    // Get answer by id
    @GetMapping("/{id}")
    public ResponseEntity<Answer> getAnswerById(@PathVariable Long id) {
      log.info("Get answers by id");
        return ResponseEntity.ok(answerService.getAnswerById(id));
    }
 
    // Update answer
    @PutMapping("/{id}")
    public ResponseEntity<Answer> updateAnswer(@PathVariable Long id, @Valid @RequestBody Answer answer) {
      log.info("update answers by id");
        return ResponseEntity.ok(answerService.updateAnswer(id, answer));
    }
 
    
    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<Answer>>getAnswerByQuestionId(@PathVariable Long questionId){
        log.info("get answers by their question id");
    	return ResponseEntity.ok(answerService.getAnswerByQuestionId(questionId));
    }
    
    
    
    // Delete answer
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAnswer(@PathVariable Long id) {
        
        answerService.deleteAnswer(id);
        log.info("answer deleted successfully");
        return ResponseEntity.ok("Answer deleted successfully");
    }

}
