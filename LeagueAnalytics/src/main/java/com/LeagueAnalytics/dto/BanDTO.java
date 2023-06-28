package com.LeagueAnalytics.dto;

public class BanDTO {
	private long championId;
    private long pickTurn;

    public long getChampionId() { return championId; }
    public void setChampionId(long value) { this.championId = value; }

    public long getPickTurn() { return pickTurn; }
    public void setPickTurn(long value) { this.pickTurn = value; }
}
