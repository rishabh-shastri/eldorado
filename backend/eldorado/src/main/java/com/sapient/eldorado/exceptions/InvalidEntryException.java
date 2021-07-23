package com.sapient.eldorado.exceptions;

public class InvalidEntryException extends Exception {
	
	public InvalidEntryException(String message) {
		super(message+"Invalid Entry Error");
	}

}
