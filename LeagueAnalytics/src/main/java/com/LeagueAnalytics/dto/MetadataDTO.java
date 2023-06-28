package com.LeagueAnalytics.dto;

import java.util.List;

public class MetadataDTO {
	private String dataVersion;
	private String matchId;
	private List<String> participants;

	public String getDataVersion() {
		return dataVersion;
	}

	public void setDataVersion(String value) {
		this.dataVersion = value;
	}

	public String getMatchId() {
		return matchId;
	}

	public void setMatchId(String value) {
		this.matchId = value;
	}

	public List<String> getParticipants() {
		return participants;
	}

	public void setParticipants(List<String> value) {
		this.participants = value;
	}
}
