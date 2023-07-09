package com.LeagueAnalytics.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.LeagueAnalytics.compareble.ParticipantRoleComparator;
import com.LeagueAnalytics.dto.leagueDTO.MatchDTO;

public class MatchDetailDTO {
	
	private long gameCreation;
	private String gameMode;
	private String gameType;
	private List<ParticipantResumedDTO> blueTeam;
	private List<ParticipantResumedDTO> redTeam;
	
	public MatchDetailDTO(MatchDTO matchDTO) {
		this.gameCreation = matchDTO.getInfo().getGameCreation();
		this.gameMode = matchDTO.getInfo().getGameMode();
		this.gameType = matchDTO.getInfo().getGameType();
		ParticipantRoleComparator participantRoleComparator = new ParticipantRoleComparator();
		this.setBlueTeam(matchDTO.getInfo().getParticipants().stream()
			.filter( participante -> participante.getTeamId() == 100 )
			.sorted(participantRoleComparator)
			.map(ParticipantResumedDTO::new) 
	        .collect(Collectors.toList()));
		this.redTeam = matchDTO.getInfo().getParticipants().stream()
				.filter( participante -> participante.getTeamId() == 200 )
				.sorted(participantRoleComparator)
				.map(ParticipantResumedDTO::new) 
		        .collect(Collectors.toList());

	}
	
	
	public MatchDetailDTO() {
		
	}
	
	
	
	
	public long getGameCreation() {
		return gameCreation;
	}
	public void setGameCreation(long gameCreation) {
		this.gameCreation = gameCreation;
	}
	public String getGameMode() {
		return gameMode;
	}
	public void setGameMode(String gameMode) {
		this.gameMode = gameMode;
	}
	public String getGameType() {
		return gameType;
	}
	public void setGameType(String gameType) {
		this.gameType = gameType;
	}





	public List<ParticipantResumedDTO> getRedTeam() {
		return redTeam;
	}


	public void setRedTeam(List<ParticipantResumedDTO> redTeam) {
		this.redTeam = redTeam;
	}


	public List<ParticipantResumedDTO> getBlueTeam() {
		return blueTeam;
	}


	public void setBlueTeam(List<ParticipantResumedDTO> blueTeam) {
		this.blueTeam = blueTeam;
	}
	
}
