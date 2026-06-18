package com.wipro.doconnectai.exception;


import java.util.*;

import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

	// Handle Resource Not Found Exception
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFoundException(
            ResourceNotFoundException ex) {
 
        return new ResponseEntity<>(
                ex.getMessage(),
                HttpStatus.NOT_FOUND);
    }
 
    // Handle User Already Exists Exception
    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<String> handleUserAlreadyExistsException(
            UserAlreadyExistsException ex) {
 
        return new ResponseEntity<>(
                ex.getMessage(),
                HttpStatus.CONFLICT);
    }
 
    // Handle Validation Exceptions
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationException(
            MethodArgumentNotValidException ex) {
 
        Map<String, String> errors = new HashMap<>();
 
        ex.getBindingResult()
          .getFieldErrors()
          .forEach(error ->
                  errors.put(
                          error.getField(),
                          error.getDefaultMessage()));
 
        return new ResponseEntity<>(
                errors,
                HttpStatus.BAD_REQUEST);
    }
 
    // Handle All Other Exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGlobalException(
            Exception ex) {
 
        return new ResponseEntity<>(
                ex.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
