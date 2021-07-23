package com.sapient.eldorado.exceptions;

public class EmptyFieldException extends Exception{

	public EmptyFieldException(String message) {
		super(message+"Empty Field Exception");
	}

}
