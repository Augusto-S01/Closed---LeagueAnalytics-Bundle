package com.LeagueAnalytics.dto;

import com.LeagueAnalytics.dto.leagueDTO.LeagueEntryDTO;

public class LeagueEntryResumeDTO {

	private String queueType;
	private String tier;
	private String rank;
	private long leaguePoints;
	private long wins;
	private long losses;
	
	public LeagueEntryResumeDTO() {}
	public LeagueEntryResumeDTO(LeagueEntryDTO leagueEntryDTO) {
		this.queueType = leagueEntryDTO.getQueueType();
		this.tier = leagueEntryDTO.getTier();
		this.rank = leagueEntryDTO.getRank();
		this.leaguePoints = leagueEntryDTO.getLeaguePoints();
		this.wins = leagueEntryDTO.getWins();
		this.losses = leagueEntryDTO.getLosses();
	}
	
	
	
	public String getQueueType() {
		return queueType;
	}
	public void setQueueType(String queueType) {
		this.queueType = queueType;
	}
	public String getTier() {
		return tier;
	}
	public void setTier(String tier) {
		this.tier = tier;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	public long getLeaguePoints() {
		return leaguePoints;
	}
	public void setLeaguePoints(long leaguePoints) {
		this.leaguePoints = leaguePoints;
	}
	public long getWins() {
		return wins;
	}
	public void setWins(long wins) {
		this.wins = wins;
	}
	public long getLosses() {
		return losses;
	}
	public void setLosses(long losses) {
		this.losses = losses;
	}
	
	
}
