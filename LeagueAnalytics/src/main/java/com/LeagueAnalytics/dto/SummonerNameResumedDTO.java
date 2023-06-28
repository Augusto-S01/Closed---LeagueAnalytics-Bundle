package com.LeagueAnalytics.dto;

public class SummonerNameResumedDTO {
	private String id;
    private String puuid;
    private long profileIconId;
    private long summonerLevel;
    
    
    
    
    
    
	public SummonerNameResumedDTO() {}
	public SummonerNameResumedDTO(SummonerNameDTO summonerNameDTO) {
		this.id = summonerNameDTO.getId();
		this.puuid = summonerNameDTO.getPuuid();
		this.profileIconId = summonerNameDTO.getProfileIconId();
		this.summonerLevel = summonerNameDTO.getSummonerLevel();
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPuuid() {
		return puuid;
	}
	public void setPuuid(String puuid) {
		this.puuid = puuid;
	}
	public long getProfileIconId() {
		return profileIconId;
	}
	public void setProfileIconId(long profileIconId) {
		this.profileIconId = profileIconId;
	}
	public long getSummonerLevel() {
		return summonerLevel;
	}
	public void setSummonerLevel(long summonerLevel) {
		this.summonerLevel = summonerLevel;
	}
    
    
}
