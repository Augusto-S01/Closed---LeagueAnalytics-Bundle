package com.LeagueAnalytics.dto;

public class ParticipantResumedDTO {
	private long teamId;

	private long summoner1Id;
	private long summoner2Id;
	private String championName;

	private String lane;
	private String role;
	private String individualPosition;

    private long kills;
	private long assists;
	private long deaths;
	private double kda;
	
	private String tier;
	private String rank;
	
	private String summonerName;
	
	private PerksDTO perks;
	
    private long item0;
    private long item1;
    private long item2;
    private long item3;
    private long item4;
    private long item5;
    private long item6;
    
    private boolean win;
    
    
    
    public ParticipantResumedDTO(ParticipantDTO participantDTO) {
    	this.teamId = participantDTO.getTeamId();
    	this.summoner1Id = participantDTO.getSummoner1Id();
    	this.summoner2Id = participantDTO.getSummoner2Id();
    	
    	this.championName = participantDTO.getChampionName();
    	
    	this.lane = participantDTO.getLane();
    	this.role = participantDTO.getRole();
    	
    	this.individualPosition = participantDTO.getIndividualPosition();

    	this.kills = participantDTO.getKills();
    	this.assists = participantDTO.getAssists();
    	this.deaths = participantDTO.getDeaths();
    	this.summonerName = participantDTO.getSummonerName();
    	
    	this.perks = participantDTO.getPerks();
    	
    	this.item0 = participantDTO.getItem0();
    	this.item1 = participantDTO.getItem1();
    	this.item2 = participantDTO.getItem2();
    	this.item3 = participantDTO.getItem3();
    	this.item4 = participantDTO.getItem4();
    	this.item5 = participantDTO.getItem5();
    	this.item6 = participantDTO.getItem6();
        
    	this.win = participantDTO.getWin();
    	
    }
    
    public ParticipantResumedDTO() {}

	public long getTeamId() {
		return teamId;
	}

	public void setTeamId(long teamId) {
		this.teamId = teamId;
	}

	public long getSummoner1Id() {
		return summoner1Id;
	}

	public void setSummoner1Id(long summoner1Id) {
		this.summoner1Id = summoner1Id;
	}

	public long getSummoner2Id() {
		return summoner2Id;
	}

	public void setSummoner2Id(long summoner2Id) {
		this.summoner2Id = summoner2Id;
	}

	public String getChampionName() {
		return championName;
	}

	public void setChampionName(String championName) {
		this.championName = championName;
	}

	public String getLane() {
		return lane;
	}

	public void setLane(String lane) {
		this.lane = lane;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getIndividualPosition() {
		return individualPosition;
	}

	public void setIndividualPosition(String individualPosition) {
		this.individualPosition = individualPosition;
	}

	public long getKills() {
		return kills;
	}

	public void setKills(long kills) {
		this.kills = kills;
	}

	public long getAssists() {
		return assists;
	}

	public void setAssists(long assists) {
		this.assists = assists;
	}

	public long getDeaths() {
		return deaths;
	}

	public void setDeaths(long deaths) {
		this.deaths = deaths;
	}

	public String getSummonerName() {
		return summonerName;
	}

	public void setSummonerName(String summonerName) {
		this.summonerName = summonerName;
	}

	public PerksDTO getPerks() {
		return perks;
	}

	public void setPerks(PerksDTO perks) {
		this.perks = perks;
	}

	public long getItem0() {
		return item0;
	}

	public void setItem0(long item0) {
		this.item0 = item0;
	}

	public long getItem1() {
		return item1;
	}

	public void setItem1(long item1) {
		this.item1 = item1;
	}

	public long getItem2() {
		return item2;
	}

	public void setItem2(long item2) {
		this.item2 = item2;
	}

	public long getItem3() {
		return item3;
	}

	public void setItem3(long item3) {
		this.item3 = item3;
	}

	public long getItem4() {
		return item4;
	}

	public void setItem4(long item4) {
		this.item4 = item4;
	}

	public long getItem5() {
		return item5;
	}

	public void setItem5(long item5) {
		this.item5 = item5;
	}

	public long getItem6() {
		return item6;
	}

	public void setItem6(long item6) {
		this.item6 = item6;
	}

	public boolean isWin() {
		return win;
	}

	public void setWin(boolean win) {
		this.win = win;
	}
}
