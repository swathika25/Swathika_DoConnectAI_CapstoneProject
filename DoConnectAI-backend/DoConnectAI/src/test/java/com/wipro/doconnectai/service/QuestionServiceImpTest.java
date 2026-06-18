package com.wipro.doconnectai.service;
 
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
 
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
 
import com.wipro.doconnectai.entity.Question;
import com.wipro.doconnectai.repository.QuestionRepository;
 
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
 
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
 
@ExtendWith(MockitoExtension.class)
class QuestionServiceImpTest {
 
    @InjectMocks
    private QuestionServiceImp questionService;
 
    @Mock
    private QuestionRepository questionRepository;
 
    private Question question;
 
    @BeforeEach
    void setUp() {
 
        question = new Question();
        question.setQuestionId(1L);
        question.setTitle("Spring Boot Question");
        question.setDescription("JWT implementation");
        question.setTags("spring,jwt");
        question.setPostedBy("swathi");
        question.setCreatedAt(LocalDateTime.now());
    }
 
   
    // ADD QUESTION TEST
   
 
    @Test
    @DisplayName("Test Add Question")
    void testAddQuestion() {
 
        when(questionRepository.save(any(Question.class)))
                .thenReturn(question);
 
        Question result =
                questionService.addQuestion(question);
 
        assertNotNull(result);
        assertEquals("Spring Boot Question", result.getTitle());
 
        verify(questionRepository, times(1))
                .save(any(Question.class));
    }
 
    
    // GET ALL QUESTIONS
    
 
    @Test
    @DisplayName("Test Get All Questions")
    void testGetAllQuestions() {
 
        when(questionRepository.findAll())
                .thenReturn(Arrays.asList(question));
 
        List<Question> result =
                questionService.getAllQuestions();
 
        assertEquals(1, result.size());
    }
 
    
    // GET QUESTION BY ID
    
 
    @Test
    @DisplayName("Test Get Question By ID")
    void testGetQuestionById() {
 
        when(questionRepository.findById(1L))
                .thenReturn(Optional.of(question));
 
        Question result =
                questionService.getQuestionById(1L);
 
        assertNotNull(result);
        assertEquals(1L, result.getQuestionId());
    }
 
    
    // UPDATE QUESTION
    
 
    @Test
    @DisplayName("Test Update Question")
    void testUpdateQuestion() {
 
        Question updated = new Question();
        updated.setTitle("Updated Title");
 
        when(questionRepository.save(any(Question.class)))
                .thenReturn(updated);
 
        Question result =
                questionService.updateQuestion(1L, updated);
 
        assertEquals("Updated Title", result.getTitle());
    }
 
    
    // DELETE QUESTION

 
    @Test
    @DisplayName("Test Delete Question")
    void testDeleteQuestion() {
 
        doNothing().when(questionRepository)
                .deleteById(1L);
 
        questionService.deleteQuestion(1L);
 
        verify(questionRepository, times(1))
                .deleteById(1L);
    }
}
 