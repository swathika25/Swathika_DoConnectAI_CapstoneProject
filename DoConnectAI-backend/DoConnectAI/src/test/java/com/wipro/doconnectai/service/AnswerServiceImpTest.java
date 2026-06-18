package com.wipro.doconnectai.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
 
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
 
import com.wipro.doconnectai.entity.Answer;
import com.wipro.doconnectai.entity.Question;
import com.wipro.doconnectai.repository.AnswerRepository;
import com.wipro.doconnectai.repository.QuestionRepository;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
 
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
 
@ExtendWith(MockitoExtension.class)
class AnswerServiceImpTest {
 
    @InjectMocks
    private AnswerServiceImp answerService;
 
    @Mock
    private AnswerRepository answerRepository;
 
    @Mock
    private QuestionRepository questionRepository;
 
    private Answer answer;
    private Question question;
 
    @BeforeEach
    void setUp() {
 
        question = new Question();
        question.setQuestionId(1L);
 
        answer = new Answer();
        answer.setAnswerId(1L);
        answer.setContent("Test Answer");
        answer.setCreatedAt(LocalDateTime.now());
        answer.setQuestion(question);
    }
 
    
    // ADD ANSWER TEST
   
    @Test
    @DisplayName("Test - Add Answer Successfully")
    void testAddAnswer() {
 
        when(questionRepository.findById(1L))
                .thenReturn(Optional.of(question));
 
        when(answerRepository.save(any(Answer.class)))
                .thenReturn(answer);
 
        Answer result = answerService.addAnswer(answer);
 
        assertNotNull(result);
        assertEquals("Test Answer", result.getContent());
 
        verify(answerRepository, times(1))
                .save(any(Answer.class));
    }
 
   
    // GET ALL ANSWERS
    
    @Test
    @DisplayName("Test - Get All Answers")
    void testGetAllAnswers() {
 
        when(answerRepository.findAll())
                .thenReturn(Arrays.asList(answer));
 
        List<Answer> result = answerService.getAllAnswers();
 
        assertEquals(1, result.size());
    }
 
    
    // GET ANSWERS BY QUESTION ID
   
 
    @Test
    @DisplayName("Test - Get Answers By Question ID")
    void testGetAnswerByQuestionId() {
 
        when(answerRepository.findByQuestionQuestionId(1L))
                .thenReturn(Arrays.asList(answer));
 
        List<Answer> result =
                answerService.getAnswerByQuestionId(1L);
 
        assertEquals(1, result.size());
    }
 
    
    // GET ANSWER BY ID
   
 
    @Test
    @DisplayName("Test - Get Answer By ID")
    void testGetAnswerById() {
 
        when(answerRepository.findById(1L))
                .thenReturn(Optional.of(answer));
 
        Answer result =
                answerService.getAnswerById(1L);
 
        assertNotNull(result);
        assertEquals(1L, result.getAnswerId());
    }
 
    
    // DELETE ANSWER

 
    @Test
    @DisplayName("Test - Delete Answer")
    void testDeleteAnswer() {
 
        doNothing().when(answerRepository)
                .deleteById(1L);
 
        answerService.deleteAnswer(1L);
 
        verify(answerRepository, times(1))
                .deleteById(1L);
    }

}
