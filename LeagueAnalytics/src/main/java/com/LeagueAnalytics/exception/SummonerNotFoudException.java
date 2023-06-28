package com.LeagueAnalytics.exception;

public class SummonerNotFoudException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public SummonerNotFoudException(String message) {
        super(message);
    }

    public SummonerNotFoudException(String message, Throwable cause) {
        super(message, cause);
    }
}
