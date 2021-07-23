package com.sapient.eldorado.exceptions;

public class DBConnectionException extends Exception {
	public DBConnectionException(String message) {
		super(message + " DB Connection Error");
	}
}
