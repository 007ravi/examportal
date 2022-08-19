package com.exam.model;

public class ResultResponse {
    private int attempted;
    private int correctAnswers;
    private int marksGot;



    public ResultResponse(int attempted, int correctAnswers, int marksGot) {
        this.attempted = attempted;
        this.correctAnswers = correctAnswers;
        this.marksGot = marksGot;
    }

    public int getAttempted() {
        return attempted;
    }

    public void setAttempted(int attempted) {
        this.attempted = attempted;
    }

    public int getCorrectAnswers() {
        return correctAnswers;
    }

    public void setCorrectAnswers(int correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public int getMarksGot() {
        return marksGot;
    }

    public void setMarksGot(int marksGot) {
        this.marksGot = marksGot;
    }
}
