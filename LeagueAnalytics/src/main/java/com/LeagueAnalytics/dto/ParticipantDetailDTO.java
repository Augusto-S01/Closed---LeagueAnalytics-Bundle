package com.LeagueAnalytics.dto;

public class ParticipantDetailDTO {
	private long teamId;

	private long summoner1Id;
	private long summoner2Id;
	private String championName;
	private long champLevel;

	private String lane;
	private String role;
	private String individualPosition;

    private long kills;
	private long assists;
	private long deaths;
	private long totalMinionsKilled;
	private Float csPerMinute;
	
	private String summonerName;
	
	private PerksDTO perks;
	
	
	private long detectorWardsPlaced;
    


	private long wardsKilled;
    private long wardsPlaced;
	
    private long turretKills;
    private long inhibitorKills;
    private long dragonKills;
    private long baronKills;
	
    private long item0;
    private long item1;
    private long item2;
    private long item3;
    private long item4;
    private long item5;
    private long item6;
    
    private boolean win;
    
    
    
    public ParticipantDetailDTO(ParticipantDTO participantDTO, long gameDuration) {
    	this.teamId = participantDTO.getTeamId();
    	this.summoner1Id = participantDTO.getSummoner1Id();
    	this.summoner2Id = participantDTO.getSummoner2Id();
    	this.champLevel = participantDTO.getChampLevel();
    	
    	this.championName = participantDTO.getChampionName();
    	
    	this.lane = participantDTO.getLane();
    	this.role = participantDTO.getRole();
    	
    	this.individualPosition = participantDTO.getIndividualPosition();

    	this.kills = participantDTO.getKills();
    	this.assists = participantDTO.getAssists();
    	this.deaths = participantDTO.getDeaths();
    	this.summonerName = participantDTO.getSummonerName();
    	
    	this.totalMinionsKilled = participantDTO.getTotalMinionsKilled();
    	float minute = (gameDuration / 1000)/60;
    	this.csPerMinute = this.totalMinionsKilled / minute;
    	
    	this.turretKills    = participantDTO.getTurretKills();
    	this.inhibitorKills = participantDTO.getInhibitorKills();
    	this.dragonKills    = participantDTO.getDragonKills();
    	this.baronKills     = participantDTO.getBaronKills();
    
    	
    	this.wardsKilled = participantDTO.getWardsKilled();
    	this.wardsPlaced = participantDTO.getWardsPlaced();
    	this.detectorWardsPlaced = participantDTO.getDetectorWardsPlaced();
    	
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



	public long getTotalMinionsKilled() {
		return totalMinionsKilled;
	}



	public void setTotalMinionsKilled(long totalMinionsKilled) {
		this.totalMinionsKilled = totalMinionsKilled;
	}



	public Float getCsPerMinute() {
		return csPerMinute;
	}



	public void setCsPerMinute(Float csPerMinute) {
		this.csPerMinute = csPerMinute;
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



	public long getTurretKills() {
		return turretKills;
	}



	public void setTurretKills(long turretKills) {
		this.turretKills = turretKills;
	}



	public long getInhibitorKills() {
		return inhibitorKills;
	}



	public void setInhibitorKills(long inhibitorKills) {
		this.inhibitorKills = inhibitorKills;
	}



	public long getDragonKills() {
		return dragonKills;
	}



	public void setDragonKills(long dragonKills) {
		this.dragonKills = dragonKills;
	}



	public long getBaronKills() {
		return baronKills;
	}



	public void setBaronKills(long baronKills) {
		this.baronKills = baronKills;
	}
	
	public long getDetectorWardsPlaced() {
		return detectorWardsPlaced;
	}



	public void setDetectorWardsPlaced(long detectorWardsPlaced) {
		this.detectorWardsPlaced = detectorWardsPlaced;
	}



	public long getWardsKilled() {
		return wardsKilled;
	}



	public void setWardsKilled(long wardsKilled) {
		this.wardsKilled = wardsKilled;
	}



	public long getWardsPlaced() {
		return wardsPlaced;
	}



	public void setWardsPlaced(long wardsPlaced) {
		this.wardsPlaced = wardsPlaced;
	}

    

	
}
